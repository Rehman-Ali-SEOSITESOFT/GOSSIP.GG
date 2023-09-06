import React, { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import "react-datepicker/dist/react-datepicker.css";
import "react-date-range/dist/styles.css"; // Import the styles
import "react-date-range/dist/theme/default.css";
import { useTheme } from "next-themes";
const DateRangePicker = () => {
  const { theme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState<string>("");

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const _handleClose = () => {
    // setSelectedValue("");
    // setOpenDateModal(false);
  };
  const _handleSave = () => {
    setState(state);
    // setSelectedValue(
      state[0].startDate.getDate() +
        "-" +
        state[0].startDate.getMonth() +
        "-" +
        state[0].startDate.getFullYear() +
        " To " +
        state[0].endDate.getDate() +
        "-" +
        state[0].endDate.getMonth() +
        "-" +
        state[0].endDate.getFullYear()
    );
    // setOpenDateModal(false);
    // console.log(state);
  };
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);
  return (
    <>
      <div
        className={`${
          isDarkTheme === "dark" ? "dark_date" : "light_date"
        } flex flex-col`}
      >
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
        <div className="flex">
          <button
            onClick={_handleSave}
            className="border-[1px] border-brandLightOpacity50 montserratfont text-[16px] bg-[#FFFFFF]   py-[8px] text-[#000] text-semibold w-[50%]"
          >
            Ok
          </button>
          <button
            onClick={_handleClose}
            className="border-[1px] border-brandLightOpacity50 montserratfont text-[16px] bg-[#FFFFFF]   py-[8px] text-[#000] text-semibold w-[50%]"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default DateRangePicker;
