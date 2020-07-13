import React from 'react';
import '../styles.css';
import PropTypes from 'prop-types';

class ContestPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    console.log(e.target.innerText);
  }

  render() {
    return (
      <div className="contestPreview link" onClick={this.handleClick}>
        <div className="categoryName">{this.props.categoryName}</div>
        <div className="contestName">{this.props.contestName}</div>
      </div>
    );
  }
}

ContestPreview.propTypes = {
  categoryName: PropTypes.string.isRequired,
  contestName: PropTypes.string.isRequired,
};

export default ContestPreview;
