import React from 'react';
import Header from './header';
import ContestPreview from './ContestPreview';

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

  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map((contest) => (
            <ContestPreview key={contest.id} {...contest} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
