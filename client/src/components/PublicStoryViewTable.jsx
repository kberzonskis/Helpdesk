import { useNavigate } from "react-router";

import moment from 'moment';
import { Link } from 'react-router';
import { SERVER_ADDRESS } from '../../env';
import defaultImg from '../assets/story.webp';
import { useContext, useState} from "react";
import { useParams } from 'react-router';
import { StoriesContext } from "../context/stories/StoriesContext";

export function PublicViewStoryTable({ data }) {
const [isVisible, setIsVisible] = useState(false);
const [isVisible2, setIsVisible2] = useState(false);
const created = moment(data.created_at).format('YYYY-MM-DD');
const { getPublicStoryByUrlSlug } = useContext(StoriesContext);
const { story } = useParams();
const storyData = getPublicStoryByUrlSlug(story)

const imgPath = data.img ? (SERVER_ADDRESS + '/img/stories/' + data.img): defaultImg;

// Update state to show the element


return (
<table style={{ color: 'black',
               fontWeight: 'bold',}} className="redTable">
    <tbody>
        <tr className="mb-3">
            <td>Id</td>
            <td>{data.id}</td>
        </tr>
        <tr className="mb-3">
            <td>Title</td>
            <td>{data.title}</td>
        </tr>
        <tr className="mb-3">
            <td>url</td>
            <td>{data.url_slug}</td>
        </tr>
        <tr className="mb-3">
            <td>Description</td>
            <td>{data.description}</td>
        </tr>

        <tr className="mb-3">
            <td><button className="btn btn-success me-2" onClick={()=> setIsVisible(!isVisible)}>{!isVisible?<>cration date</>:<>close</>}</button></td>
            <td> {isVisible ? <div>{created}</div> : 'smile'}</td>

        </tr>
        
        <tr className="mb-3">
            <td><button className="btn btn-primary me-2" onClick={()=> setIsVisible2(!isVisible2)}>{!isVisible2?<>click Img</>:<>close</>}</button></td>
           <td> {isVisible2 ? <img src={imgPath} alt="story thumbnail" style={{maxWidth:'10rem', maxHeight: '10rem', borderRadius:'10px' }} /> : 'justClick'}</td> 
        
            
        </tr>
      

        <tr className="mb-3">
            <td>Status</td>
            <td>
                {
                data.status_name === 'published'
                ? <span className="badge text-bg-warning">Draft</span>
                : <span className="badge text-bg-success">Published</span>
                }
            </td>

        </tr>

    </tbody>

</table>
);
}