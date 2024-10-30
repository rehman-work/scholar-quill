'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Routes } from '@/app/routes';
import { Container } from '@/components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaEye } from 'react-icons/fa';

const SemesterPage = () => {
  const { degreeCode, semester } = useParams();
  const [degreeData, setDegreeData] = useState(null);
  const [currentSemester, setCurrentSemester] = useState(null);

  useEffect(() => {
    // Fetch data from public folder
    const fetchData = async () => {
      try {
        const res = await fetch('/data/degrees.json');
        const data = await res.json();

        // Find the specific degree
        const degree = data.find(d => d.degreeCode === degreeCode);
        if (degree) {
          setDegreeData(degree);

          // Find the specific semester within the degree
          const semesterData = degree.semesters.find(s => s.semester_no === semester);
          setCurrentSemester(semesterData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [degreeCode, semester]);

  if (!degreeData || !currentSemester) {
    return <p className="text-center text-gray-600 mt-10">Loading...</p>;
  }

  return (
    <Container>
      <div className="py-8 px-8 mb-12">
        <motion.h2
          className="text-3xl font-semibold px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Subjects for Semester {currentSemester.semester_no}
        </motion.h2>
        <p className="text-gray-600 pt-2 px-4">{currentSemester.semester_desc}</p>
        <hr className="mt-3 mx-4" />

        {/* Subjects List */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
          {currentSemester.subjects.map((subject) => (
            <motion.div
              key={subject.subjectCode}
              className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-md transition-all hover:shadow-lg cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center justify-between">
                <Link href={Routes.completeNotes(subject.subjectCode)} className="flex items-center space-x-2">
                  <Image src='/assets/images/notes_icon.png' alt={`${subject.title} Logo`} height={28} width={28} className="w-10 h-auto rounded-md" />
                  <div>
                    <h3 className="font-semibold text-lg text-white">{subject.title}</h3>
                    <p className="font-normal text-gray-200">{subject.subjectCode}</p>
                  </div>
                </Link>
                <Link
                  href={Routes.specificSubject(degreeCode, semester, subject.subjectCode)}
                  className="bg-orange-50 text-orange-800 px-5 py-1.5 rounded flex items-center"
                >
                  <FaEye className="mr-2" /> View Notes
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