import { ButtonProps } from "@/interfaces"

const Button: React.FC = ({ title, action}) => {
    return (
        <button onClick={action}className="px-8 py-2 border-2 border-[#E2D609] hover:text-black transition-colors duration-300">
            {title}
        </button>
    )
}
export default Button;