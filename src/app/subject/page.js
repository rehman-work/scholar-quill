"use client";
import Link from 'next/link';
import React from 'react';
import { Container } from '@/components';
import { motion } from 'framer-motion';

const SemesterPage = () => {
  const semestersList = [
    {
      title: "Semester 1",
      description: "Introduction to fundamental subjects",
      subjects: [
        { name: "Mathematics", description: "Basic mathematics concepts" },
        { name: "Programming 101", description: "Introduction to programming" },
        { name: "Algorithms", description: "Fundamentals of algorithms" }
      ]
    },
    {
      title: "Semester 2",
      description: "Intermediate level subjects",
      subjects: [
        { name: "Data Structures", description: "Concepts of data organization" },
        { name: "Object-Oriented Programming", description: "OOP principles and techniques" },
        { name: "Databases", description: "Introduction to database systems" }
      ]
    },
    // Add more semesters as needed
  ];

  const currentSemester = semestersList[1]; // Change index to dynamically select semester

  if (!currentSemester) {
    return <p className="text-center text-gray-600 mt-10">Loading...</p>;
  }

  return (
    <Container>
      <div className="py-8 mb-12">
        <h2 className="text-3xl font-semibold">{currentSemester.title}</h2>
        <p className="text-gray-600 pt-2">{currentSemester.description}</p>
        <hr className="mt-3" />

        {/* Subjects List */}
        <div className="mt-8 space-y-4">
          {currentSemester.subjects.map((subject, index) => (
            <motion.div
              key={subject.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-md transition-all hover:shadow-lg cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://ph-files.imgix.net/d637a716-2ca1-4771-83b0-06a064f28b06.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=1"
                    alt="Product Logo"
                    className="w-12 h-12 rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-white">{subject.name}</h3>
                    <p className="font-normal text-gray-200">{subject.description}</p>
                  </div>
                </div>
                <Link href={`/notes/${subject.name}`} className="bg-orange-50 text-orange-800 px-5 py-1.5 rounded hover:bg-orange-100">
                  View Notes
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SemesterPage;
