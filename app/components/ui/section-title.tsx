type TitleProps={
    title:string;
}

const SectionTitle = ({title}:TitleProps) => {
    return (
        <div className="flex items-center justify-center">
            <h2 className="section-title">{title}</h2>
            <span className="block h-1 w-full bg-black"></span>
        </div>
    )
}

export default SectionTitle
