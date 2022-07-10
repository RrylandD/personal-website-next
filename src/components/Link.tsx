import React from 'react';
import IconComponent from './IconComponent';

interface LinkProps {
  /**
   * hover text for the link
   */
  name: string;
  /**
   * Address for link
   */
  url: string;
}

export const Link = ({
  name,
  url,
  ...props
}: LinkProps) => {
  return (<a href={url} target="_blank"><IconComponent name={name}/></a>);
};