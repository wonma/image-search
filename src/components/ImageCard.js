import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = { span: null };
    }

    componentDidMount() {
        // console.log(this.imageRef.current.clientHeight);
        this.imageRef.current.addEventListener('load', this.setSpan);
    }

    setSpan = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 2) + 10;

        this.setState({ span: spans });
    }

    render() {
        const { urls, description } = this.props.image;

        return (
            <img style={{ gridRowEnd: `span ${this.state.span}`}} ref={this.imageRef} alt={description} src={urls.regular} />
        );
    }
}

export default ImageCard;