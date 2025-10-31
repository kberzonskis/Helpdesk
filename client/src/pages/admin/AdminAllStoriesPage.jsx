import { useContext } from "react";
import { AdminAllStoriesTable } from "../../components/AdminAllStoriesTable";
import { StoriesContext } from "../../context/stories/StoriesContext";

export function AdminAllStoriesPage() {
    const { adminStories } = useContext(StoriesContext);

    return (
        <main>
             <h1>"# All stories"</h1>
            <AdminAllStoriesTable list={adminStories} />
        </main>
    );
}