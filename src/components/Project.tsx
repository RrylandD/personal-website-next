import React from 'react';

interface ProjectProps {
  projectName: string,
  thumbnail: string,
  technologies: string[]
}

const ProjectComponent = ({ projectName, thumbnail, technologies }: ProjectProps) => {
  return (
    <div>
      <h1>{projectName}</h1>
      <img src={thumbnail}></img>
      <ul>
        {technologies.map(item => (<li>{item}</li>))}
      </ul>
    </div>
  )
}

export default ProjectComponent;