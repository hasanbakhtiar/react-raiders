'use client';
import React from 'react'
import {useStore} from '../../tools/store.ts'; 


const Blog = () => {
    const text = useStore((state) => state.text)
  console.log(text);
  
  return (
    <div>Blog : {text}</div>
  )
}

export default Blog
