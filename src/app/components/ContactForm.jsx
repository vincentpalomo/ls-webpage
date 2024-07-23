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

    const url =
      'https://script.google.com/macros/s/AKfycbyo6AT7zZkQhcPe4UH32D8i5ZyEew_IKvaGdtM05RyeLJz4sZo1ShvLk1ggAsE5FbVeFQ/exec';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
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

    if (submitted) {
      return <div>Thank you for your message! We will get back to you soon.</div>;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 w-full sm:w-[400px] lowercase 2xl:w-[600px]">
      <div className="mb-4 sm:mb-1">
        <label htmlFor="name" className="block mb-1 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border-2 border-black rounded-xl"
        />
      </div>
      <div className="mb-4 sm:mb-1">
        <label htmlFor="email" className="block mb-1 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border-2 border-black rounded-xl"
        />
      </div>
      <div className="mb-4 sm:mb-1">
        <label htmlFor="phone" className="block mb-1 font-medium">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border-2 border-black rounded-xl"
        />
      </div>
      <div className="mb-4 sm:mb-1">
        <label htmlFor="message" className="block mb-1 font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border-2 border-black rounded-xl"
          rows={4}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full sm:w-[100px] px-4 py-2 font-semibold text-white uppercase bg-greenpl rounded-xl hover:bg-green-800 sm:mt-2"
      >
        Submit
      </button>
    </form>
  );
}
