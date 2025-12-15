type Props = {
    label: string,
    bgColor: string,
    hoverColor?: string,
    onClick?: () => void
}

const DefaultBtn = ({ label, bgColor, hoverColor, onClick }: Props) => {
    return (
        <button
            type="submit"
            className={`rounded-xl cursor-pointer ${bgColor} p-2 ${hoverColor}`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default DefaultBtn;