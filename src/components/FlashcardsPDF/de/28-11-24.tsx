import React from 'react';
import ExportButton from '../../ExportButton';

const flashcardData = [
  { german: 'die Stadt (eine Stadt)', english: 'city, town' },
  { german: 'stark', english: 'strong, powerful' },
  { german: 'die Straße (eine Straße)', english: 'street, road' },
  { german: 'der Strand (ein Strand)', english: 'beach' },
  { german: 'der Spiegel (ein Spiegel)', english: 'mirror' },
  { german: 'die Spitze (eine Spitze)', english: 'tip, peak, point' },
  { german: 'spät', english: 'late' },
  { german: 'flüstern', english: 'to whisper' },
  { german: 'murmeln', english: 'to mumble, to mutter' },
  { german: 'schleichen', english: 'to sneak, to creep' },
  { german: 'rennen', english: 'to run, running (as a sport)' }
];

const CARDS_PER_PAGE = 10;

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
        <h1 className="text-2xl font-bold mb-4">Double-Sided Flashcards - German to English</h1>
        <div className="flex justify-end mb-4">
          <ExportButton filename="DE-28-11-24" />
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
          <li>Page 1 contains German words (front)</li>
          <li>Page 2 contains English definitions (back)</li>
          <li>Cut along the dashed lines after printing</li>
        </ul>
      </div>

      <div id="flashcard-container">
        {/* Front pages */}
        {pages.map((pageCards, pageIndex) => (
          <div key={`front-page-${pageIndex}`} className="flashcard-page">
            <h2 className="text-center font-bold mb-4 print:hidden">
              Page {pageIndex * 2 + 1} - German (Front)
            </h2>
            <div className="flashcard-grid">
              {pageCards.map((card, index) => (
                <div key={`front-${pageIndex}-${index}`} className="flashcard-cell">
                  <div className="flashcard-inner">
                    <span className="flashcard-content whitespace-pre-line">{card.german}</span>
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
              Page {pageIndex * 2 + 2} - English (Back)
            </h2>
            <div className="flashcard-grid flashcard-back-grid">
              {pageCards.map((card, index) => (
                <div key={`back-${pageIndex}-${index}`} className="flashcard-cell">
                  <div className="flashcard-inner flashcard-back-content">
                    <span className="flashcard-content whitespace-pre-line">{card.english}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
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
          .flashcard-page {
            page-break-after: always;
          }
        }
      `}</style>
    </div>
  );
};

export default FlashcardsPDF;
