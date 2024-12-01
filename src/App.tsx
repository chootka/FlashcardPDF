import * as React from 'react';
import { useState, lazy, Suspense } from 'react';
import './index.css';

// Import all flashcard components
// EN
const En291124 = lazy(() => import('./components/FlashcardsPDF/en/29-11-24'));
const En241124 = lazy(() => import('./components/FlashcardsPDF/en/24-11-24'));
const En151124 = lazy(() => import('./components/FlashcardsPDF/en/15-11-24'));
const En081124 = lazy(() => import('./components/FlashcardsPDF/en/08-11-24'));
// DE
const De281124 = lazy(() => import('./components/FlashcardsPDF/de/28-11-24'));
const De221124 = lazy(() => import('./components/FlashcardsPDF/de/22-11-24'));
const De081124 = lazy(() => import('./components/FlashcardsPDF/de/08-11-24'));
const De181024 = lazy(() => import('./components/FlashcardsPDF/de/18-10-24'));
const De111024 = lazy(() => import('./components/FlashcardsPDF/de/11-10-24'));

function App() {
  const [selectedSet, setSelectedSet] = useState('08-11-24');

  const getComponent = () => {
    switch (selectedSet) {
      // EN
      case 'EN-29-11-24': return <En291124 />;
      case 'EN-24-11-24': return <En241124 />;
      case 'EN-15-11-24': return <En151124 />;
      case 'EN-08-11-24': return <En081124 />;
      // DE
      case 'DE-28-11-24': return <De281124 />;
      case 'DE-22-11-24': return <De221124 />;
      case 'DE-08-11-24': return <De081124 />;
      case 'DE-18-10-24': return <De181024 />;
      case 'DE-11-10-24': return <De111024 />;
      default: return <En081124 />;
    }
  };

  return (
    <div className="App p-4">
      <div className="print:hidden mb-4 flex items-center justify-between">
        <div>
          <label className="mr-2">Select Flashcard Set:</label>
          <select 
            value={selectedSet} 
            onChange={(e) => setSelectedSet(e.target.value)}
            className="border p-1 rounded"
          >
            <option value="EN-08-11-24">Set EN 08-11-24</option>
            <option value="EN-15-11-24">Set EN 15-11-24</option>
            <option value="EN-24-11-24">Set EN 24-11-24</option>
            <option value="EN-29-11-24">Set EN 29-11-24</option>
            <option value="DE-11-10-24">Set DE 11-10-24</option>
            <option value="DE-18-10-24">Set DE 18-10-24</option>
            <option value="DE-08-11-24">Set DE 08-11-24</option>
            <option value="DE-22-11-24">Set DE 22-11-24</option>
            <option value="DE-28-11-24">Set DE 28-11-24</option>
          </select>
        </div>
      </div>
      
      <Suspense fallback={<div>Loading...</div>}>
        {getComponent()}
      </Suspense>
    </div>
  );
}

export default App; 