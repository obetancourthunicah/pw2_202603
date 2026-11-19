const Title = ( { text } )=>{
    let finalText = text ?? "Título del Componente";
    return (
        <h1>{finalText}</h1>
    )
}

export default Title;