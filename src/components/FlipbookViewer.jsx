// src/components/FlipbookViewer.js
import React from 'react';
import { FlipBook } from 'react-pageflip';
import './FlipbookViewer.css'; // File CSS khusus

const FlipbookViewer = () => {
  // Data halaman bisa dari props atau state
  const pages = [
    { content: <div className="page-content"><h1>Cover</h1></div> },
    { content: <div className="page-content"><p>Halaman 1</p></div> },
    { content: <div className="page-content"><p>Halaman 2</p></div> }
  ];

  return (
    <div className="flipbook-container">
      <FlipBook
        width={550}  // Lebar dalam px
        height={733} // Tinggi dalam px
        showCover={true}
        maxShadowOpacity={0.5}
        mobileScrollSupport={true}
        className="custom-flipbook"
      >
        {pages.map((page, index) => (
          <div key={index} className="page">
            {page.content}
          </div>
        ))}
      </FlipBook>
    </div>
  );
};

export default FlipbookViewer;