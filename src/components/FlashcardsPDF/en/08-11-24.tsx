import React from 'react';
import ExportButton from '../../ExportButton';

const flashcardData = [
  { english: 'high', german: 'hoch\n\nExample: der hohe Berg' },
  { english: 'every', german: 'jede/jeder/jedes\n\nExample: jeden Tag (every day)' },
  { english: 'near', german: 'nah / in der Nähe\n\nExample: die Nähe (nearness)' },
  { english: 'add', german: 'hinzufügen / addieren\n\nExample: etwas hinzufügen' },
  { english: 'food', german: 'das Essen (ein Essen)\ndie Nahrung (eine Nahrung)' },
  { english: 'between', german: 'zwischen\n\nExample: zwischen den Häusern' },
  { english: 'own', german: 'eigen\n\nExample: mein eigenes Haus' },
  { english: 'below', german: 'unter / unterhalb\n\nExample: unter dem Tisch' },
  { english: 'country', german: 'das Land (ein Land)\nPlural: die Länder' },
  { english: 'plant', german: 'die Pflanze (eine Pflanze)\nVerb: pflanzen (to plant)' }
];

const CARDS_PER_PAGE = 10; // 5 rows × 2 columns

const FlashcardsPDF = () => {
  // Split cards into pages of 10 cards each
  const pages = [];
  for (let i = 0; i < flashcardData.length; i += CARDS_PER_PAGE) {
    pages.push(flashcardData.slice(i, i + CARDS_PER_PAGE));
  }

  return (
    <div className="mx-auto">
      {/* Print instructions */}
      <div className="print:hidden mb-8 p-8">
        <h1 className="text-2xl font-bold mb-4">Double-Sided Flashcards - English to German</h1>
        <div className="flex justify-end mb-4">
          <ExportButton filename="EN-08-11-24" />
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
        {/* Front pages */}
        {pages.map((pageCards, pageIndex) => (
          <div key={`front-page-${pageIndex}`} className="flashcard-page">
            <h2 className="text-center font-bold mb-4 print:hidden">
              Page {pageIndex * 2 + 1} - English (Front)
            </h2>
            <div className="flashcard-grid">
              {pageCards.map((card, index) => (
                <div key={`front-${pageIndex}-${index}`} className="flashcard-cell">
                  <div className="flashcard-inner">
                    <span className="flashcard-content whitespace-pre-line">{card.english}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Back pages */}
        {pages.map((pageCards, pageIndex) => (
          <div key={`back-page-${pageIndex}`} className="flashcard-page">
            <h2 className="text-center font-bold mb-4 print:hidden">
              Page {pageIndex * 2 + 2} - German (Back)
            </h2>
            <div className="flashcard-grid flashcard-back-grid">
              {pageCards.map((card, index) => (
                <div key={`back-${pageIndex}-${index}`} className="flashcard-cell">
                  <div className="flashcard-inner flashcard-back-content">
                    <span className="flashcard-content whitespace-pre-line">{card.german}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

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
          .flashcard-page {
            page-break-after: always;
          }
        }
      `}</style>
    </div>
  );
};

export default FlashcardsPDF;
