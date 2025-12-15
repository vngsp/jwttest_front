import Image from 'next/image'

const LogoForm = () => {
    return (
        <div className='flex items-center justify-center gap-2'>
            <Image src='/whiteKey.png' alt='key-logo' width={25} height={25} />
            <h2 className='font-bold'>TokenLog</h2>
        </div>
    )
}

export default LogoForm;