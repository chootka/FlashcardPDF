import React from 'react';
import ExportButton from '../../ExportButton';

const flashcardData = [
  { german: 'die Bahn (eine Bahn)', english: 'train, railway, path, track\n\nExample: die Deutsche Bahn\n(German Railways)' },
  { german: 'die Gefahr (eine Gefahr)', english: 'danger, hazard, risk' },
  { german: 'gefährlich', english: 'dangerous, hazardous\n\nRelated: die Gefahr (danger)' },
  { german: 'der Lehrer (ein Lehrer)\nFem: die Lehrerin', english: 'teacher (male)\nFeminine: teacher (female)' },
  { german: 'der Stuhl (ein Stuhl)\nPlural: die Stühle', english: 'chair\nPlural: chairs' },
  { german: 'ohne', english: 'without\n\nExample: ohne Zucker\n(without sugar)' },
  { german: 'mehr', english: 'more\n\nExample: mehr Zeit\n(more time)' },
  { german: 'die Zusammenfassung\n(eine Zusammenfassung)', english: 'summary, synopsis\n\nFrom: zusammenfassen\n(to summarize)' },
  { german: 'die Präsentation\n(eine Präsentation)', english: 'presentation\n\nVerb: präsentieren\n(to present)' },
  { german: 'am Anfang', english: 'at the beginning\nin the beginning\nat first' },
  { german: 'danach', english: 'after that\nafterward\nthen' },
  { german: 'am Ende', english: 'at the end\nin the end\nfinally' }
];

const FlashcardsPDF = () => {
  return (
    <div className="mx-auto">
      {/* Print instructions */}
      <div className="print:hidden mb-8 p-8">
        <h1 className="text-2xl font-bold mb-4">Double-Sided Flashcards - German to English</h1>
        <div className="flex justify-end mb-4">
          <ExportButton filename="DE-18-10-24" />
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
          <li>Page 1 contains German words with grammar notes (front)</li>
          <li>Page 2 contains English translations with examples (back)</li>
          <li>Cut along the dashed lines after printing</li>
        </ul>
      </div>

      <div id="flashcard-container">
        {/* Page 1 - German side */}
        <div className="flashcard-page">
          <h2 className="text-center font-bold mb-4 print:hidden">Page 1 - German (Front)</h2>
          <div className="flashcard-grid">
            {flashcardData.map((card, index) => (
              <div key={`front-${index}`} className="flashcard-cell">
                <div className="flashcard-inner">
                  <span className="flashcard-content whitespace-pre-line">{card.german}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Page 2 - English side */}
        <div className="flashcard-page">
          <h2 className="text-center font-bold mb-4 print:hidden">Page 2 - English (Back)</h2>
          <div className="flashcard-grid flashcard-back-grid">
            {[...flashcardData].reverse().map((card, index) => (
              <div key={`back-${index}`} className="flashcard-cell">
                <div className="flashcard-inner flashcard-back-content">
                  <span className="flashcard-content whitespace-pre-line">{card.english}</span>
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
