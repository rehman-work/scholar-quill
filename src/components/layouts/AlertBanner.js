import React from 'react'

const AlertBanner = () => {
  return (
    <a
      href="https://whastapplink/"
      target="_blank"
      className="cursor-pointer bg-gradient-to-r from-green-500 to-green-700 py-3 text-center font-semibold text-white text-sm flex items-center justify-center space-x-3 shadow-lg"
    >
      Join WhatsApp group to get Latest Notes and Papers.
      <span className="ml-3 py-1 px-4 bg-white text-green-700 font-bold rounded-lg shadow-inner transition-colors duration-200 hover:bg-green-100">
        Join Group
      </span>
    </a>
  )
}

export default AlertBanner