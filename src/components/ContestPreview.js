import React from 'react';
import '../styles.css';
import PropTypes from 'prop-types';

class ContestPreview extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(e.target.id);
  }

  render() {
    return (
      <div className="contestPreview link" id={this.props.id} onClick={this.handleClick}>
        <div className="categoryName" id={this.props.id}>
          {this.props.categoryName}
        </div>
        <div className="contestName" id={this.props.id}>
          {this.props.contestName}
        </div>
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
