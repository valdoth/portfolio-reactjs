import React from 'react';
import Experience from '../knowledges/Experience';
import Hobbies from '../knowledges/Hobbies';
import Languages from '../knowledges/Languages';
import OtherSkills from '../knowledges/OtherSkills';
import Navigation from '../Navigation';

const Knowledge = () => {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <Languages />
        <Experience />
        <OtherSkills />
        <Hobbies />
      </div>
    </div>
  );
};

export default Knowledge;