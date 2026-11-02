import React from 'react';
import CardStackGrid from './CardStackGrid';
import CardFreeform from './CardFreeform';
import CardFigma from './CardFigma';
import CardBreakpoints from './CardBreakpoints';
import CardInsert from './CardInsert';
import CardPinning from './CardPinning';
import CardStyling from './CardStyling';
import CardPositioning from './CardPositioning';
import '../../styles/bento.css';

export default function BentoSection({ onCardClick }) {
  return (
    <section className="bento-section" data-purpose="feature-bento-grid">
      {/* Ambient Radial Glows */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '950px',
        height: '480px',
        background: 'radial-gradient(ellipse at center, rgba(255, 237, 208, 0.85) 0%, rgba(254, 248, 237, 0.4) 55%, rgba(255, 249, 239, 0) 75%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      <div className="bento-container">
        {/* Heading Block */}
        <div className="bento-heading-block">
          <h2 className="bento-title">
            Stunning designs.<br />Dynamic layouts.
          </h2>
          <p className="bento-description">
            Use powerful yet familiar tools to create your ultimate website design. Import your designs from Figma, add flexible Grids &amp; Stacks, use absolute positioning, and work on your breakpoints side-by-side to adapt them to any screen size.
          </p>
        </div>

        {/* 3-Column Bento Grid Container */}
        <div className="bento-grid">
          {/* 1. Stack and Grid (Tall Card, Spans Row 1 & 2, Col 1) */}
          <CardStackGrid onClick={() => onCardClick("Stack and Grid", "Use fixed grids or fluid stacks to organize and position elements with ease.")} />

          {/* 2. Freeform canvas (Row 1, Right 2 Columns, Col 2 & 3) */}
          <CardFreeform onClick={() => onCardClick("Freeform Canvas", "Express your creative ideas with unconstrained free-form positioning.")} />

          {/* 3. Figma Copy Paste (Row 2, Middle Column, Col 2) */}
          <CardFigma onClick={() => onCardClick("Figma Copy Paste", "Copy and paste web designs from Figma to Framer and hit publish.")} />

          {/* 4. Breakpoints (Row 2, Right Column, Col 3) */}
          <CardBreakpoints onClick={() => onCardClick("Breakpoints", "Visually design layouts that adapt to any size side-by-side.")} />

          {/* 5. Insert Pages and Sections (Row 3, Left 2 Columns, Col 1 & 2) */}
          <CardInsert onClick={() => onCardClick("Insert Pages and Sections", "Insert pre-made pages, headers, footers, and common layouts.")} />

          {/* 6. Pinning (Row 3, Right Column, Col 3) */}
          <CardPinning onClick={() => onCardClick("Pinning", "Use layout pinning to design smarter layouts that scale.")} />

          {/* 7. Styling (Row 4, Left Column, Col 1) */}
          <CardStyling onClick={() => onCardClick("Styling", "Style everything using familiar, easy-to-use property controls.")} />

          {/* 8. Positioning (Row 4, Right 2 Columns, Col 2 & 3) */}
          <CardPositioning onClick={() => onCardClick("Positioning", "Fix navigation bars, sidebars, badges, and backgrounds effortlessly.")} />
        </div>
      </div>
    </section>
  );
}
