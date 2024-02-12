"use client";

import useLinks from "@/hooks/use-links";
import HomePageLoader from "@/components/home-page-loader";
import GenericSectors from "@/components/sections/genericSectors";

export default function () {
  const { data, isLoading, error } = useLinks();
  if (!data) return <HomePageLoader />;

  return <GenericSectors.genericSectorHeader  data={data} cardVariant="default" pageNumber={5}/>;
}
