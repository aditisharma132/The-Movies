import { img_300, unavailable } from "../../config/config"
import "./SingleContent.css"
export const SingleContent = ({
    id,
    poster,
    title,
    date,
}) => {
    return (
        
        <div className="media">
        <img className="poster" src={ poster? `${img_300}/${poster}` : unavailable} alt={title} />
        <b className="title">{title}</b>
        <span className="sunTitle">{date}</span>
         </div>
    );
};
