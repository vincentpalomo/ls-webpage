'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 w-full sm:w-[400px] lowercase 2xl:w-[600px] mx-0 pr-5 sm:pr-0 ">
      <div className="mb-4 sm:mb-1">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-1 border-b-2 border-off-white bg-transparent"
        />
      </div>
      <div className="mb-4 sm:mb-1">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-1 border-b-2 border-off-white bg-transparent"
        />
      </div>
      <div className="mb-4 sm:mb-1">
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-3 py-1 border-b-2 border-off-white bg-transparent"
        />
      </div>
      <div className="mb-4 sm:mb-1">
        <textarea
          id="message"
          name="message"
          placeholder="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-3 py-1 border-b-2 border-off-white bg-transparent"
          rows={2}
        ></textarea>
      </div>
      {submitted ? (
        <div className="bg-purple-400 w-[200px] h-[50px] rounded-[20px] flex items-center justify-center text-off-black font-semibold">
          Thank you! 🙂
        </div>
      ) : (
        <button
          type="submit"
          className="bg-off-white text-off-black w-[200px] h-[50px] rounded-[20px] hover:bg-purple-400 mt-2"
        >
          send
        </button>
      )}
    </form>
  );
}
