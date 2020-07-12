import React from 'react';
import Header from './header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header message="Naming Contests" />
        <div>
          {this.props.contests.map((contest) => (
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
