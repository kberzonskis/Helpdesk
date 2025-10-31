
import { Link } from 'react-router';
import { SERVER_ADDRESS } from '../../env';
import defaultImg from '../assets/story.webp';


export function StoryCard({ story }) {
    const imgPath = story.img ? (SERVER_ADDRESS + '/img/stories/' + story.img) : defaultImg;
    return (
        <div className="feature col my-4"  >
            <h3 className="fs-2 text-body-emphasis">{story.title}</h3>
            <p>{story.description}</p>
            <div className='row object-fit-cover'>
             <img  src={imgPath} alt="story thumbnail" style={{maxWidth:'20rem', maxHeight: '20rem', borderRadius:'10px'}} />
            <Link to={'/stories/' + story.url_slug} style={{color:'red'}}className="icon-link">Read more</Link>
            </div>
        </div>
    );
}