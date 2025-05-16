// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import listPlugin from "@fullcalendar/list";
// console.log(timeGridPlugin);
// export default function CalendarCustom() {
//   //   let calendarEl = document.getElementById("calendar");
//   //   let calendar = new Calendar(calendarEl, {
//   //     plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
//   //     initialView: "dayGridMonth",
//   //     headerToolbar: {
//   //       left: "prev,next today",
//   //       center: "title",
//   //       right: "dayGridMonth,timeGridWeek,listWeek",
//   //     },
//   //   });
//   //   calendar.render();
//   return (
//     <FullCalendar
//       plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
//       initialView="dayGridMonth"
//       headerToolbar={{
//         left: "prev,next today",
//         center: "title",
//         right: "dayGridMonth,timeGridWeek,listWeek",
//       }}
//     />
//   );
// }



import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "./Modal"; // Modal tự tạo bên dưới

export default function CalendarCustom() {
  const [events, setEvents] = useState([]);
  const [modalData, setModalData] = useState(null); // thời gian chọn
  const [showModal, setShowModal] = useState(false);

  const handleDateSelect = (selectInfo) => {
    setModalData({
      start: selectInfo.startStr,
      end: selectInfo.endStr,
    });
    setShowModal(true);
  };

  const handleAddAppointment = (formData) => {
    const newEvent = {
      id: String(Date.now()),
      title: `${formData.name} - ${formData.reason}`,
      start: modalData.start,
      end: modalData.end,
      extendedProps: {
        phone: formData.phone,
      },
    };

    setEvents((prev) => [...prev, newEvent]);
    setShowModal(false);
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,listWeek",
        }}
        editable={true}
        selectable={true}
        select={handleDateSelect}
        events={events}
      />

      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          onSubmit={handleAddAppointment}
        />
      )}
    </div>
  );
}