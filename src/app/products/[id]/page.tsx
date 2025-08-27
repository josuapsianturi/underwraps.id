import { notFound } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { parse, transform, renderers } from '@markdoc/markdoc';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { getAllProductIds, getProductById } from '../data';
import config from '../../../../markdoc/config.js';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function MarkdownContent({ content }: { content: string }) {
  const ast = parse(content);
  const transformed = transform(ast, config);

  function Callout({ children }: { children: React.ReactNode }) {
    const styles = 'border-brown/20 bg-off-white-2 text-brown';
    return (
      <div className={`my-4 rounded-lg border px-4 py-3 ${styles}`}>
        {children}
      </div>
    );
  }

  function MDImage({ src, alt = '', title }: { src: string; alt?: string; title?: string }) {
    return (
      <div className="my-4">
        <Image src={src} alt={alt} width={800} height={450} className="h-auto w-full rounded-lg" title={title} />
      </div>
    );
  }

  return (
    <article className="markdown-content prose prose-sm max-w-none text-brown">
      {renderers.react(transformed, React, { components: { Image: MDImage, Callout } })}
    </article>
  );
}

type PageProps = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return getAllProductIds().map((id) => ({ id }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const numericId = Number(id);
  const base = getProductById(numericId);
  if (!base) return notFound();

  // Adapt provided demo structure, using local product data for name/price/image
  const product = {
    name: base.name,
    price: base.price,
    rating: base.rating,
    images: base.images,
  };

  // Load markdown details from file based on product id; fallback to inline details if file not found
  let detailMarkdown = '';
  try {
    const filePath = path.join(process.cwd(), 'content', 'products', `${numericId}.md`);
    detailMarkdown = await readFile(filePath, 'utf8');
  } catch {
    detailMarkdown = '';
  }

  return (
    <div className="bg-off-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center space-x-2 text-sm text-brown/60">
          <Link href="/products" className="hover:text-brown">
            Products
          </Link>
          <span>/</span>
          <span className="text-brown">{product.name}</span>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image Gallery */}
          <div>
            <TabGroup className="flex flex-col-reverse">
              <div className="mx-auto mt-4 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <TabList className="grid grid-cols-4 gap-3">
                  {product.images.map((image) => (
                    <Tab
                      key={image.id}
                      className="group relative flex h-20 cursor-pointer items-center justify-center rounded-lg bg-off-white-2 text-sm font-medium uppercase text-brown hover:bg-off-white-3 focus:outline-none focus:ring-2 focus:ring-brown focus:ring-offset-2"
                    >
                      <span className="sr-only">{image.name}</span>
                      <span className="absolute inset-0 overflow-hidden rounded-lg">
                        <Image
                          alt={image.name}
                          src={image.src}
                          fill
                          sizes="(max-width: 1024px) 25vw, 10vw"
                          className="object-cover"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-lg ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-brown"
                      />
                    </Tab>
                  ))}
                </TabList>
              </div>

              <TabPanels>
                {product.images.map((image) => (
                  <TabPanel key={image.id}>
                    <div className="aspect-square w-full overflow-hidden rounded-lg bg-off-white-2 relative">
                      <Image
                        alt={image.alt}
                        src={image.src}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </div>

          {/* Product Info */}
          <div className="mt-8 px-4 sm:mt-12 sm:px-0 lg:mt-0">
            {/* Product Header */}
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-brown mb-3">
                {product.name}
              </h1>
              
              <div className="flex items-center justify-between mb-4">
                <p className="text-2xl md:text-3xl font-bold text-brown">
                  {product.price}
                </p>
                
                <div className="flex items-center space-x-1">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden
                        className={classNames(
                          product.rating > rating ? 'text-yellow-1' : 'text-off-white-3',
                          'size-5 shrink-0',
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-brown/60 ml-1">
                    {product.rating}.0
                  </span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="mb-8">
              <Link
                href={base.href}
                target="_blank"
                className="flex w-full items-center justify-center rounded-lg bg-brown px-6 py-3 text-base font-medium text-white hover:bg-brown-2 focus:outline-none focus:ring-2 focus:ring-brown focus:ring-offset-2"
              >
                Beli di Shopee
              </Link>
            </div>

            {/* Product Details */}
            <section aria-labelledby="details-heading">
              <h2 id="details-heading" className="sr-only">
                Detail Produk
              </h2>

              <div className="divide-y divide-brown/10 border-t border-brown/10">
                <Disclosure as="div">
                  <h3>
                    <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                      <span className="text-base font-medium text-brown">
                        Detail produk
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden
                          className="block size-5 text-brown/60 group-hover:text-brown group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden
                          className="hidden size-5 text-brown/60 group-hover:text-brown group-data-[open]:block"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pb-6">
                    <div className="text-brown">
                      <MarkdownContent content={detailMarkdown} />
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}


