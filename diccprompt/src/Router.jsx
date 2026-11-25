import {  Routes, Route } from "react-router";

import Page from "./components/Page";
import Home from "./pages/Home";
import NewPrompt from "./pages/NewPrompt";

const Router = ()=>{
    return(
        <Routes>
            <Route element={<Page/>} >
                <Route path="/" element={<Home/>} />
                <Route path="/new" element={<NewPrompt/>} />
            </Route>
        </Routes>
    )
}

export default Router;