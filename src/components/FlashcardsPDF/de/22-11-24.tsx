import React from 'react';
import FlashcardsPDF from '../FlashcardsPDF';
import rawFlashcardData from '../../../data/flashcards/de/22-11-24.json';
import { FlashCardData } from '../../../types/flashcards';

const flashcardData = rawFlashcardData as FlashCardData;

const DE_22_11_24 = () => (
  <FlashcardsPDF
    direction="de-en"
    filename="DE-22-11-24"
    flashcardData={flashcardData}
  />
);

export default DE_22_11_24;
