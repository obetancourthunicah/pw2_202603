import Folder from "../Folder";

const folderData = [
    {
        folderName:"Común",
        amountOfPrompts:5,
        lastModified:new Date().toISOString()
    },
    {
        folderName:"Universidad",
        amountOfPrompts:15,
        lastModified:new Date().toISOString()
    },
    {
        folderName:"Trabajo",
        amountOfPrompts:95,
        lastModified:new Date().toISOString()
    },
    {
        folderName:"Iglesia",
        amountOfPrompts:45,
        lastModified:new Date().toISOString()
    },
     {
        folderName:"Amigos",
        amountOfPrompts:5,
        lastModified:new Date().toISOString()
    },
]
;

const PromptsFolder = ()=>{
    return(
        <>
            <h2>Prompts Folder</h2>
            <section className="flex flex-wrap gap-4">
                {
                    folderData.map(
                        (folder) => {
                            return (
                                <Folder
                                    key={folder.folderName}
                                    folderName={folder.folderName}
                                    amountOfPrompts={folder.amountOfPrompts}
                                    lastModified={folder.lastModified}
                                />
                            )
                        }
                    )
                }

            </section>
        </>

    )
}

export default PromptsFolder;