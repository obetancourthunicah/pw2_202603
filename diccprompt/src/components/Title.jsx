const Title = ( { text } )=>{
    let finalText = text ?? "Título del Componente";
    return (
        <h1 className="large-title">{finalText}</h1>
    )
}

export default Title;