import React from 'react';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiFillFileUnknown } from "react-icons/ai"

const IconComponent = ({ name }: {name: string}) => {
  switch (name) {
    case 'LinkedIn':
      return <BsLinkedin/>
      break;
    case 'Github':
      return <BsGithub/>
      break;
    default:
      return <AiFillFileUnknown/>
      break;
  }
}

export default IconComponent;