import React from 'react'
import SkillBar from 'react-skillbars';

function Skills() {
    const skills = [
        {type: "REACT", level: 75},
        {type: "HTML", level: 70},
        {type: "CSS", level: 70},
        {type: "JavaScript", level: 65},
        {type: "MySQL", level: 50},
        {type: "Docker", level: 45},
      ];
      const colors = {
        "bar": "#0F4C75",
        "title": {
          "text": "fff",
          "background": "#5F7094"
        }
      }
    return (
        <div className="skillbar">
            <SkillBar skills={skills} colors={colors} height={'2vh'}/>
        </div>
    )
}

export default Skills;
