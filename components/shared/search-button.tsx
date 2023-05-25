import React from 'react'

const SearchButton = () => {
  return (
    <button
          type="submit"
          className="flex items-center px-4 py-2 text-sm text-white transition duration-300 border-none lg:px-4 md:px-2 active:scale-110 rounded-xl hover:bg-primary gap-x-2 bg-primary bg-orange_to_red "
        >
          <h4>Search</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
  )
}

export default SearchButton