import React from 'react'

const ProductSlug = async({params}:{params:Promise<{slug:string}>}) => {
  const slug = (await params).slug;
  return (
    <div>{slug}</div>
  )
}

export default ProductSlug
