import React from 'react';
import { CanvasGallery } from '../components/r3f/CanvasGallery';
import { GalleryItem } from '../types/types';

interface AppProps {
  items: GalleryItem[];
}

export const App: React.FC<AppProps> = ({ items }) => (
  <CanvasGallery items={items} />
);



