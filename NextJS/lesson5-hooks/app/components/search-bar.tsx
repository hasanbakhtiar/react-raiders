'use client'
 
import { useSearchParams } from 'next/navigation'
 
export default function SearchBar() {
  const searchParams = useSearchParams()
 
  const search = searchParams.get('keyword')
 

 
  return <div className='py-40'>search keyword:{search}</div>
}
