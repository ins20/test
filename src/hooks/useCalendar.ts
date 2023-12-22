import { useState } from "react";
import { nextMonth, prevMonth } from "@/utils/helpers";
const useCalendar = () => {
  const [dateFirst, setDateFirst] = useState<any>(
    new Date(2021, 11, 1)
  );
  const [dateSecond, setDateSecond] = useState<any>(
    new Date(2022, 0, 1)
  );
  const handlePrevMonth = () => {
    setDateFirst(prevMonth(dateFirst));
    setDateSecond(prevMonth(dateSecond));
  };
  const handleNextMonth = () => {
    setDateFirst(nextMonth(dateFirst));
    setDateSecond(nextMonth(dateSecond));
  };

  return {
    dateFirst,
    dateSecond,
    handlePrevMonth,
    handleNextMonth,
    setDateFirst,
    setDateSecond,
  };
};

export default useCalendar;
