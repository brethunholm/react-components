import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <h3>Image Search</h3>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
