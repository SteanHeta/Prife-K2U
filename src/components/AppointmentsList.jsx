import React from "react";

export default function AppointmentsList() {
  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  const cancelAppointment = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    window.location.reload();
  };

  return (
    <div className="max-w-4xl mx-auto my-8">
      <h1 className="text-3xl font-bold text-prifeBlue mb-8">Your Appointments</h1>
      {appointments.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          No appointments booked yet.
        </div>
      ) : (
        <div>
          {appointments.map((appointment, index) => (
            <div key={index} className="border-b border-gray-200 py-4 last:border-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-prifeBlue">{appointment.name}</h3>
                  <p className="text-gray-600">{appointment.date} at {appointment.time}</p>
                  <p className="text-gray-500 mt-1">{appointment.email}</p>
                </div>
                <button
                  onClick={() => cancelAppointment(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}