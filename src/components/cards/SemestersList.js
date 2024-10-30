"use client";

import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";
import { FaBookOpen } from 'react-icons/fa';
import { Routes } from "@/app/routes";

const SemestersList = ({ degreeCode, semesters }) => {
  return (
    <div className="space-y-4">
      {semesters.map((semester) => (
        <motion.div
          key={semester.semester_no}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-lg shadow-md transition-all hover:bg-blue-700 text-white"
        >
          <Link
            href={Routes.specificSemester(degreeCode, semester.semester_no)}
            className="flex items-center justify-between mb-4 cursor-pointer"
          >
            <div>
              <h3 className="font-semibold text-xl flex items-center gap-2">
                <FaBookOpen /> Semester {semester.semester_no}
              </h3>
              <p className="font-normal text-gray-200 text-sm">{semester.semester_desc}</p>
            </div>
            <span className="bg-orange-200 text-orange-800 px-4 py-1.5 rounded-full font-medium text-sm shadow hover:bg-orange-300">
              View Notes
            </span>
          </Link>
          <div className="flex flex-wrap gap-3 mt-2">
            {semester.subjects.map((subject, index) => (
              <Link
                href={Routes.specificSubject(degreeCode, semester.semester_no, subject.subjectCode)}
                key={index}
                className="bg-blue-200 text-blue-900 text-xs px-3 py-1 rounded-full font-medium transition-all hover:bg-blue-300"
              >
                {subject.title}
              </Link>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SemestersList;
