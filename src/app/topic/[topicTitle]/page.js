"use client";
import { useState } from "react";
import Link from "next/link";

export default function TopicPage() {
  // Simulated data for topics and headings
  const topics = [
    "Introduction to Calculus",
    "Limits and Continuity",
    "Derivatives",
    "Integration",
    "Applications of Calculus",
  ];

  const headings = [
    "What is Calculus?",
    "The Importance of Limits",
    "Techniques for Differentiation",
    "Integral Calculus Explained",
    "Real-World Applications",
  ];

  const [selectedTopic, setSelectedTopic] = useState(0);

  return (
    <div className="container mx-auto px-4 md:flex py-12 space-y-6 md:space-y-0 md:space-x-6">

      {/* Center Content - Essay */}
      <main className="w-full md:w-4/5 bg-white p-6 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold mb-4">{topics[selectedTopic]}</h1>
        <div className="text-gray-700 space-y-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            fermentum magna ut purus fermentum, vel sagittis ipsum vehicula. In
            scelerisque convallis massa at auctor. Sed feugiat nisi eget dui
            pretium ultricies.
          </p>
          <p>
            Nullam dapibus, nunc eget scelerisque laoreet, odio leo facilisis
            quam, eget vestibulum odio turpis ut velit. Integer feugiat, libero
            sit amet tristique congue, orci arcu consequat ex, sit amet euismod
            turpis erat a felis.
          </p>
          <p>
            Etiam sit amet bibendum nisi. Duis ullamcorper eros eget leo
            ultricies gravida. Fusce sit amet ex orci. Nullam tempus tortor sit
            amet nibh dapibus, a tincidunt purus consequat.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() =>
              setSelectedTopic(selectedTopic > 0 ? selectedTopic - 1 : topics.length - 1)
            }
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Previous Topic: Pre topic
          </button>
          <button
            onClick={() =>
              setSelectedTopic(selectedTopic < topics.length - 1 ? selectedTopic + 1 : 0)
            }
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Next Topic: Pre Title
          </button>
        </div>
      </main>

      {/* Right Sidebar - Headings */}
      <aside className="w-full md:w-1/5 bg-white border-l border-gray-200 p-4 rounded-md shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Headings</h2>
        <ul className="space-y-2">
          {headings.map((heading, index) => (
            <li key={index} className="text-gray-600 hover:text-blue-600">
              {heading}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
