'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useStore } from '../../tools/store.ts';
const CreateBlog = () => {
  const [text, setText] = useState<string>('');

  
  const textPopulation = useStore((state) => state.textPopulation)

  return (
    <>
      <form className="ms-3 mt-3">
        <Link href="/blog">Show blogs</Link>
        <h1>Create Blog </h1>
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          id="price"
          type="text"
          placeholder="Add new text"
          className=" border-1 min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
        />
        <button
          onClick={()=>{textPopulation(text)}}
          className="bg-gray-500 p-2 rounded-lg text-white mt-2 ms-2"
          type="button"
        >
          add
        </button>
      </form>
    </>
  );
};

export default CreateBlog;
