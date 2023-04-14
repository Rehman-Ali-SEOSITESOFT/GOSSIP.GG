import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import downarrow from "../../../assets/esports/down-arrow.png";
import Valorant from "../../../assets/images/filters/valorant.png";
import Cross from "../../../assets/images/filters/x.png";
import BGMI from "../../../assets/images/filters/bgmi.png";
import CounterStrike from "../../../assets/images/filters/counter.png";
import Dota from "../../../assets/images/filters/valorant.png";
import ApexLengends from "../../../assets/images/filters/apex.png";
import CallOfDuty from "../../../assets/images/filters/call.png";
import AgeOfEmpire from "../../../assets/images/filters/age.png";
import EsportClub from "../../../assets/images/filters/esport.png";
import NOQWIN from "../../../assets/images/filters/nodwin.png";
import Penta from "../../../assets/images/filters/penta.png";
import Search from "../../../assets/images/filters/search.png";

const FilterBy = () => {
  const [sortBy, setSortBy] = useState<string[]>([
    "Popularity",
    "Recently Added",
    "Prizepool",
    "A to Z",
    "Z to A",
  ]);
  const [sort, setSort] = useState<number | null>(null);
  const hanldeSorting = (num: number) => {
    setSort(num);
  };

  //////////////////////////////////////////
  interface List {
    id: string;
    name: string;
    image: any;
  }
  const itemGame: List[] = [
    {
      id: "1",
      name: "Valorant",
      image: Valorant,
    },
    {
      id: "2",
      name: "BGMI",
      image: BGMI,
    },
    {
      id: "3",
      name: "Counter Strike: Global Offensive",
      image: CounterStrike,
    },
    {
      id: "4",
      name: "Dota 2",
      image: Valorant,
    },
    {
      id: "5",
      name: "Apex Lengends",
      image: ApexLengends,
    },
    {
      id: "6",
      name: "Call of Duty: Mobile",
      image: CallOfDuty,
    },
    {
      id: "7",
      name: "Age of Empires 4",
      image: AgeOfEmpire,
    },
    {
      id: "8",
      name: "All",
      image: "",
    },
  ];

  const itemOrganizer: List[] = [
    {
      id: "1",
      name: "The Esports Club",
      image: EsportClub,
    },
    {
      id: "2",
      name: "NODWIN Gaming",
      image: NOQWIN,
    },
    {
      id: "3",
      name: "Penta Esports",
      image: Penta,
    },
    {
      id: "4",
      name: "All",
      image: "",
    },
  ];

  const dropDownRef = useRef<any | null>(null);

  const [opendropDown1, setOpenDropdown1] = useState<Boolean>(false);
  const [opendropDown2, setOpenDropdown2] = useState<Boolean>(false);
  const [opendropDown3, setOpenDropdown3] = useState<Boolean>(false);
  const [opendropDown4, setOpenDropdown4] = useState<Boolean>(false);
  const [selectedRegion, setSelectedRegion] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [organizerList, setOrganizerList] = useState(itemOrganizer);
  const [gameList, setGameList] = useState(itemGame);
  const [selectedOrganizer, setSelectedOrganizer] = useState<string[]>([]);
  const [selectedGame, setSelectedGame] = useState<string[]>([]);
  const [regionList, setRegionList] = useState<string[]>([
    "South Asia",
    "Southeast Asia",
    "All",
  ]);
  const [statusList, setStatusList] = useState<string[]>([
    "Registration Open",
    "Registration Closed",
    "In Progess",
    "All",
  ]);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  // /// for close dropdown on outside click
  const handleClickOutside = (e: any) => {
    if (!dropDownRef.current.contains(e.target)) {
      setOpenDropdown1(false);
      setOpenDropdown2(false);
      setOpenDropdown3(false);
      setOpenDropdown4(false);
    }
  };
  const onClickOpen1 = () => {
    setOpenDropdown1(!opendropDown1);
  };
  const onClickOpen2 = () => {
    setOpenDropdown2(!opendropDown2);
  };
  const onClickOpen3 = () => {
    setOpenDropdown3(!opendropDown3);
  };

  const onClickOpen4 = () => {
    setOpenDropdown4(!opendropDown4);
  };

  const onChangeRegionCheckbox = (e: any) => {
    let copyArr = [...selectedRegion];
    let filterArr = copyArr.filter((item) => item === e.target.value);
    let finalArr = [];
    if (filterArr.length > 0) {
      finalArr = copyArr.filter((item) => item !== e.target.value);
    } else {
      finalArr.push(...copyArr, e.target.value);
    }
    setSelectedRegion(finalArr);
  };

  const onClickRemoveRegion = () => {
    setSelectedRegion([]);
  };

  const onChangeStatusCheckbox = (e: any) => {
    let copyArr = [...selectedStatus];
    let filterArr = copyArr.filter((item) => item === e.target.value);
    let finalArr = [];
    if (filterArr.length > 0) {
      finalArr = copyArr.filter((item) => item !== e.target.value);
    } else {
      finalArr.push(...copyArr, e.target.value);
    }
    setSelectedStatus(finalArr);
  };

  const onClickRemoveStatus = () => {
    setSelectedStatus([]);
  };

  const onChangeGameCheckbox = (e: any) => {
    let copyArr = [...selectedGame];
    let filterArr = copyArr.filter((item) => item === e.target.value);
    let finalArr = [];
    if (filterArr.length > 0) {
      finalArr = copyArr.filter((item) => item !== e.target.value);
    } else {
      finalArr.push(...copyArr, e.target.value);
    }
    setSelectedGame(finalArr);
  };

  const onClickRemoveGame = () => {
    setSelectedGame([]);
  };

  const onChangeOrganizerCheckbox = (e: any) => {
    let copyArr = [...selectedOrganizer];
    let filterArr = copyArr.filter((item) => item === e.target.value);
    let finalArr = [];
    if (filterArr.length > 0) {
      finalArr = copyArr.filter((item) => item !== e.target.value);
    } else {
      finalArr.push(...copyArr, e.target.value);
    }
    setSelectedOrganizer(finalArr);
  };

  const onClickRemoveOrganizer = () => {
    setSelectedOrganizer([]);
  };

  const onChangeGameSearch = (e: any) =>{
     let copyArr = [...gameList];
     let filterArr = copyArr.filter(item => item.name.toLowerCase().indexOf(e.target.value) > -1);
    if(e.target.value !== ""){
      setGameList(filterArr)
    }else{
      setGameList(itemGame)
    }
    }

    const onChangeOrganizerSearch = (e: any) =>{
      let copyArr = [...organizerList];
      let filterArr = copyArr.filter(item => item.name.toLowerCase().indexOf(e.target.value) > -1);
     if(e.target.value !== ""){
       setOrganizerList(filterArr)
     }else{
      setOrganizerList(itemGame)
     }
     }

  return (
    <div className="filter-by-esport-event pt-16	">
      <div className="global-section-width">
        <h5 className="montserratfont font-semibold	text-base leading-5 dark:text-brandLightOpacity100 uppercase">
          FILTER by:
        </h5>
        <div ref={dropDownRef} className="flex flex-row justify-between">
          <div className="">
            <p className="pt-[13px] pb-[6px] pl-[8px] montserratfont text-sm dark:text-brandLightOpacity100 text-brandDark2  ">
              Game
            </p>
            <div
              onClick={() => onClickOpen1()}
              className="  px-4 drop1 flex flex-row justify-between items-center h-[60px] rounded-lg w-[302px] border border-brandDark2 dark:border-brandLightOpacity50"
            >
              {selectedGame.filter((item) => item === "8").length === 1 ? (
                "All"
              ) : selectedGame.length >= 2 ? (
                <p className="montserratfont text-brandLightOpacity100"> {selectedGame.length + " " + "selected"}</p>
              ) : (
                <div className="flex items-center">
                  {selectedGame.length === 1 ? (
                    <Image
                      src={
                        gameList.filter(
                          (item) => item.id === selectedGame[0]
                        )[0].image
                      }
                      alt="icons"
                    />
                  ) : (
                    ""
                  )}
                  <p className="montserratfont text-[14px] font-normal pl-[16px]">
                    {selectedGame.length === 1
                      ? gameList.filter(
                          (item) => item.id === selectedGame[0]
                        )[0].id !== "3"
                        ? gameList.filter(
                            (item) => item.id === selectedGame[0]
                          )[0].name
                        : "Counter Strike"
                      : ""}
                  </p>
                </div>
              )}

              <div className="flex items-center">
                {selectedGame.length > 0 && (
                  <>
                    <Image
                      onClick={() => onClickRemoveGame()}
                      src={Cross}
                      alt="arrow icon"
                    />
                    <span className="mx-[16px] h-[36px] w-[1px]  bg-brandLightOpacity50"></span>
                  </>
                )}
                <Image
                  className={`${opendropDown1 ? "rotate-180" : "rotate-0"}`}
                  src={downarrow}
                  alt="arrow icon"
                />
              </div>
            </div>
            {opendropDown1 && (
              <div className=" shadow-3xshadow absolute mt-[4px] rounded-lg border-2 border-brandDark2 dark:border-brandLightOpacity10  m-h-[462px] w-[302px] bg-brandDark1">
                <div className="border-b-2 border-b-brandLightOpacity10 h-[60px] flex flex-row  items-center pl-[16px] pr-[20px]">
                  <Image src={Search} alt="search"/>
                  <input type="input"
                  onChange={(e) => onChangeGameSearch(e)}
                  className="bg-brandDark1 focus:outline-none focus:bg-brandDark1 hover:bg-brandDark1 focus:border-none w-[90%] text-brandLightOpacity100 ml-2 montserratfont" />
                </div>
                {gameList.map((item, index) => (
                  <div
                    key={index}
                    className="h-[60px] hover:bg-brandLightOpacity10  flex flex-row justify-between items-center pl-[16px] pr-[20px]"
                  >
                    <div className="flex items-center">
                      {item.image !== "" && (
                        <Image src={item.image} alt="icons" />
                      )}
                      <p
                        className={`text-brandLightOpacity100 montserratfont leading-[20px] text-base font-normal ${
                          item.image !== "" ? "pl-[16px]" : "pl-[50px]"
                        }`}
                      >
                        {item.name}
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={
                        selectedGame.filter((i) => i === "8").length === 1
                          ? true
                          : selectedGame.filter((i) => i === item.id).length ===
                            1
                          ? true
                          : false
                      }
                      value={item.id}
                      onChange={(e) => onChangeGameCheckbox(e)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="">
            <p className="pt-[13px] pb-[6px] pl-[8px] montserratfont text-sm dark:text-brandLightOpacity100 text-brandDark2  ">
              Tournament Organizer
            </p>
            <div
              onClick={() => onClickOpen2()}
              className=" px-4  flex flex-row justify-between items-center h-[60px] rounded-lg w-[302px] border border-brandDark2 dark:border-brandLightOpacity50"
            >
              <p className="montserratfont text-brandLightOpacity100">
                {selectedOrganizer.filter((item) => item === "4").length ===
                1 ? (
                  "All"
                ) : selectedOrganizer.length >= 2 ? (
                  selectedOrganizer.length + " " + "selected"
                ) : (
                  <div className="flex items-center">
                    {selectedOrganizer.length === 1 ? (
                      <Image
                        src={
                          organizerList.filter(
                            (item) => item.id === selectedOrganizer[0]
                          )[0].image
                        }
                        alt="icons"
                      />
                    ) : (
                      ""
                    )}
                    <p className="montserratfont text-[14px] font-normal pl-[16px]">
                      {selectedOrganizer.length === 1
                        ? organizerList.filter(
                            (item) => item.id === selectedOrganizer[0]
                          )[0].name
                        : ""}
                    </p>
                  </div>
                )}
              </p>
              <div className="flex items-center">
                {selectedOrganizer.length > 0 && (
                  <>
                    <Image
                      onClick={() => onClickRemoveOrganizer()}
                      src={Cross}
                      alt="arrow icon"
                    />
                    <span className="mx-[16px] h-[36px] w-[1px]  bg-brandLightOpacity50"></span>
                  </>
                )}
                <Image
                  className={`${opendropDown2 ? "rotate-180" : "rotate-0"}`}
                  src={downarrow}
                  alt="arrow icon"
                />
              </div>
            </div>
            {opendropDown2 && (
              <div className=" shadow-3xshadow absolute mt-[4px] rounded-lg border-2 border-brandDark2 dark:border-brandLightOpacity10  m-h-[462px] w-[302px] bg-brandDark1">
                <div className="border-b-2 border-b-brandLightOpacity10 h-[60px] flex flex-row  items-center pl-[16px] pr-[20px]">
                  <Image src={Search} alt="search"/>
                  <input
                  onChange={(e) => onChangeOrganizerSearch(e)}
                  type="input" className="bg-brandDark1 focus:outline-none focus:bg-brandDark1 hover:bg-brandDark1 focus:border-none w-[90%] text-brandLightOpacity100 ml-2 montserratfont" />
                </div>
                {organizerList.map((item, index) => (
                  <div
                    key={index}
                    className="h-[60px] hover:bg-brandLightOpacity10  flex flex-row justify-between items-center pl-[16px] pr-[20px]"
                  >
                    <div className="flex items-center">
                      {item.image !== "" && (
                        <Image src={item.image} alt="icons" />
                      )}
                      <p
                        className={`montserratfont text-brandLightOpacity100 text-base font-normal ${
                          item.image !== "" ? "pl-[16px]" : "pl-[60px]"
                        }`}
                      >
                        {item.name}
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={
                        selectedOrganizer.filter((i) => i === "4").length === 1
                          ? true
                          : selectedOrganizer.filter((i) => i === item.id)
                              .length === 1
                          ? true
                          : false
                      }
                      value={item.id}
                      onChange={(e) => onChangeOrganizerCheckbox(e)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="">
            <p className="pt-[13px] pb-[6px] pl-[8px] montserratfont text-sm dark:text-brandLightOpacity100 text-brandDark2  ">
              Status
            </p>
            <div
              onClick={() => onClickOpen3()}
              className=" px-4  flex flex-row justify-between items-center h-[60px] rounded-lg w-[302px] border border-brandDark2 dark:border-brandLightOpacity50"
            >
              <p className="montserratfont text-brandLightOpacity100">
                {selectedStatus.filter((item) => item === "All").length === 1
                  ? "All"
                  : selectedStatus.length >= 2
                  ? selectedStatus.length + " " + "selected"
                  : selectedStatus[0]}
              </p>
              <div className="flex items-center">
                {selectedStatus.length > 0 && (
                  <>
                    <Image
                      onClick={() => onClickRemoveStatus()}
                      src={Cross}
                      alt="arrow icon"
                    />
                    <span className="mx-[16px] h-[36px] w-[1px]  bg-brandLightOpacity50"></span>
                  </>
                )}
                <Image
                  className={`${opendropDown3 ? "rotate-180" : "rotate-0"}`}
                  src={downarrow}
                  alt="arrow icon"
                />
              </div>
            </div>
            {opendropDown3 && (
              <div className="shadow-3xshadow absolute mt-[4px] rounded-lg border-2 border-brandDark2 dark:border-brandLightOpacity10  m-h-[462px] w-[302px] bg-brandDark1">
                {statusList.map((item, index) => (
                  <div
                    key={index}
                    className="h-[60px] hover:bg-brandLightOpacity10  flex flex-row justify-between items-center pl-[16px] pr-[20px]"
                  >
                    <p className="montserratfont text-brandLightOpacity100 text-base font-normal pl-[8px]">
                      {item}
                    </p>
                    <input
                      type="checkbox"
                      checked={
                        selectedStatus.filter((item) => item === "All")
                          .length === 1
                          ? true
                          : selectedStatus.filter((i) => i === item).length ===
                            1
                          ? true
                          : false
                      }
                      value={item}
                      onChange={(e) => onChangeStatusCheckbox(e)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="">
            <p className="pt-[13px] pb-[6px] pl-[8px] montserratfont text-sm dark:text-brandLightOpacity100 text-brandDark2  ">
              Region
            </p>
            <div
              onClick={() => onClickOpen4()}
              className=" px-4  flex flex-row justify-between items-center h-[60px] rounded-lg w-[302px] border border-brandDark2 dark:border-brandLightOpacity50"
            >
              <p className="montserratfont text-brandLightOpacity100">
                {selectedRegion.filter((item) => item === "All").length === 1
                  ? "All"
                  : selectedRegion.length >= 2
                  ? selectedRegion.length + " " + "selected"
                  : selectedRegion[0]}
              </p>
              <div className="flex items-center">
                {selectedRegion.length > 0 && (
                  <>
                    <Image
                      onClick={() => onClickRemoveRegion()}
                      src={Cross}
                      alt="arrow icon"
                    />
                    <span className="mx-[16px] h-[36px] w-[1px]  bg-brandLightOpacity50"></span>
                  </>
                )}
                <Image
                  className={`${opendropDown4 ? "rotate-180" : "rotate-0"}`}
                  src={downarrow}
                  alt="arrow icon"
                />
              </div>
            </div>
            {opendropDown4 && (
              <div className="shadow-3xshadow absolute mt-[4px] rounded-lg border-2 border-brandDark2 dark:border-brandLightOpacity10  m-h-[462px] w-[302px] bg-brandDark1">
                {regionList.map((item, index) => (
                  <div
                    key={index}
                    className="h-[60px] hover:bg-brandLightOpacity10  flex flex-row justify-between items-center pl-[16px] pr-[20px]"
                  >
                    <p className="montserratfont text-brandLightOpacity100 text-base font-normal pl-[8px]">
                      {item}
                    </p>
                    <input
                      type="checkbox"
                      checked={
                        selectedRegion.filter((item) => item === "All")
                          .length === 1
                          ? true
                          : selectedRegion.filter((i) => i === item).length ===
                            1
                          ? true
                          : false
                      }
                      value={item}
                      onChange={(e) => onChangeRegionCheckbox(e)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* <p className="montserratfont font-medium text-sm leading-[17px]	dark:text-brandLightOpacity70">
          None applied
        </p>
        <p className="underline montserratfont text-sm font-medium	leading-[17px]	dark:text-brandLightOpacity70 cursor-pointer">
          Reset
        </p> */}
        <h1 className="montserratfont dark:text-brandLightOpacity100 font-bold	text-lg	leading-[22px] py-8	">
          Showing 1-20 of 24 Events
        </h1>
        <div className="sorby flex items-center">
          <h2 className="montserratfont font-semibold	text-base leading-5 dark:text-brandLightOpacity100 uppercase inline-block mr-[17px]">
            SORT by:
          </h2>
          <div className="">
            {sortBy.map((el, index) => {
              return (
                <p
                  key={index}
                  className={`py-2.5 px-4 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 rounded-[20px] mr-[8px] inline-block montserratfont font-medium test-base leading-5 cursor-pointer  ${
                    sort === index
                      ? "border dark:border-brandLightOpacity100 dark:bg-brandLightOpacity10"
                      : "border-0"
                  }`}
                  onClick={() => hanldeSorting(index)}
                >
                  {el}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBy;
