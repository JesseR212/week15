import React, { useState } from "react";

const ContactForm: React.FC = ({ addTodo, todoId }) => {
  const [formData, setFormData] = useState({ name: "", notes: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData, todoId);
    addTodo(formData.name, todoId, formData.notes);
    // Handle form submission logic here (e.g., send data to an API or backend)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-control"
        />

        <label htmlFor="notes">Notes:</label>
        <div>
          <input
            type="textArea"
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
      </div>
      <div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
