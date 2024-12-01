import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

interface ExportButtonProps {
  filename: string;
}

const ExportButton: React.FC<ExportButtonProps> = ({ filename }) => {
  const handleExportPDF = async () => {
    const container = document.querySelector('#flashcard-container') as HTMLElement;
    if (!container) return;

    // Hide all titles before generating PDF
    const titles = container.querySelectorAll('h2');
    titles.forEach(title => {
      title.style.display = 'none';
    });

    const pages = container.querySelectorAll('.flashcard-page');
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i] as HTMLElement, {
        scale: 4,
        useCORS: true,
        logging: false,
        allowTaint: true,
        // letterRendering: true,
        backgroundColor: '#FFF',
        imageTimeout: 0,
        removeContainer: true,
      });

      // stupid hack to make sure the pdf is the right size
      const magickNumber = 1123;
      const gridHeight = pages[i].querySelector('.flashcard-grid')?.clientHeight;
      const scaleFactor = Math.ceil(gridHeight ? magickNumber / gridHeight : 1);
      // end stupid hack

      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      if (i > 0) {
        pdf.addPage();
      }
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight/scaleFactor, '', 'FAST');
    }

    // Show titles again after PDF generation
    titles.forEach(title => {
      title.style.display = 'block';
    });

    pdf.save(`flashcards-${filename}.pdf`);
  };

  return (
    <button 
      onClick={handleExportPDF}
      className="export-button print:hidden"
    >
      Export to PDF
    </button>
  );
};

export default ExportButton; 