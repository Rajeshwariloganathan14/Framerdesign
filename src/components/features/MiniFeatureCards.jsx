import React from 'react';
import '../../styles/mini-cards.css';

export default function MiniFeatureCards({ onCardClick }) {
  const cards = [
    {
      id: 'effects',
      className: 'effects',
      title: 'Effects',
      desc: 'Effortlessly create stunning animations with just a few clicks.'
    },
    {
      id: 'navigation',
      className: 'navigation',
      title: 'Navigation',
      desc: 'Move between different pages or sections of the site.'
    },
    {
      id: 'cms',
      className: 'cms',
      title: 'CMS',
      desc: 'Manage content for a blog posts, job listings, or marketing pages.'
    },
    {
      id: 'site-mgmt',
      className: 'site-mgmt',
      title: 'Site Management',
      desc: 'Manage website settings like passwords and custom domains.'
    },
    {
      id: 'seo',
      className: 'seo',
      title: 'SEO & Performance',
      desc: 'Manage content for a blog posts, job listings, or marketing pages.'
    }
  ];

  return (
    <section className="mini-cards-section" data-purpose="mini-feature-cards-grid">
      <div className="mini-cards-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`mini-card ${card.className}`}
            onClick={() => onCardClick && onCardClick(card.title, card.desc)}
            role="button"
            tabIndex={0}
          >
            <div className="mini-card-header">
              <h3 className="mini-card-title">{card.title}</h3>
              <div className="mini-card-arrow">
                →
              </div>
            </div>
            <p className="mini-card-desc">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
