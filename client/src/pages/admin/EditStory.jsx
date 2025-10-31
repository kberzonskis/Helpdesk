import { useContext } from "react";

import { EditStoryForm } from "../../components/EditStoryForm"; 
import { StoriesContext } from "../../context/stories/StoriesContext";
import { useParams } from "react-router";
import { SERVER_ADDRESS } from "../../../env";

export function AdminEditStoryPage() {
    const { getAdminStoryByUrlSlug } = useContext(StoriesContext);
    const { story } = useParams();

    const storyData = getAdminStoryByUrlSlug(story);

    return (
        <main>
                  <title>={`View story: "${story}"`} </title>

            <div className="container">
                <div className="row">
                    {
                        storyData
                            ? <EditStoryForm
                                api={SERVER_ADDRESS + '/api/admin/stories/' + storyData.url_slug}
                                method="PUT"
                                story={storyData} />
                            : (
                                <div className="col-12 col-md-9 mt-5">
                                   <p text='Norima istorija nerasta, todel redagavimas yra neimanomas.' />
                                </div>
                            )
                    }
                </div>
            </div>
        </main>
    );
}