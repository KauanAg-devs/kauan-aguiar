type MainProps = {
    children: React.ReactNode
}

export function Main({children}: MainProps){
    return (
       <main className="h-auto w-screen flex">
        {children}
       </main>
    )
}