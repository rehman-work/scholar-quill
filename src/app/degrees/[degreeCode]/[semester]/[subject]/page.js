'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Routes } from '@/app/routes';
import { Container } from '@/components';
import { motion } from 'framer-motion';
import { FaBookOpen, FaClipboardList } from 'react-icons/fa';

const SubjectPage = () => {
  const { degreeCode, semester, subject } = useParams();
  const [subjectData, setSubjectData] = useState({});

  useEffect(() => {
    // Fetch data from public folder
    const fetchData = async () => {
      try {
        const res = await fetch(`/data/subjects/${subject.toLowerCase()}.json`);
        const data = await res.json();
        setSubjectData(data.subject);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [degreeCode, semester, subject]);

  if (!subjectData.topics) {
    return <p className="text-center text-gray-600 mt-10">Loading...</p>;
  }

  return (
    <Container>
      <div className="py-8 mb-12">
        <motion.h2 
          className="text-3xl font-semibold px-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Topics for {subjectData.title}
        </motion.h2>
        <p className="text-gray-600 pt-2 px-2">{subjectData.description}</p>
        <hr className="mt-3 mx-2" />

        {/* Topics List */}
        <div className="mt-8 space-y-4">
          {subjectData.topics.map((topic) => (
            <motion.div
              key={topic.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-purple-400 to-blue-500 p-4 rounded-md transition-all hover:shadow-lg cursor-pointer"
            >
              <Link
                href={Routes.specificTopic(topic.slug)}
                className="flex justify-between items-center"
              >
                <div className="flex items-center">
                  <FaClipboardList className="mr-2 text-white" /> {/* Icon before the topic title */}
                  <h3 className="font-semibold text-lg text-white">{topic.title}</h3>
                </div>
                <span className="flex items-center bg-orange-50 text-orange-800 px-4 py-1.5 rounded ml-4">
                  <FaBookOpen className="mr-2" /> View Notes
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SubjectPage;
