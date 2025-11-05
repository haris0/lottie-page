import { Suspense } from 'react';
import ResultsContent from './ResultsContent';

const Results = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsContent />
    </Suspense>
  );
};

export default Results;
