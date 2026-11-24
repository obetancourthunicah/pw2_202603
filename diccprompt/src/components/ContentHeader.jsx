const ContentHeader = ({title})=>{
    const titleFinal = title??"Falta Definir Título";
    return(
        <section className="content-header">
            <h2>{titleFinal}</h2>
        </section>
    )
}

export default ContentHeader;