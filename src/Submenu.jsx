import { useGlobalContext } from "./Context";
import sublinks from "./data";

function Submenu(){
    const {pageId} = useGlobalContext();
    const currentPage = sublinks.find((item) => item.pageId === pageId);
    
    return(
        <div className={currentPage? "submenu-show" : "submenu"}>
            <h5 style={{marginBottom: "1rem"}}>{currentPage?.page}</h5>
            <div className="submenu-links" style={{gridTemplateColumns: currentPage?.links.length > 3 ? "1fr 1fr": "1fr"}}>
               {currentPage?.links.map((link) =>{
                const {id,icon,label,url} = link;
                return <a style={{padding: "20px"}} href={url} key={id}>{icon} {label}</a>
               })}
            </div>
        </div>
    )
};

export default Submenu;