type HeaderProps = {
    children: React.ReactNode
}

export function Header({children}: HeaderProps){
    return (
       <header className="h-auto w-screen flex justify-center flex-col items-center py-2">
        {children}
       </header>
    )
}


