import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const images = props.imageArray.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });

    return <div className="image-list">{images}</div> ; // tag로 감싸져서 나온 데이터 리스트를 저곳에 넣게 될 뿐.
}

export default ImageList;
