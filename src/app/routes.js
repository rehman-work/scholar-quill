export const Routes = {
  home: "/",
  degrees: "/degrees",
  specificDegree: (degreeCode) => `/degrees/${degreeCode}`,
  specificSemester: (degreeCode, semesterNo) => `/degrees/${degreeCode}/${semesterNo}`,
  specificSubject: (degreeCode, semesterNo, subjectCode) => `/degrees/${degreeCode}/${semesterNo}/${subjectCode}`,
  subjects: "/subject",
  completeNotes: (specificSubject) => `/subject/${specificSubject}`,
  specificTopic: (topicSlug) => `/topic/${topicSlug}`
};
