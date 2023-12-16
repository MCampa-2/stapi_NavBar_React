import sublinks from "./data";
import { useGlobalContext } from "./Context";

function NavLinks(){
         const {setPageId} = useGlobalContext();
         
    return(
        <div className="nav-links">
            {sublinks.map((item) =>{
                const {pageId, page} = item;
                return(
                    <button onMouseEnter={() => setPageId(pageId)} className="nav-link" key={pageId}>{page}</button>
        
                )
            })}
        </div>
    )
};

export default NavLinks;