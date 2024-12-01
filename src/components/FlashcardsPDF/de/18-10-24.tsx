import React from 'react';
import FlashcardsPDF from '../FlashcardsPDF';
import rawFlashcardData from '../../../data/flashcards/de/18-10-24.json';
import { FlashCardData } from '../../../types/flashcards';

const flashcardData = rawFlashcardData as FlashCardData;

const DE_18_10_24 = () => (
  <FlashcardsPDF
    direction="de-en"
    filename="DE-18-10-24"
    flashcardData={flashcardData}
  />
);

export default DE_18_10_24;
