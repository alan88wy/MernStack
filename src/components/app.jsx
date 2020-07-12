import React from 'react';
import Header from './header';
import ContestPreview from './ContestPreview';
import data from '../testData.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeader: 'Naming Contests',
      contests: [],
    };
  }

  componentDidMount() {
    // timers, listeners
    this.setState({
      contests: data.contests,
    });
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
            <>
              <ContestPreview key={contest.id} {...contest} />
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
