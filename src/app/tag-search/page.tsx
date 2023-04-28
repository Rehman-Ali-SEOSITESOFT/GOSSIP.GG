import SearchCards from "@/components/Search/SearchCards";
import React from "react";
import RelatedTopics from "@/components/TagSearch/RelatedTopicSlider";
const Page = () => {
  return (
    <section className="search-page">
      <div className="pb-11  pt-6 mw-12:pb-7 mw-md:pb-[20px] mw-md:pt-[12px] ">
        <RelatedTopics />
      </div>
      <SearchCards />
    </section>
  );
};

export default Page;
