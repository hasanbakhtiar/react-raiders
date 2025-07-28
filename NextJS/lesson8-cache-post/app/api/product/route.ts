

import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    {
      title: 'Lenovo Legion 5 Pro',
      price: 2200,
      desc: '16" QHD, Ryzen 7, RTX 3070 ilə yüksək performanslı oyun laptopu.',
    },
    {
      title: 'ASUS ROG Zephyrus G14',
      price: 1950,
      desc: 'Ultra-portable, Ryzen 9 və RTX 4060 ilə güclü oyun təcrübəsi.',
    },
    {
      title: 'Apple MacBook Pro 14"',
      price: 2600,
      desc: 'M2 Pro çipi ilə professional istifadəçilər üçün idealdır.',
    },
    {
      title: 'HP Envy x360',
      price: 1150,
      desc: '2-in-1 dizaynlı, dokunmatik ekranlı gündəlik istifadə üçün.',
    },
    {
      title: 'Dell XPS 13 Plus',
      price: 1700,
      desc: 'Minimalist dizayn, Intel i7 13th Gen ilə güclü performans.',
    },
    {
      title: 'Acer Predator Helios 300',
      price: 1450,
      desc: 'RTX 3060 ilə sərfəli qiymətə oyun laptopu.',
    },
    {
      title: 'MSI Stealth 15M',
      price: 1600,
      desc: 'İncə və güclü, oyun və gündəlik işlər üçün ideal.',
    },
    {
      title: 'Samsung Galaxy Book3 Pro',
      price: 1800,
      desc: 'OLED ekranlı, yüngül və zərif dizaynlı ultrabook.',
    },
    {
      title: 'Razer Blade 15',
      price: 2400,
      desc: 'Premium material və RTX qrafika ilə oyun və iş üçün əla seçim.',
    },
    {
      title: 'LG Gram 17',
      price: 1500,
      desc: 'Çox yüngül, 17" ekranlı və uzun batareya ömrünə malik laptop.',
    },
  ];

  return NextResponse.json(products);
}
