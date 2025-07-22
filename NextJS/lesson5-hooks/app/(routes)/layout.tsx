import React from 'react'
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';


interface RoutesLayoutProps{
  children:React.ReactNode;
}

const RoutesLayout = ({children}:RoutesLayoutProps) => {
  return (
    <div>
    <Header />
    <div>{children}</div>
    <Footer />
    </div>
  )
}

export default RoutesLayout
