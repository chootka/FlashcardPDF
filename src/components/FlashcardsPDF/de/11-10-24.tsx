import React from 'react';
import FlashcardsPDF from '../FlashcardsPDF';
import rawFlashcardData from '../../../data/flashcards/de/11-10-24.json';
import { FlashCardData } from '../../../types/flashcards';

const flashcardData = rawFlashcardData as FlashCardData;

const DE_11_10_24 = () => (
  <FlashcardsPDF
    direction="de-en"
    filename="DE-11-10-24"
    flashcardData={flashcardData}
  />
);

export default DE_11_10_24;
