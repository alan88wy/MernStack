import React from 'react';
import Header from './header';
import ContestPreview from './ContestPreview';
import ContestList from './ContestList';

const pustState = (obj, url) => {
  window.history.pushState(obj, url);
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeader: 'Naming Contests',
      contests: this.props.initialContests,
    };
  }

  componentDidMount() {
    // timers, listeners
  }

  componentWillUnmount() {
    // clean timers, listeners
  }

  fetchContest(contestID) {
    pushState({ currentContestID: contestId }, '/contest/${contestId');
  }

  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
        <ContestList onContestClick={this.fetchContest} contests={this.state.contests} />
      </div>
    );
  }
}

export default App;
