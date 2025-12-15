import axios from "axios";

export const req = axios.create({
    baseURL: 'http://localhost:1000'
});

req.interceptors.request.use((config) => {
    let token = localStorage.getItem('authToken');

    if (token) {
        token = token.replace(/"/g, ''); 
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

req.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const oldRefreshToken = localStorage.getItem('refreshToken');

                const { data } = await axios.post('http://localhost:1000/refresh', {
                    refreshToken: oldRefreshToken
                });

                localStorage.setItem('authToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);

                originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

                return req(originalRequest);

            } catch (refreshError) {
                localStorage.removeItem('authToken');
                localStorage.removeItem('refreshToken');
                window.location.href = '/login'; 
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);