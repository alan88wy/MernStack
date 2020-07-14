import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick }) => (
  <div className="ContestList">
    {Object.keys(contests).map((contestId) => (
      <ContestPreview key={contestId} onClick={onContestClick} {...contests[contestId]} />
    ))}
  </div>
);

// class ContestList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(contestId) {
//     this.props.onContestClick(contestId);
//   }

//   render() {
//     return (
//       <div className="ContestList">
//         {this.props.contests.map((contest) => (
//           <ContestPreview key={contest.id} onClick={this.handleClick} {...contest} />
//         ))}
//       </div>
//     );
//   }
// }

ContestList.propTypes = {
  contests: PropTypes.object,
  onContestClick: PropTypes.func.isRequired,
};

export default ContestList;
