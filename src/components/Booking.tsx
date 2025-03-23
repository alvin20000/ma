import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const services = [
  'Decoration',
  'Catering',
  'Chair Rental',
  'Lighting',
  'Other'
];

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `New Booking Request\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nDescription: ${formData.description}`;
    const whatsappUrl = `https://wa.me/256763721005?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-[#03168e] mb-4">Book Our Services</h2>
          <p className="text-lg text-gray-600">
            Fill out the form below and we'll get back to you shortly
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#f95006] focus:border-[#f95006]"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#f95006] focus:border-[#f95006]"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
              Service Required
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#f95006] focus:border-[#f95006]"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Event Details
            </label>
            <textarea
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#f95006] focus:border-[#f95006]"
              placeholder="Please describe your event and requirements..."
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#f95006] text-white font-semibold py-3 rounded-lg hover:bg-[#03168e] transition-colors"
          >
            Send to WhatsApp
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Booking;