import React from 'react';
import FlashcardsPDF from '../FlashcardsPDF';
import rawFlashcardData from '../../../data/flashcards/de/08-11-24.json';
import { FlashCardData } from '../../../types/flashcards';

const flashcardData = rawFlashcardData as FlashCardData;

const DE_08_11_24 = () => (
  <FlashcardsPDF
    direction="de-en"
    filename="DE-08-11-24"
    flashcardData={flashcardData}
  />
);

export default DE_08_11_24;
