import React from 'react'



interface RoutesLayoutProps{
  children:React.ReactNode;
}

const RoutesLayout = ({children}:RoutesLayoutProps) => {
  return (
    <div>
    <div>{children}</div>
    </div>
  )
}

export default RoutesLayout
