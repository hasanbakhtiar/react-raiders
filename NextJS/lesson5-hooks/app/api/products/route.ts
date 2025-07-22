
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const products = [
    {
      id: 1,
      img:"https://m.media-amazon.com/images/I/71xZUkl5dyL.jpg",
      title: 'Asus Zenbook',
      price: 3400,
    },
    {
      id: 2,
      img:"https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2023/01/Lenovo-Yoga-Book-9i-Dual-screen-OLED-Laptop-1.jpg",
      title: 'Lenovo Yoga',
      price: 4000,
    },
    {
      id: 3,
      img:"https://sm.pcmag.com/t/pcmag_me/review/m/microsoft-/microsoft-surface-pro-9-intel_vt1g.1920.jpg",
      title: 'Microsoft Surface',
      price: 3700,
    },
    {
      id: 4,
      img:'https://images.idgesg.net/images/article/2020/01/swift_3_sf313-52g-right-facing-win-100826046-orig.jpg',
      title: 'Acer Swift',
      price: 1400,
    },
  ];
  return new Response(JSON.stringify(products), {
    status: 200,
    header: { 'Content-Type': 'application/json' },
  });
}
