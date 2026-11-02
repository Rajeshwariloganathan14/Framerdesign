# Framer Design & Layout Landing Page

A high-performance, pixel-perfect React + Vite web application showcasing interactive Framer design canvas features, responsive breakpoints, freeform layouts, and interactive bento cards.

---

## 🚀 Features

- **Interactive Editor Canvas Mockup**: Multi-tool header toolbar (Insert, Layout, Frame, Text, CMS), layers panel, live responsive artboard previews (Desktop & Mobile), and real-time inspector properties.
- **8-Card Bento Showcase**: Visual grid featuring Stack & Grid, Freeform canvas, Figma copy-paste, Breakpoints, Page inserts, Pinning, Styling, and Positioning.
- **In-Depth Interactive Feature Blocks**: Interactive property sliders (radius, opacity, saturation), live controls, and animated UI mockups.
- **Interactive Walkthrough Modal**: Video and documentation modal player accessible from any card or tutorial button.
- **Clean Architecture & Separation of Concerns**: Modular components, organized CSS stylesheets, and optimized asset bundling.

---

## 📁 Project Structure

```text
├── public/
│   └── assets/                     # Publicly accessible static assets
├── src/
│   ├── assets/                     # Component-imported assets & barrel export (index.js)
│   ├── components/
│   │   ├── bento/                  # Bento grid showcase section and cards
│   │   │   ├── BentoSection.jsx
│   │   │   ├── CardBreakpoints.jsx
│   │   │   ├── CardFigma.jsx
│   │   │   ├── CardFreeform.jsx
│   │   │   ├── CardInsert.jsx
│   │   │   ├── CardPinning.jsx
│   │   │   ├── CardPositioning.jsx
│   │   │   ├── CardStackGrid.jsx
│   │   │   └── CardStyling.jsx
│   │   ├── common/                 # Common / shared components
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── TutorialModal.jsx
│   │   ├── features/               # Detailed feature sections
│   │   │   ├── BreakpointsFeature.jsx
│   │   │   ├── FigmaFeature.jsx
│   │   │   ├── FreeformFeature.jsx
│   │   │   ├── InsertFeature.jsx
│   │   │   ├── MiniFeatureCards.jsx
│   │   │   ├── PinningFeature.jsx
│   │   │   ├── PositioningFeature.jsx
│   │   │   ├── StackGridFeature.jsx
│   │   │   └── StylingFeature.jsx
│   │   └── hero/                   # Hero section & editor canvas mockup components
│   │       ├── CanvasArea.jsx
│   │       ├── EditorMockup.jsx
│   │       ├── HeroSection.jsx
│   │       ├── LayersPanel.jsx
│   │       └── PropertiesPanel.jsx
│   ├── pages/                      # Application pages
│   │   └── HomePage.jsx
│   ├── styles/                     # Pure CSS design system & component styles
│   │   ├── bento.css
│   │   ├── editor.css
│   │   ├── features.css
│   │   ├── footer.css
│   │   ├── hero.css
│   │   ├── index.css
│   │   ├── mini-cards.css
│   │   ├── modal.css
│   │   └── navbar.css
│   ├── App.jsx                     # Application root component
│   └── main.jsx                    # React entry point
├── index.html                      # HTML entry with preconnect fonts and metadata
├── package.json                    # Project dependencies & scripts
├── vite.config.js                  # Vite configuration
├── .gitignore                      # Git exclusion rules
└── README.md                       # Project documentation
```

---

## 🛠️ Tech Stack

- **React 18** (`react`, `react-dom`)
- **Vite 6** (`@vitejs/plugin-react`)
- **Vanilla CSS** with CSS Custom Properties (Design Tokens)
- **Lucide React** (icons)
- **Google Fonts** (Inter & Playfair Display)

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or higher recommended)
- [npm](https://www.npmjs.com/) (version 9.x or higher)

### 1. Install Dependencies

Clone the repository and install the required dependencies:

```bash
npm install
```

### 2. Run the Development Server

Start the local Vite development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` (or the port indicated in your terminal).

### 3. Build for Production

To create an optimized production build:

```bash
npm run build
```

The output bundle will be compiled into the `dist/` directory.

### 4. Preview the Production Build

To preview the built production site locally:

```bash
npm run preview
```

---

## 📄 License

Private / Proprietary. All rights reserved.
