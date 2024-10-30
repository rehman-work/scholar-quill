import React from 'react';

const Breadcrumb = () => {
  return (
    <nav className="text-sm font-medium text-gray-600 py-4 border-b border-gray-200">
      <ol className="list-none p-0 inline-flex px-8">
        <li className="flex items-center">
          <a href="#" className="hover:text-blue-500">Helpcenter</a>
          <svg
            className="w-4 h-4 mx-2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </li>
        <li className="flex items-center">
          <a href="#" className="hover:text-blue-500">For Marketeers</a>
          <svg
            className="w-4 h-4 mx-2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </li>
        <li className="flex items-center">
          <a href="#" className="hover:text-blue-500">Getting Started</a>
          <svg
            className="w-4 h-4 mx-2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </li>
        <li className="flex items-center">
          <span className="text-gray-500">Platform overview / What is Playrcart?</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;