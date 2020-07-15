import React from 'react';
import Header from './header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';
import PropTypes from 'prop-types';

const pushState = (obj, url) => {
  window.history.pushState(obj, '', url);
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.initialData;

    this.fetchContest = this.fetchContest.bind(this);
    this.currentContent = this.currentContent.bind(this);
    this.currentContest = this.currentContest.bind(this);
    this.pageHeader = this.pageHeader.bind(this);
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
        currentContestID: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest,
        },
      });
    });
  }

  currentContest() {
    return this.state.contests[this.state.currentContestID];
  }

  currentContent() {
    if (this.state.currentContestID) {
      return <Contest {...this.currentContest()} />;
    } else {
      return <ContestList onContestClick={this.fetchContest} contests={this.state.contests} />;
    }
  }

  pageHeader() {
    if (this.state.currentContestID) {
      return this.currentContest().contestName;
    }

    return 'Naming Contests';
  }

  render() {
    return (
      <div>
        <Header message={this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }
}

App.propTypes = {
  initialData: PropTypes.object.isRequired,
};

export default App;
