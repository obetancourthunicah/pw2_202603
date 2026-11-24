import ContentHeader from "../components/ContentHeader";
import PromptsFolder from "../components/Prompts/PormptsFolder";
import FrequentlyFetchPrompts from "../components/Prompts/FrequentlyFetchPrompts";
const Home = ()=>{
    return(
        <>
            <ContentHeader title="Home Page" />
            <PromptsFolder />
            <FrequentlyFetchPrompts />
        </>
    )
}

export default Home;