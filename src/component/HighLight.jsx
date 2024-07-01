import React from 'react';

function Highlight({ number, title, text }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-purple-700 rounded-full p-4 text-white font-bold">{number}</div>
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="mt-2 text-gray-400">{text}</p>
    </div>
  );
}

export default Highlight;