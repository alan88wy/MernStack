import React from 'react';
import Header from './header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

const pushState = (obj, url) => {
  window.history.pushState(obj, '', url);
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeader: 'Naming Contests',
      contests: this.props.initialContests,
      currentContestID: null,
    };

    this.fetchContest = this.fetchContest.bind(this);
    this.currentContest = this.currentContest.bind(this);
  }

  componentDidMount() {
    // timers, listeners
  }

  componentWillUnmount() {
    // clean timers, listeners
  }

  fetchContest(contestId) {
    pushState({ currentContestID: contestId }, `/contest/${contestId}`);
    api.fetchContest(contestId).then((contest) => {
      this.setState({
        pageHeader: contest.contestName,
        currentContestID: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest,
        },
      });
    });
  }

  currentContest() {
    if (this.state.currentContestID) {
      return <Contest {...this.state.contests[this.state.currentContestID]} />;
    } else {
      return <ContestList onContestClick={this.fetchContest} contests={this.state.contests} />;
    }
  }

  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
        {this.currentContest()}
      </div>
    );
  }
}

export default App;
