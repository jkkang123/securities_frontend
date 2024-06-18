"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const MyCalendar: React.FC = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      locale={"ko"}
      headerToolbar={{
        left: "",
        center: "title",
        right: "prevYear,prev,today,next,nextYear",
      }}
      events={[
        { title: "event 1", start: "2024-06-04", end: "2024-06-16" },
        { title: "event 2", start: "2024-06-12", end: "2024-06-22" },
      ]}
    />
  );
};

export default MyCalendar;
