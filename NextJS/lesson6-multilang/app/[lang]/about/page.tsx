

import { getDictionary } from '../dictionaries';
import Button from './Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'This is about page',
};

export default async function About({
  params,
}: {
  params: Promise<{ lang: 'en' | 'az' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <Button title={dict.page.about}/>;
}
