import axios from "axios";
import React, { useState } from "react";

export default function Contact() {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseData, setResponseData] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const apiResponse = await axios.post(
        "http://localhost:1433/contacts",
        contactFormData
      );
      setResponseData(apiResponse);
    } catch (error) {
      console.error("Error: " + error);
      setResponseData(error);
    }
    setContactFormData({ name: "", email: "", message: "" });
  }

  function handleChange(e) {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value,
    });
    setResponseData(null);
  }

  return (
    <div className="container-fluid p-2 m-2">
      <div className="offset-5 col-3 card">
        <h5 className="card-header bg-success text-white text-center">
          Contact Me
        </h5>
        <div className="card-body">
          <div className="col-12">
            <p className="text-info text-justify"></p>
          </div>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={contactFormData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:{" "}
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={contactFormData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:{" "}
              </label>
              <textarea
                className="form-control"
                rows="3"
                col="50"
                id="message"
                name="message"
                value={contactFormData.message}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="submit"
              className="offset-4 col-3 p-2 btn btn-success"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
