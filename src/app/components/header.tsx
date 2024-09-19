type HeaderProps = {
    children: React.ReactNode
}

export function Header({children}: HeaderProps){
    return (
       <header className="h-auto w-screen flex">
        {children}
       </header>
    )
}


