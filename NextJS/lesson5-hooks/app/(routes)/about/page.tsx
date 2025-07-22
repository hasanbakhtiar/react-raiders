import React from 'react'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'This is about page',
};
const About = () => {
  return (
    <div className='py-300 h1'>About</div>
  )
}

export default About
