import { useContext } from "react";
import { AdminAllStoriesTable } from "../../components/AdminAllStoriesTable";

import { StoriesContext } from "../../context/stories/StoriesContext";

export function AdminAllStoriesDraftPage() {
    const { adminStories } = useContext(StoriesContext);

    return (
        <main>
             <h1> "# Draft stories" </h1>
            <AdminAllStoriesTable list={adminStories.filter(item => item.status_name === 'draft')} />
        </main>
    );
}