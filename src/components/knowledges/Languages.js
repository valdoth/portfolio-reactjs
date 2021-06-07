import React, { Component } from 'react'
import ProgressBar from './ProgressBar';

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 1.2 },
      { id: 2, value: "C", xp: 1.8 },
      { id: 3, value: "C++", xp: 1.6 },
      { id: 4, value: "Python", xp: 0.2 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.5 },
      { id: 2, value: "Bootstrap", xp: 0.2 },
      { id: 3, value: "Sass", xp: 0.1 },
      { id: 4, value: "SDL/SDL2", xp: 0.5},
    ],
  };

  render() {

    let {languages, frameworks} = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar 
          languages={languages}
          className="languageDisplay"
          title="languages"
        />
        <ProgressBar 
          languages={frameworks}
          className="frameworkDisplay"
          title="frameworks & bibliothèques"
        />
      </div>
    );
  }
}

export default Languages;