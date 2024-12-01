import React from 'react';
import FlashcardsPDF from '../FlashcardsPDF';
import rawFlashcardData from '../../../data/flashcards/en/15-11-24.json';
import { FlashCardData } from '../../../types/flashcards';

const flashcardData = rawFlashcardData as FlashCardData;

const EN_15_11_24 = () => (
  <FlashcardsPDF
    direction="en-de"
    filename="EN-15-11-24"
    flashcardData={flashcardData}
  />
);

export default EN_15_11_24;
