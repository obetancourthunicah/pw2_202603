import segundoPage from './pages/segundo';

const getPageContext = (pagePath)=>{
    console.log("Page Path to Provide:", pagePath);
    let pageData = {};
    switch (pagePath) {
        case '/segundo.html':
            pageData = segundoPage;
    }
    console.log(
        "Data to Inject:",
        JSON.stringify(
            pageData,
            null,
            2
        )
    );
    return pageData;
}

export default getPageContext;
