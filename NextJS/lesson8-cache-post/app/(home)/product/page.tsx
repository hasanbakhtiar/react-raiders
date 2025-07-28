type productType={
  title:string,
  price:number,
  desc:string
}
const Product = async() => {
  const res = await fetch('http://localhost:3000/api/product',{
    cache:'force-cache'
  });
  const products = await res.json();

  return <div>{
    products.map((item:productType,i:number)=>(
      <li key={i}>{item.title}</li>
    )
    )
  }</div>;
};

export default Product;
