import { Link, useLocation } from 'react-router-dom'

import { cn } from '../../utils';

import Logo from '../../assets/Logo.svg'

export const Header = () => {
    const { pathname } = useLocation()

    const isSolicitationsList = pathname === "/"

    return (
        <header className='flex w-full justify-between items-center pt-5 px-20'>
            <img src={Logo} alt="Logo" />

            <nav className='flex gap-4 items-center'>
                <Link className={cn(isSolicitationsList ? "text-button" : "")} to="/">Solicitações de reembolso</Link>
                <Link className='flex items-center p-5 min-w-38.75 h-12 bg-button rounded-md text-white' to="/newrefund">Nova solicitação</Link>     
            </nav>
        </header>
    )
}