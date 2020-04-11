import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (e) => { // SearchBar 컴포넌트쪽에 서서 term데이터를 넘겨주는 역할을 함.
        e.preventDefault();
        this.props.onSubmit(this.state.term); // 마치 부모가 준 도르래를 이용해서 과일을 올려 보내듯
    };  // Passing up to the Parent, using the function transported from Parent

    onInputChange = (e) => {
        this.setState({ term: e.target.value });
    }; // 엄격히 말하면, 이 기능은 controlled input을 세팅하기 위한 장치역할을 하므로, 
      // 부모 컴포넌트인 App에 셋팅할 필요는 없음.
      // 순전히 input박스에 유저가 치는 것을 표현하는 것에만 그치니까. 

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui field">
                        <label>Image Search</label>
                        <input value={this.state.term} type="text" onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;