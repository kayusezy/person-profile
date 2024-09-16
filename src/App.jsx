import  { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'Software Developer from Silicon Valley.',
        imgSrc: 'https://images.unsplash.com/photo-1562159278-1253a58da141?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbiUyMHBhc3NzcG9ydHxlbnwwfHwwfHx8MA%3D%3D',
        profession: 'Software Engineer'
      },
      show: false,
      timeElapsed: 0
    };
    
    // Bind the toggle function
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    // Set up an interval to update timeElapsed every second
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeElapsed: prevState.timeElapsed + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clean up the interval when the component unmounts
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    const { person, show, timeElapsed } = this.state;
    return (
      <div className="App">
        <h1>Profile Card</h1>
        <button onClick={this.toggleShow}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {show && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p><strong>Bio:</strong> {person.bio}</p>
            <p><strong>Profession:</strong> {person.profession}</p>
          </div>
        )}
        <div className="time">
          <p>Time since component mounted: {timeElapsed} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;
