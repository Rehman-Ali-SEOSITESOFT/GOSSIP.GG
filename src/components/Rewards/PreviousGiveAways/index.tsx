import SectionSaprator from "@/components/SecSaprator";
import React, { useState } from "react";
import give1 from "../../../assets/rewards/give1.png";
import give2 from "../../../assets/rewards/give2.png";
import give3 from "../../../assets/rewards/give3.png";
import give4 from "../../../assets/rewards/give4.png";
import AbsPreiousGiveAway from "../AbsPreviousGiveAway/AbsPreiousGiveAway";
const PreviousGiveAways = () => {
  interface List {
    iamges: any;
    qty: any;
  }
  const [list, setList] = useState<List[]>([
    {
      iamges: give1,
      qty: "500 units",
    },
    {
      iamges: give2,
      qty: "380 units",
    },
    {
      iamges: give3,
      qty: "220 units",
    },
    {
      iamges: give4,
      qty: "150 units",
    },
  ]);
  return (
    <>
      <section>
        <div className="global-section-width">
          <div className="2xl:container">
            <div className="mt-[88px]">
              <SectionSaprator title="Previous Giveaways" />
            </div>
            <div className="flex justify-between">
              {list.map((e, idx) => {
                return (
                  <div className="" key={idx}>
                    <AbsPreiousGiveAway iamges={e.iamges} qty={e.qty} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PreviousGiveAways;
