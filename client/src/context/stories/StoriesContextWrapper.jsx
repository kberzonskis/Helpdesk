import { useContext, useEffect, useState } from "react";
import { StoriesContext } from "./StoriesContext";
import { initialStoriesContext } from "./initialStoriesContext";
import { UserContext } from "../user/UserContext";
import { SERVER_ADDRESS } from "../../../env";

export function StoriesContextWrapper(props) {
    const [publicStories, setPublicStories] = useState(initialStoriesContext.publicStories);
    const [adminStories, setAdminStories] = useState(initialStoriesContext.adminStories);

    const { isLoggedIn } = useContext(UserContext);
     
   function updatePublicStories() {
        fetch(SERVER_ADDRESS + '/api/stories', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setPublicStories(() => data.stories);
                }
            })
            .catch(console.error);
    }

    function updateAdminStories() {
        fetch(SERVER_ADDRESS + '/api/admin/stories', {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setAdminStories(() => data.stories);
                }
            })
            .catch(console.error);
    }

    function deletePublicStory(urlSlug) {
        setPublicStories(currentList => currentList.filter(story => story.url_slug !== urlSlug));
    }

    function deleteAdminStory(urlSlug) {
        setAdminStories(currentList => currentList.filter(story => story.url_slug !== urlSlug));
    }

    function getPublicStoryByUrlSlug(urlSlug) {
        return publicStories.find(story => story.url_slug === urlSlug);

       }
   

    function getAdminStoryByUrlSlug(urlSlug) {
        return adminStories.find(story => story.url_slug === urlSlug);
        
        
    }console.log(getAdminStoryByUrlSlug)
    

    function getAdminStoryById(id) {
        return adminStories.find(story => story.id === id);
    }

    useEffect(updatePublicStories, []);

    useEffect(() => {
        if (isLoggedIn) {
            updateAdminStories();
        } else {
            setAdminStories(() => initialStoriesContext.adminStories);
        }
    }, [isLoggedIn]);

    const values = {
        publicStories,
        adminStories,
        getPublicStoryByUrlSlug,
        getAdminStoryByUrlSlug,
        getAdminStoryById,
        updatePublicStories,
        updateAdminStories,
        deletePublicStory,
        deleteAdminStory,

    };

    return (
        <StoriesContext.Provider value={values}>
            {props.children}
        </StoriesContext.Provider>
    )
}