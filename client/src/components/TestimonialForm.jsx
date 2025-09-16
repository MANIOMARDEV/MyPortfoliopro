import { useState } from "react";

const TestimonialForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    mentions: "",
    review: "",
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("mentions", formData.mentions);
    data.append("review", formData.review);
    if (image) data.append("img", image);

    try {
      const res = await fetch("http://localhost:5000/api/testimonials", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      onSubmit(result); // Add the new testimonial to the UI
    } catch (err) {
      console.error("Error submitting testimonial:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-wrapper">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        onChange={handleChange}
      />
      <input
        type="text"
        name="mentions"
        placeholder="Mention (e.g., Role/Company)"
        required
        onChange={handleChange}
      />
      <textarea
        name="review"
        placeholder="Your Feedback"
        required
        onChange={handleChange}
      />
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleImageChange}
      />
      <button type="submit">Submit Testimonial</button>
    </form>
  );
};

export default TestimonialForm;
