import React from 'react';
import ImageScore from './image_score';

const ImageDetail = (props) => {
    // props.image => this is the image object
    const { title, link, description, ups, downs } = props.image;
    return (
        <li className="media list-group-item">
            <div className="media-left">
                <img src={link} alt={title} />
            </div>
            <div className="media-body">
                <h4 className="media-heading">
                    {title}
                </h4>
                <p>{description}</p>
                <ImageScore ups={ups} downs={downs} />
            </div>
        </li>
    );
};

export default ImageDetail;