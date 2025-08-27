import React from 'react';
import Image from 'next/image';

function MDImage({ src, alt = '', title }) {
  return (
    <Image 
      src={src} 
      alt={alt} 
      width={800} 
      height={450} 
      className="h-auto w-full" 
      title={title} 
    />
  );
}

export const image = {
  render: 'Image',
  attributes: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
  },
};
