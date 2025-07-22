import SingleCardForProduct from '../../components/SingleCardForProduct.tsx';
export default async function Product() {
  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((item, i) => (
            <SingleCardForProduct
              key={i}
              title={item.title}
              id={item.id}
              img={item.img}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
