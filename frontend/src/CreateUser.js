import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Company, setCompany] = useState("");
  const [JobTitle, setJobTitle] = useState("");
  const navigate = useNavigate();

  function Submit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8000/contacts", {
        FirstName,
        LastName,
        Email,
        PhoneNumber,
        Company,
        JobTitle,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Create User</h2>
      <form onSubmit={Submit}>
        <h4 className="text-secondary mb-3">Personal Information</h4>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter first name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter last name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <h4 className="text-secondary mb-3">Contact Information</h4>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter your phone number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <h4 className="text-secondary mb-3">Job Information</h4>
        <div className="mb-3">
          <label className="form-label">Company</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter company name"
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Job Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter job title"
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-end mt-4">
          <button
            type="reset"
            className="btn btn-secondary me-3"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
