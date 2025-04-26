import React from "react";

let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

function saveAppointments() {
  localStorage.setItem("appointments", JSON.stringify(appointments));
}

export default function Appointment() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    appointments.push(formData);
    saveAppointments();
    alert(`Appointment booked for ${formData.name} on ${formData.date} at ${formData.time}`);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-8">
      <form onSubmit={handleSubmit} className="p-8">
        <h2 className="text-2xl font-bold text-prifeBlue mb-6">Book an Appointment</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prifeBlue focus:border-transparent"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prifeBlue focus:border-transparent"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prifeBlue focus:border-transparent"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
          <input
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prifeBlue focus:border-transparent"
            required
          />
        </div>
        <button type="submit" className="w-full bg-prifeBlue text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
          Book Appointment
        </button>
      </form>
    </div>
  );
}