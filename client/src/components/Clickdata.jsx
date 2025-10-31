import { useParams } from "react-router";
import { useContext, useState } from "react";
import { StoriesContext } from "../context/stories/StoriesContext";


export function Handle() {
    

const [isVisible, setIsVisible] = useState(false);

const handleClick = () => {
setIsVisible(true); // Update state to show the element
};

return (

 <tr className="mb-3">
           
            <td><button onClick={handleClick} type="submit" className="btn btn-secondary w-80 py-2 fs-12">Crated_AT</button></td>
            <td>{isVisible && <div>{story.created_at}</div>}</td>
</tr>


);
}