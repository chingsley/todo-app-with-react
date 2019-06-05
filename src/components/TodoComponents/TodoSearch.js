import React from 'react';

class TodoSearch extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  handleSearchItems = (e) => {
    this.props.searchItems(e.target.value);
  }
  render() {
    return(
      <input
        type="text"
        onChange={e => this.handleSearchItems(e)}
      />
    );
  }
}

export default TodoSearch;
