import React from 'react';
import ExportButton from '../../ExportButton';

const flashcardData = [
  { english: 'last', german: 'letzte / dauern' },
  { english: 'school', german: 'die Schule (eine Schule)' },
  { english: 'father', german: 'der Vater (ein Vater)' },
  { english: 'keep', german: 'behalten / aufbewahren' },
  { english: 'tree', german: 'der Baum (ein Baum)' },
  { english: 'never', german: 'nie / niemals' },
  { english: 'start', german: 'der Start (ein Start) / anfangen' },
  { english: 'city', german: 'die Stadt (eine Stadt)' },
  { english: 'earth', german: 'die Erde (eine Erde)' },
  { english: 'eyes', german: 'die Augen (plural of: das Auge)' }
];

const FlashcardsPDF = () => {
  return (
    <div className="mx-auto">
      {/* Print instructions */}
      <div className="print:hidden mb-8 p-8">
        <h1 className="text-2xl font-bold mb-4">Double-Sided Flashcards - English to German</h1>
        <div className="flex justify-end mb-4">
          <ExportButton filename="EN-15-11-24" />
        </div>
        <ul className="list-disc ml-6 space-y-2">
          <li>Use A4 paper</li>
          <li>Print settings:
            <ul className="ml-6 mt-2">
              <li>Scale: 100%</li>
              <li>Double-sided printing: Flip on long edge</li>
              <li>Margins: None or Minimum</li>
              <li>Print background graphics: Yes</li>
            </ul>
          </li>
          <li>Page 1 contains English words (front)</li>
          <li>Page 2 contains German translations with articles (back)</li>
          <li>Cut along the dashed lines after printing</li>
        </ul>
      </div>

      <div id="flashcard-container">
        {/* Page 1 - English side */}
        <div className="flashcard-page">
          <h2 className="text-center font-bold mb-4 print:hidden">Page 1 - English (Front)</h2>
          <div className="flashcard-grid">
            {flashcardData.map((card, index) => (
              <div key={`front-${index}`} className="flashcard-cell">
                <div className="flashcard-inner">
                  <span className="flashcard-content whitespace-pre-line">{card.english}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Page 2 - German side */}
        <div className="flashcard-page">
          <h2 className="text-center font-bold mb-4 print:hidden">Page 2 - German (Back)</h2>
          <div className="flashcard-grid flashcard-back-grid">
            {[...flashcardData].reverse().map((card, index) => (
              <div key={`back-${index}`} className="flashcard-cell">
                <div className="flashcard-inner flashcard-back-content">
                  <span className="flashcard-content whitespace-pre-line">{card.german}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Print stylesheet */}
      <style data-print-styles>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
          }
          .print\\:hidden {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default FlashcardsPDF;
