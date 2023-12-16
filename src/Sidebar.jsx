import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import {useGlobalContext} from "./Context";

function Sidebar(){
    const {isSidebarOpen, closeSidebar} = useGlobalContext();
    
    return(
       <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <div className="sidebar-container">
            <button className="close-btn" onClick={closeSidebar}><FaTimes /></button>
            <div className="sidebar-links">
                {sublinks.map((item) =>{
                    const {pageId,page,links} = item;
                    return <article key={pageId}>
                        <h4>{page}</h4>
                        <div className="sidebar-sublinks">
                            {links.map((link) =>{
                                const {id,url,label,icon} = link;
                                return <a className="sidebar-sublink" href={url} key={id}>{label} {icon}</a>
                            })}
                        </div>
                    </article>
                })}
            </div>
        </div>
       </aside>
    )
};

export default Sidebar;