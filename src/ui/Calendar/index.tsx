import Calendar from "react-calendar";

import Button from "@ui/Button";

import style from "./index.module.css";
import "react-calendar/dist/Calendar.css";
import useCalendar from "@/hooks/useCalendar";
import { formatDate } from "@/utils/helpers";
import Icon from "@/assets/Icon";

const CalendarDate = ({
  ransomDate,
  endDate,
}: {
  ransomDate: string;
  endDate: string;
}) => {
  const {
    dateFirst,
    dateSecond,
    handlePrevMonth,
    handleNextMonth,
    setDateFirst,
    setDateSecond,
  } = useCalendar();
  return (
    <div>
      <div className={style.datePicker}>
        <div className={style.datePickerHeader}>
          <Button color={"grey"} style={{ fontSize: 12, marginLeft: -10 }}>
            <Icon
              id="back"
              viewBox="0 0 13 8"
              width={13}
              height={8}
              style={{
                marginRight: 8,
              }}
            />
            Назад
          </Button>
          <span className={style.datePickerTitle}>Календарь займа</span>
        </div>
        <div className={style.datePickerCalendar}>
          <Icon
            id={"prevIcon"}
            viewBox="0 0 7 14"
            width={7}
            height={14}
            onClick={handlePrevMonth}
          />

          <div className={style.calendars}>
            <div className={style.calendar}>
              <p className={style.activeMonth}>
                {dateFirst.toLocaleString("ru-RU", { month: "long" })}{" "}
                {dateFirst.getFullYear()}
              </p>
              <Calendar
                showFixedNumberOfWeeks={true}
                locale="ru-RU"
                onChange={setDateFirst}
                value={dateFirst}
                showNavigation={false}
                tileClassName={({ date }) => {
                  if (formatDate(date) === endDate)
                    return `${style.endDate} ${style.tile}`;
                  return style.tile;
                }}
                tileContent={({ date }) => {
                  if (formatDate(date) === ransomDate)
                    return (
                      <div className={style.ransomDate}>
                        <Icon
                          id="bell"
                          viewBox="0 0 18 20"
                          width={18}
                          height={20}
                        />
                      </div>
                    );
                }}
              />
            </div>
            <div className={style.calendar}>
              <p className={style.activeMonth}>
                {dateSecond.toLocaleString("ru-RU", { month: "long" })}{" "}
                {dateSecond.getFullYear()}
              </p>

              <Calendar
                showFixedNumberOfWeeks={true}
                locale="ru-RU"
                onChange={setDateSecond}
                value={dateSecond}
                showNavigation={false}
                tileClassName={({ date }) => {
                  if (formatDate(date) === endDate)
                    return `${style.endDate} ${style.tile}`;
                  return style.tile;
                }}
                tileContent={({ date }) => {
                  if (formatDate(date) === ransomDate)
                    return (
                      <div className={style.ransomDate}>
                        <Icon
                          id={"bell"}
                          viewBox="0 0 18 20"
                          width={18}
                          height={20}
                        />
                      </div>
                    );
                }}
              />
            </div>
          </div>

          <Icon
            id={"nextIcon"}
            viewBox="0 0 7 14"
            width={7}
            height={14}
            onClick={handleNextMonth}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarDate;
