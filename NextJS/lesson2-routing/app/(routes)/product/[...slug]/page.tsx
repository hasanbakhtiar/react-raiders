import React from 'react'

const ProductSlug = async({params}:{params:Promise<{slug:string}>}) => {
  const slug = (await params).slug;
  return (
    <div>{slug[1]}</div>
  )
}

export default ProductSlug
