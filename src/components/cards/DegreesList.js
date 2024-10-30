"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Routes } from "@/app/routes";
import { SemestersList } from '@/components';

const DegreesList = () => {
  const [degreesList, setDegreesList] = useState([]);
  const [selectedDegree, setSelectedDegree] = useState(null);

  useEffect(() => {
    const fetchDegrees = async () => {
      const response = await fetch('/data/degrees.json');
      if (!response.ok) {
        console.error('Failed to fetch degrees data');
        return;
      }
      const data = await response.json();
      setDegreesList(data);
    };

    fetchDegrees();
  }, []);

  const handleDegreeClick = (degree) => {
    setSelectedDegree(selectedDegree === degree ? null : degree);
  };

  return (
    <div className="py-6">
      <motion.h2 
        className="text-3xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Degrees available for notes.
      </motion.h2>
      <p className="text-gray-600 pt-2">A list of degrees and their subjects</p>
      <hr className="mt-3" />

      <div className="mt-8 space-y-5">
        {degreesList.map((degree) => (
          <motion.div 
            key={degree.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer p-4 rounded-md transition-all flex items-center justify-between text-white">
              <Link href={Routes.specificDegree(degree.degreeCode)} className="flex items-center space-x-4">
                <img src={degree.logo} alt="Degree Logo" className="w-12 h-12 rounded-md" />
                <div>
                  <h3 className="font-semibold text-lg">{degree.title}</h3>
                  <p className="text-sm">{degree.description}</p>
                </div>
              </Link>
              <button
                className="flex items-center bg-orange-50 text-orange-800 px-5 py-1.5 rounded transition hover:bg-orange-200"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDegreeClick(degree.degreeCode);
                }}
              >
                {selectedDegree === degree.degreeCode ? "Hide Semesters" : "View Semesters"}
                {selectedDegree === degree.degreeCode ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
              </button>
            </div>

            {selectedDegree === degree.degreeCode && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden mt-4"
              >
                <SemestersList degreeCode={degree.degreeCode} semesters={degree.semesters} />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DegreesList;
