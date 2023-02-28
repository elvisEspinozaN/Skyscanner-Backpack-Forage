import React from "react";
import { BpkCode } from "@skyscanner/backpack-web/bpk-component-code";
import BpkButton from "@skyscanner/backpack-web/bpk-component-button";
import BpkText from "@skyscanner/backpack-web/bpk-component-text";
import BpkCalendar from "@skyscanner/backpack-web/bpk-component-calendar";
import BpkInput, {
  INPUT_TYPES,
} from "@skyscanner/backpack-web/bpk-component-input";

import { cssModules } from "@skyscanner/backpack-web/bpk-react-utils";

import STYLES from "./App.scss";

import format from "date-fns/format";

const formatDateFull = (date) => format(date, "EEEE, do MMMM yyyy");
const formatMonth = (date) => format(date, "MMMM yyyy");
const daysOfWeek = [
  {
    name: "Sunday",
    nameAbbr: "Sun",
    index: 0,
    isWeekend: true,
  },
  {
    name: "Saturday",
    nameAbbr: "Sat",
    index: 1,
    isWeekend: true,
  },
  {
    name: "Monday",
    nameAbbr: "Mon",
    index: 2,
    isWeekend: false,
  },
  {
    name: "Tuesday",
    nameAbbr: "Tue",
    index: 3,
    isWeekend: false,
  },
  {
    name: "Wednesday",
    nameAbbr: "Wed",
    index: 4,
    isWeekend: false,
  },
  {
    name: "Thursday",
    nameAbbr: "Thu",
    index: 5,
    isWeekend: false,
  },
  {
    name: "Friday",
    nameAbbr: "Fri",
    index: 6,
    isWeekend: false,
  },
];

const getClassName = cssModules(STYLES);

const App = () => (
  <div className={getClassName("App")}>
    <header className={getClassName("App__header")}>
      <div className={getClassName("App__header-inner")}>
        <BpkText
          tagName="h1"
          textStyle="xxl"
          className={getClassName("App__heading")}
        >
          Flight Schedule
        </BpkText>
      </div>
    </header>

    <main className={getClassName("App__main")}>
      <BpkInput
        id="dateInput"
        type={INPUT_TYPES.text}
        name="date"
        value=""
        placeholder="Departure Date"
      />
      <BpkCalendar
        id="calendar"
        formatMonth={formatMonth}
        formatDateFull={formatDateFull}
        daysOfWeek={daysOfWeek}
        weekStartsOn={1}
        changeMonthLabel="Next Month"
        previoudMonthLabel="Previous Month"
      />
      <BpkButton onClick={() => alert("It works!")}>Click me</BpkButton>
    </main>
  </div>
);

export default App;
