type FooterProps = {
    children: React.ReactNode
}

export function Footer({children}: FooterProps){
    return (
       <footer className="h-auto w-screen flex">
        {children}
       </footer>
    )
}


