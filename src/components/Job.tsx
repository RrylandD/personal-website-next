import React from 'react';
import styles from '../styles/Job.module.scss'

interface JobProps {
  companyName: string,
  jobTitle: string,
  technologies: string[]
}

const JobComponent = ({ companyName, jobTitle, technologies }: JobProps) => {
  return (
    <div className={styles['job-container']}>
      <div className={styles['title-line']}>
        <h1>{companyName}</h1>
        <p>•</p>
        <h4>{jobTitle}</h4>
      </div>
      <ul>
        {technologies.map(item => (<li>{item}</li>))}
      </ul>
    </div>
  )
}

export default JobComponent;