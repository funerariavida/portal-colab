"use client";

import useLinks from "@/hooks/use-links";
import HomePageLoader from "@/components/home-page-loader";
import LinkCard from "@/components/link-card";

export default function () {
  const { data, isLoading, error } = useLinks();
  if (!data) return <HomePageLoader />;

  return (
    <>
      <div className="w-full flex-auto">
        {/* SECTION 1 */}
        <div className="w-full bg-primary h-20 md:h-28 lg:h-32 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-white sm:text-4xl lg:text-5xl">
            {data[3].page.toLocaleUpperCase()}
          </h1>
        </div>
        <div className="px-2 py-10 flex flex-wrap items-center justify-center w-full gap-3">
          <div className="w-full text-center">
            <h3 className="text-lg font-semibold lg:text-2xl text-secondary">
              {data[3].name}
            </h3>
          </div>
          {/* Card link */}
          {data[3].infos.map((link, index) => {
            return (
              <LinkCard
                variant="primary"
                key={index}
                title={link.title}
                description={link.description}
                icon={link.icon}
                linkPath={link.linkPath}
              />
            );
          })}
        </div>
        {/* SECTION 2 */}
        <div className="px-2 py-10 flex flex-wrap items-center justify-center w-full gap-3">
          <div className="w-full text-center">
            <h3 className="text-lg font-semibold lg:text-2xl text-secondary">
              {data[4].name}
            </h3>
          </div>
          {/* Card link */}
          {data[4].infos.map((link, index) => {
            return (
              <LinkCard
                variant="primary"
                key={index}
                title={link.title}
                description={link.description}
                icon={link.icon}
                linkPath={link.linkPath}
              />
            );
          })}
        </div>
      </div>
    </>
  );
  //   return <TreatmentSection cardVariant="primary" data={data} />;
}
