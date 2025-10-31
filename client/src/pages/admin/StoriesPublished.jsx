import { useContext } from "react";
import { AdminAllStoriesTable } from "../../components/AdminAllStoriesTable";

import { StoriesContext } from "../../context/stories/StoriesContext";

export function AdminAllStoriesPublishedPage() {
    const { adminStories } = useContext(StoriesContext);

    return (
        <main>
            <h1>"# Published stories"</h1>
            <AdminAllStoriesTable list={adminStories.filter(item => item.status_name === 'published')} />
        </main>
    );
}