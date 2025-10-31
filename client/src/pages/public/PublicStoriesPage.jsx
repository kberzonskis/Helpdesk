import { StoryCard } from '../../components/StoryCard';
import { useContext } from 'react';
import { StoriesContext } from '../../context/stories/StoriesContext';



export function StoriesPage() {
     const { publicStories } = useContext(StoriesContext);
  

    return (
        <main className='min-page-height'>
          <title> {`View pupblic stories:`} </title>

            <div className="container px-4" id="featured-3">
                <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    {publicStories.map(story =><StoryCard key={story.title} story={story} />)}
                </div>
            </div>
        </main>
    );
}


