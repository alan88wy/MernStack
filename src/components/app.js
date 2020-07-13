import React from 'react';
import Header from './header';
import ContestPreview from './ContestPreview';
import ContestList from './ContestList';

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
        <ContestList contests={this.state.contests} />
      </div>
    );
  }
}

export default App;
