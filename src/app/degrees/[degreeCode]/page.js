"use client";

import { SemestersList, Container } from '@/components';
import * as React from 'react';

const SemestersPage = ({ params }) => {
  const { degreeCode } = React.use(params); // Use React.use() to unwrap params asynchronously
  const [degreeData, setDegreeData] = React.useState(null);

  React.useEffect(() => {
    const fetchDegreeData = async () => {
      try {
        const response = await fetch('/data/degrees.json');
        if (!response.ok) {
          console.error('Failed to fetch degrees data');
          return;
        }
        const data = await response.json();
        const filteredDegree = data.find((degree) => degree.degreeCode.toLowerCase() === degreeCode.toLowerCase());
        setDegreeData(filteredDegree);
      } catch (error) {
        console.error('Error fetching degrees data:', error);
      }
    };

    if (degreeCode) {
      fetchDegreeData();
    }
  }, [degreeCode]); // Keep the dependency array stable

  if (!degreeData) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <div className="py-8 mb-12">
        <h2 className="text-3xl font-semibold px-4">{degreeData.title}</h2>
        <p className="text-gray-600 pt-2 px-4">{degreeData.description}</p>
        <hr className="mt-3 mx-4" />

        {/* Semesters List */}
        <SemestersList degreeCode={degreeData.degreeCode} semesters={degreeData.semesters} />
      </div>
    </Container>
  );
};

export default SemestersPage;