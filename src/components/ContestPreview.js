import React from 'react';
import '../styles.css';
import PropTypes from 'prop-types';

class ContestPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    // this.props.onClick(e.target.id);
    console.log('id: ', e.target);
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
  id: PropTypes.number.isRequired,
  categoryName: PropTypes.string.isRequired,
  contestName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContestPreview;
