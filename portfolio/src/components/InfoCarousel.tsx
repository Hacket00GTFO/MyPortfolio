import React from 'react';
import Carousel from './Carousel';
import type { CarouselItem } from './Carousel';
import { highlights } from '../data/info';

const items: CarouselItem[] = highlights.map(h => ({ id: h.id, title: h.title, description: h.description, icon: <div className="h-[16px] w-[16px] bg-white rounded-full" /> }));

export default function InfoCarousel() {
  return <Carousel items={items} baseWidth={360} autoplay={true} autoplayDelay={3500} loop round={false} />;
}
