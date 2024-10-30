"use client";
import { useState } from "react";
import { Container } from "@/components";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function TopicPage() {
  const topics = [
    "Introduction to Calculus",
    "Limits and Continuity",
    "Derivatives",
    "Integration",
    "Applications of Calculus",
  ];

  const [selectedTopic, setSelectedTopic] = useState(0);

  return (
    <Container>
      <div className="md:flex py-12 space-y-6 md:space-y-0 md:space-x-6">

        {/* Sidebar for Topic Navigation */}
        <aside className="w-full md:w-1/4 bg-gradient-to-r from-blue-50 to-blue-100 border-r border-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Topics</h2>
          <ul className="space-y-2">
            {topics.map((topic, index) => (
              <li
                key={index}
                onClick={() => setSelectedTopic(index)}
                className={`cursor-pointer p-3 rounded-lg transition-colors duration-200 flex items-center space-x-3 
                  ${selectedTopic === index
                    ? "bg-blue-600 text-white font-semibold shadow-lg transform scale-105"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                  }
                `}
              >
                <span className="font-mono text-blue-300">{index + 1}</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content for Selected Topic */}
        <main className="w-full md:w-3/4 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTopic}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-4xl font-bold mb-6 text-gray-900">{topics[selectedTopic]}</h1>
              <div className="text-gray-800 space-y-4 leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum magna ut purus fermentum, vel sagittis ipsum vehicula. In scelerisque convallis massa at auctor. Sed feugiat nisi eget dui pretium ultricies.
                </p>
                <p>
                  Aliquam erat volutpat. Nullam nec orci a est fringilla bibendum. Morbi ut hendrerit orci, id mollis quam. Praesent ut libero eget justo blandit tincidunt non vel sapien.
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons with Next and Previous Topic Titles */}
          <div className="flex justify-between mt-8 items-center flex-col md:flex-row">
            <button
              onClick={() => setSelectedTopic(selectedTopic > 0 ? selectedTopic - 1 : topics.length - 1)}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 space-x-2 transform hover:scale-105"
            >
              <HiChevronLeft className="text-2xl" />
              <div className="text-left">
                <span className="text-xs text-blue-200">Previous</span>
                <div className="font-semibold text-lg">
                  {selectedTopic > 0 ? topics[selectedTopic - 1] : topics[topics.length - 1]}
                </div>
              </div>
            </button>

            <button
              onClick={() => setSelectedTopic(selectedTopic < topics.length - 1 ? selectedTopic + 1 : 0)}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 space-x-2 transform hover:scale-105"
            >
              <div className="text-right">
                <span className="text-xs text-blue-200">Next</span>
                <div className="font-semibold text-lg">
                  {selectedTopic < topics.length - 1 ? topics[selectedTopic + 1] : topics[0]}
                </div>
              </div>
              <HiChevronRight className="text-2xl" />
            </button>
          </div>

        </main>
      </div>
    </Container>
  );
}
