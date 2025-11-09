import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // validate fields
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await fetch(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log("Response from backend:", data);

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full sm:w-[80%]">
      <h2 className="text-xl sm:text-2xl halant-regular text-center">
        Join the Story
      </h2>
      <p className="instrument-sans text-sm sm:text-base text-center mb-10 sm:mb-15">
        Ready to bring your vision to life? Let’s talk.
      </p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 flex gap-1 flex-col items-center justify-center"
        >
          <div className="w-full">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full text-sm bg-white instrument-sans border-[#ebebeb] border p-2 rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div className="w-full">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full text-sm bg-white instrument-sans border-[#ebebeb] border p-2 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className="w-full">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full text-sm bg-white instrument-sans border-[#ebebeb] border p-2 rounded"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="w-full">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full text-sm bg-white instrument-sans border-[#ebebeb] border p-2 rounded"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`bg-primary cursor-pointer  instrument-sans text-white text-sm py-2 px-4 rounded-full ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      ) : (
        <div className="text-center mt-8 text-primary text-sm sm:text-base">
          <p>Thank you! Your message has been sent successfully.</p>
        </div>
      )}

      <div className="flex justify-center text-xs sm:text-base text-primary mt-8 sm:mt-15 items-center gap-4">
        <p>vernita@varnanfilms.co.in</p>
        <p className="h-7 w-0.5 bg-primary"></p>
        <p>+91 98736 84567</p>
      </div>
    </div>
  );
}

export default ContactForm;