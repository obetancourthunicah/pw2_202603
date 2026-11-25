import Header from  './Header';
import SideBar from './SideBar';
//TODO: Change to react-router Outlet component when implemented;
import {Outlet} from 'react-router';

const Page = ()=>{
    return(
        <section className="page">
            <SideBar />
            <section className="page-right">
                <Header />
                <div className="border p-4 border-primary-400 rounded-xl flex-1">
                    <Outlet/>
                </div>
            </section>
        </section>
    );
}

export default Page;