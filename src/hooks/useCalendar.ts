import { useState } from "react";
import { nextMonth, prevMonth } from "@/utils/helpers";
const useCalendar = (ransomDate: string, endDate: string) => {
  const [dateFirst, setDateFirst] = useState<any>(
    new Date(new Date(endDate).getFullYear(), 11, 1)
  );
  const [dateSecond, setDateSecond] = useState<any>(
    new Date(new Date(ransomDate).getFullYear(), 0, 1)
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
