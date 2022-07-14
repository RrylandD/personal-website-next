import React from 'react';
import styles from '../styles/Project.module.scss'

interface ProjectProps {
  projectName: string,
  thumbnail: string,
  technologies: string[]
}

const ProjectComponent = ({ projectName, thumbnail, technologies }: ProjectProps) => {
  return (
    <div className={styles['project-container']}>
      <h1>{projectName}</h1>
      <img className={styles['project-image']} src={thumbnail}></img>
      <ul>
        {technologies.map(item => (<li>{item}</li>))}
      </ul>
    </div>
  )
}

export default ProjectComponent;