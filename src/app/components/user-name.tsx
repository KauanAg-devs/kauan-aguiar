type UserNameProps = {
    children: React.ReactNode
}

export default function UserName({children}: UserNameProps){
    return (
        <h1 className="font-normal font-mono text-sm md:text-lg">{children}</h1>
    )
}