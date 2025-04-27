import { useState } from 'react'

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const existing = JSON.parse(localStorage.getItem('appointments')) || []
    const updated = [...existing, formData]
    localStorage.setItem('appointments', JSON.stringify(updated))
    alert(`Booked appointment for ${formData.name}`)
    setFormData({ name: '', email: '', date: '', time: '' })
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-8">
      <form onSubmit={handleSubmit} className="p-8">
        <h2 className="text-2xl font-bold text-prifeBlue mb-6">Book Appointment</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Other form fields (email, date, time) similarly */}

        <button type="submit" className="w-full bg-prifeBlue text-white py-2 px-4 rounded-md">
          Book Appointment
        </button>
      </form>
    </div>
  )
}