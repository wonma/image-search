import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import axios from 'axios';
import unsplash from '../api/unsplash';

// import Unsplash, {toJson} from 'unsplash-js';

// const unsplash = new Unsplash({ accessKey: "5bV1JEDY3Jf3k53oClnZGO-X4q0Gw7SAlJ-TdBPXEac" });

class App extends React.Component {
    state = {
        imageArray: []
    }

    // onSearchSubmit = (term) => { // App 컴포넌트쪽에 서서 term데이터를 넘겨 받아오는 역할을 함.
    //     unsplash.search.photos(term)
    //         .then(toJson)
    //         .then(json => {
    //             this.setState({ imageArray: json.results});

    //     });
    // }
    onSearchSubmit = (term) => { //자식에게 빌려준 도르래
        //올려보내진 과실을 가지고 이제 unsplash에게 전화해서 요청한다
        unsplash.get('/search/photos', {
            params: { query: term }
        }).then((response) => {
            this.setState({ imageArray: response.data.results })
        })
    }
    

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList imageArray={this.state.imageArray} />
            </div>
        );
    }
}

export default App;