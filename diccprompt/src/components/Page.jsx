import Header from  './Header';
import SideBar from './SideBar';
//TODO: Change to react-router Outlet component when implemented;
import Outlet from './Outlet';
const Page = ({children})=>{
    return(
        <section className="page">
            <Header />
            <SideBar />
            <Outlet>{children}</Outlet>
        </section>
    );
}

export default Page;