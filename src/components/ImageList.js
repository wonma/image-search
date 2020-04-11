import React from 'react';


const ImageList = (props) => {
    const images = props.imageArray.map(({id, urls, description}) => {
        return <img key={id} src={urls.regular} alt={description} />
    });

    return <div>{images}</div> ; // tag로 감싸져서 나온 데이터 리스트를 저곳에 넣게 될 뿐.

    // return (
    //     <ul>
    //         {
    //             props.imageArray.map((image) => {
    //                 const url = image.urls.regular;
    //                 return (
    //                     <li>
    //                         <img src={url} style={{ width: "200px", height: "auto" }} />
    //                     </li>
    //                 );
    //             })
    //         }
    //     </ul>
    // );
}

export default ImageList;
