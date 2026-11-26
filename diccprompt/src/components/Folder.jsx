const Folder = (
    {
        folderName,
        amountOfPrompts,
        lastModified
    }
)=>{
    return (
        <div className="folder">
            <div>{folderName}</div>
            <div>{amountOfPrompts}</div>
            <div>{lastModified}</div>
        </div>
    );
}

export default Folder;