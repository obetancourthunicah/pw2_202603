import { NavLink, useMatch } from 'react-router';
import { RxHome, RxFilePlus } from "react-icons/rx";
const SideBar = ()=>{
    const isHome = useMatch('/');
    const isNew = useMatch('/new');
    return(
        <section className="sidebar">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={isHome?"active":null} ><RxHome size={32}/></NavLink>
                    </li>
                    <li>
                        <NavLink to="/new" className={isNew?"active":null}><RxFilePlus size={32}/></NavLink>
                    </li>
                    <li>
                        <a href>3</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default SideBar;