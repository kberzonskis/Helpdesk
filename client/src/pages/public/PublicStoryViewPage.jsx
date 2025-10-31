
import { Link } from "react-router";
import { SERVER_ADDRESS } from "../../../env";
import { useContext } from "react";
import { StoriesContext } from "../../context/stories/StoriesContext";
import { PublicViewStoryTable } from "../../components/PublicStoryViewTable";
import { useParams } from 'react-router';


export function PublicStoryViewPage(){
    const { getPublicStoryByUrlSlug } = useContext(StoriesContext);
    
    const { story, urlSlug } = useParams();

    const storyData = getPublicStoryByUrlSlug(story);

    return (
        <main>
             <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="fst-italic">{` Istorijos peržiūra: "${story}"`}</h3>
                </div>
            </div>
        </div>
            <div className="container">
                <div className="row">
                    <div 
   className="col-12 col-md-9 mt-5">

  
 

                       {storyData
                       ?(
                        <>
                    <PublicViewStoryTable data={storyData} />
                        </>  
                       )
                      : <p></p>  
                    }
                    </div>
                </div>
            </div>
        </main>
    );
}
 










