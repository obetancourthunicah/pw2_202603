import segundoPage from './pages/segundo.js';
import terceroPage from './pages/tercero.js';
const getPageContext = (pagePath)=>{
    console.log("Page Path to Provide:", pagePath);
    let pageData = {};
    switch (pagePath) {
        case '/segundo.html':
            pageData = segundoPage;
        case '/tercero.html':
            pageData = terceroPage;
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
