'use client';

import dynamic from 'next/dynamic';

const GeoJSON = () => {
  const NotSSRMaps = dynamic(() => import('@/lib/components/maps-geojson'), {
    ssr: false,
  });
  return (
    <div>
      <NotSSRMaps />
    </div>
  );
};

export default GeoJSON;
