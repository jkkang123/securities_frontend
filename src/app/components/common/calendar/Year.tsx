import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { format, addMonths, startOfYear } from "date-fns";

function CustomYearView() {
  const renderCustomYearView = (info: { dateProfile: any; view: any }) => {
    const yearStart = startOfYear(info.dateProfile.currentDate);
    const months = Array.from({ length: 12 }, (_, i) =>
      addMonths(yearStart, i)
    );

    return (
      <div className="fc-custom-year-view">
        {months.map((month, index) => (
          <div key={index} className="fc-month-container">
            <h3>{format(month, "MMMM yyyy")}</h3>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              initialDate={month}
              headerToolbar={false}
              editable={false}
              selectable={false}
              events={[
                {
                  title: "Event 1",
                  date: format(addMonths(month, 1), "yyyy-MM-dd"),
                },
                {
                  title: "Event 2",
                  date: format(addMonths(month, 2), "yyyy-MM-dd"),
                },
              ]}
            />
          </div>
        ))}
      </div>
    );
  };
}

export default CustomYearView;
