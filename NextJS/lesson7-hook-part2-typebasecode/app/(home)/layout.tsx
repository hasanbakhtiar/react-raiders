'use client';

import { useSelectedLayoutSegments } from 'next/navigation';

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const segments = useSelectedLayoutSegments();

  return (
    <div>
      {/*<p>Active segment: {segments.join('>')}</p>*/}
      {children}
    </div>
  );
};

export default HomeLayout;
