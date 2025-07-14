'use client';
import React from 'react';
import { useStore } from '../..//tools/store.ts';
const page = () => {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);

  return (
    <div className="ms-50 mt-50">
      <h1 className="text-2xl">Bears:{bears}</h1>
      <button
        className="bg-blue-200 p-3 mt-2 rounded-2xl"
        onClick={increasePopulation}
      >
        Add new bear
      </button>
    </div>
  );
};

export default page;
