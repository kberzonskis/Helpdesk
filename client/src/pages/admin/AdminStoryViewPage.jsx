
import { Link } from "react-router";
import { SERVER_ADDRESS } from "../../../env";
import { useContext } from "react";
import { StoriesContext } from "../../context/stories/StoriesContext";
import { AdminViewStoryTable } from "../../components/AdminStoryViewTable";
import { useParams } from 'react-router';


export function AdminStoryViewPage(){
    const { getAdminStoryByUrlSlug } = useContext(StoriesContext);
  
    const { story } = useParams();

    const storyData = getAdminStoryByUrlSlug(story);

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
                    <div className="col-12 col-md-9 mt-5">
                        <>
                    <AdminViewStoryTable data={storyData} />
                        </>      
                    </div>
                </div>
            </div>
        </main>
    );
}
 













