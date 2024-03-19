import logo from '../assets/logo.svg'

export function Header() {
    return (
        <header className="w-full bg-gray-700 flex items-center justify-center h-[200px]">
            <img src={logo} alt="Todo APP"/>
        </header>
    )
}