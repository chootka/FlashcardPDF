import React from 'react';
import ExportButton from '../../ExportButton';

const flashcardData = [
  { german: 'der Traum (ein Traum)\nPlural: die Träume', english: 'dream\nPlural: dreams\n\nRelated verb: träumen (to dream)' },
  { german: 'der Urlaub (ein Urlaub)\nPlural: die Urlaube', english: 'vacation, holiday\nPlural: vacations' },
  { german: 'das Beispiel (ein Beispiel)\nPlural: die Beispiele', english: 'example\nPlural: examples\n\nPhrase: zum Beispiel (for example)' },
  { german: 'die Süßigkeit (eine Süßigkeit)\nPlural: die Süßigkeiten', english: 'sweet, candy, confection\nPlural: sweets, candies\n\nFrom: süß (sweet)' },
  { german: 'das Feuer (ein Feuer)\nPlural: die Feuer', english: 'fire\nPlural: fires\n\nRelated: feurig (fiery)' },
  { german: 'deutlich', english: 'clear, distinct, obvious\n\nAdverb: clearly, distinctly' },
  { german: 'der Verlag (ein Verlag)\nPlural: die Verlage', english: 'publishing house, publisher\nPlural: publishers' },
  { german: 'der Autor (ein Autor)\nFem: die Autorin (eine Autorin)', english: 'author (male)\nFeminine: author (female)\n\nPlural: die Autoren/die Autorinnen' },
  { german: 'das Deckblatt (ein Deckblatt)\nPlural: die Deckblätter', english: 'cover page, title page\nPlural: cover pages' },
  { german: 'der Klappentext (ein Klappentext)\nPlural: die Klappentexte', english: 'blurb, book jacket text\n(text on back cover of book)' }
];

const FlashcardsPDF = () => {
  return (
    <div className="mx-auto">
      {/* Print instructions */}
      <div className="print:hidden mb-8 p-8">
        <h1 className="text-2xl font-bold mb-4">Double-Sided Flashcards - German to English</h1>
        <div className="flex justify-end mb-4">
          <ExportButton filename="DE-11-10-24" />
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
