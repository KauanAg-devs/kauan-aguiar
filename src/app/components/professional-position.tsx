type ProfessionalPositionProps = {
    children: React.ReactNode
}

export default function ProfessionalPosition({children}: ProfessionalPositionProps){
    return (
        <h2>{children}</h2>
    )
}