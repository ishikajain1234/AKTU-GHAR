import React from "react";

function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 py-16 px-4 text-center flex items-center justify-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-4">
          Find the Best Courses for You
        </h1>
        <p className="text-gray-200 dark:text-gray-400 mb-8">
          Learn and boost your skills with our courses
        </p>
        <form className="flex flex-col items-center gap-4 max-w-xl mx-auto">
          {/* Search Input and Button */}
          <div className="w-full flex items-center rounded-full bg-white dark:bg-gray-800 shadow-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search for courses..."
              className="flex-grow px-6 py-3 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
            />
            <button
              type="submit"
              className="bg-blue-600 dark:bg-gray-700 text-white px-6 py-3 hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
            >
              Search
            </button>
          </div>

          {/* Explore Button */}
          <button
            type="button"
            className=" bg-white dark:bg-gray-800 text-blue-600 px-6 py-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 shadow-lg"
          >
            Explore Courses
          </button>
        </form>
      </div>
    </div>
  );
}

export default HeroSection;
