import React from 'react';

interface JobProps {
  companyName: string,
  jobTitle: string,
  technologies: string[]
}

const JobComponent = ({ companyName, jobTitle, technologies }: JobProps) => {
  return (
    <div>
      <h1>{companyName}</h1>
      <h3>{jobTitle}</h3>
      <ul>
        {technologies.map(item => (<li>{item}</li>))}
      </ul>
    </div>
  )
}

export default JobComponent;