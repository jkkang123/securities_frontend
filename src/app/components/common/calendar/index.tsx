"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Modal from "@common/modal";
import { useState } from "react";
import "./CalendarCss.css";

const PosCalendar: React.FC = () => {
  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin]}
        locale={"ko"}
        headerToolbar={{
          left: "",
          center: "title",
          right: "prevYear,prev,today,next,nextYear",
        }}
        events={[
          { id: "1", title: "event 1", start: "2024-06-04", end: "2024-06-16" },
          { id: "2", title: "event 2", start: "2024-06-12", end: "2024-06-22" },
        ]}
        eventClick={(info) => {
          setIsModalShow(true);
        }}
      />
      {isModalShow ? <Modal setIsShow={setIsModalShow} /> : null}
    </>
  );
};

export default PosCalendar;
