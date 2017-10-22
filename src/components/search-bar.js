import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputSearchChange = this.onInputSearchChange.bind(this);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputSearchChange(event.target.value)} />
      </div>
    );
  }

  onInputSearchChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
};

export default SearchBar;