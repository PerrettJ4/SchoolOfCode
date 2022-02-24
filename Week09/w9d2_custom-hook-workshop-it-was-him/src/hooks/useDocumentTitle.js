import { useEffect } from "react";

/*
import useEffect
pass in the title 
export
*/
function useDocumentTitle(newTitle) {
    useEffect(()=>{
        document.title = newTitle;
    }, [newTitle]);
}

export default useDocumentTitle;