import React from 'react';
import CategoryTabs from './index';

const categories = [
  { id: 'episodes', label: 'Épisodes', path: '/episodes' },
  { id: 'collection', label: 'Collection', path: '/collection' },
  { id: 'trailers', label: 'Bandes-annonces', path: '/trailers' },
  { id: 'more', label: 'Plus', path: '/more' }
];

export default function CategoryTabsContainer() {
  return (
    <CategoryTabs categories={categories} />
  );
}