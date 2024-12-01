import React from 'react';
import ExportButton from '../../ExportButton';

const flashcardData = [
  { german: 'besser\n(comparative of: gut)', english: 'better\n\nExample:\ngut → besser → am besten\n(good → better → best)' },
  { german: 'der Donner (ein Donner)\n\nVerb: es donnert', english: 'thunder\n\nVerb: it thunders' },
  { german: 'dumm\n\nNoun: die Dummheit', english: 'stupid, foolish\n\nNoun: stupidity, foolishness' },
  { german: 'dünn', english: 'thin, slim, narrow' },
  { german: 'die Brille (eine Brille)', english: 'glasses, spectacles' },
  { german: 'brennen\n(es brennt)', english: 'to burn, to be on fire\n\nExample: Das Haus brennt\n(The house is burning)' },
  { german: 'fressen\n(Das Tier frisst)', english: 'to eat (used for animals)\n\nNote: "essen" is used for humans' },
  { german: 'die Märchen (ein Märchen)', english: 'fairy tale, folk tale' },
  { german: 'der Zauberer (ein Zauberer)', english: 'wizard, magician, sorcerer' },
  { german: 'die Hexe (eine Hexe)', english: 'witch' },
  { german: 'die Prinzessin (eine Prinzessin)', english: 'princess' },
  { german: 'die Magie (eine Magie)', english: 'magic\n\nRelated: magisch (magical)' }
];

const FlashcardsPDF = () => {
  return (
    <div className="mx-auto">
      {/* Print instructions */}
      <div className="print:hidden mb-8 p-8">
        <h1 className="text-2xl font-bold mb-4">Double-Sided Flashcards - German to English</h1>
        <div className="flex justify-end mb-4">
          <ExportButton filename="DE-08-11-24" />
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
