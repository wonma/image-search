import React from 'react';

class ImageCard extends React.Component {
    render() {
        const { urls, description } = this.props.image;

        return (
            <img    alt={description} src={urls.regular} />
        );
    }
}

export default ImageCard;