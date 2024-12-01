import React from 'react';
import ExportButton from '../ExportButton';
import { FlashCardData } from '../../types/flashcards';

interface FlashcardsPDFProps {
  direction: 'de-en' | 'en-de';
  filename: string;
  flashcardData: FlashCardData;
}

const FlashcardsPDF: React.FC<FlashcardsPDFProps> = ({ direction, filename, flashcardData }) => {
  const CARDS_PER_PAGE = 10;

  // Split cards into pages of 10 cards each
  const pages: FlashCardData[] = [];
  for (let i = 0; i < flashcardData.length; i += CARDS_PER_PAGE) {
    pages.push(flashcardData.slice(i, i + CARDS_PER_PAGE));
  }

  const isGermanToEnglish = direction === 'de-en';
  const frontLanguage = isGermanToEnglish ? 'German' : 'English';
  const backLanguage = isGermanToEnglish ? 'English' : 'German';
  const frontField = isGermanToEnglish ? 'german' : 'english';
  const backField = isGermanToEnglish ? 'english' : 'german';

  return (
    <div className="mx-auto">
      {/* Print instructions */}
      <div className="print:hidden mb-8 p-8">
        <h1 className="text-2xl font-bold mb-4">Double-Sided Flashcards - {frontLanguage} to {backLanguage}</h1>
        <div className="flex justify-end mb-4">
          <ExportButton filename={filename} />
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
          <li>Page 1 contains {frontLanguage} words {isGermanToEnglish && 'with grammar notes'} (front)</li>
          <li>Page 2 contains {backLanguage} {isGermanToEnglish ? 'translations with examples' : 'words with articles'} (back)</li>
          <li>Cut along the dashed lines after printing</li>
        </ul>
      </div>

      <div id="flashcard-container">
        {/* Front pages */}
        {pages.map((pageCards, pageIndex) => (
          <div key={`front-page-${pageIndex}`} className="flashcard-page">
            <h2 className="text-center font-bold mb-4 print:hidden">
              Page {pageIndex * 2 + 1} - {frontLanguage} (Front)
            </h2>
            <div className="flashcard-grid">
              {pageCards.map((card, index) => (
                <div key={`front-${pageIndex}-${index}`} className="flashcard-cell">
                  <div className="flashcard-inner">
                    <span className="flashcard-content whitespace-pre-line">{card[frontField]}</span>
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
              Page {pageIndex * 2 + 2} - {backLanguage} (Back)
            </h2>
            <div className="flashcard-grid flashcard-back-grid">
              {pageCards.map((card, index) => (
                <div key={`back-${pageIndex}-${index}`} className="flashcard-cell">
                  <div className="flashcard-inner flashcard-back-content">
                    <span className="flashcard-content whitespace-pre-line">{card[backField]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashcardsPDF; 