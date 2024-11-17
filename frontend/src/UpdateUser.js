import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
function UpdateUser() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState();
  const [Company, setCompany] = useState("");
  const [JobTitle, setJobTitle] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/contacts/${id}`)
      .then((res) => {
        setFirstName(res.data.FirstName);
        setLastName(res.data.LastName);
        setEmail(res.data.Email);
        setPhoneNumber(res.data.PhoneNumber);
        setCompany(res.data.Company);
        setJobTitle(res.data.JobTitle);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [id]);
  function Update(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/contacts/${id}`, {
        FirstName,
        LastName,
        Email,
        PhoneNumber,
        Company,
        JobTitle,
      })
      .then((res) => {
        alert("Contact updated successfully!");
        navigate("/");
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          alert(err.response.data.error); // Display the error from the backend
        } else {
          alert("An error occurred while updating the contact.");
        }
      });
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Update User</h1>
      <form className="p-4 border rounded shadow bg-light" onSubmit={Update}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            name="FirstName"
            placeholder="Enter first name"
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="LastName"
            placeholder="Enter last name"
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="Email"
            placeholder="Enter email address"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            name="PhoneNumber"
            placeholder="Enter phone number"
            value={PhoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Company</label>
          <input
            type="text"
            className="form-control"
            name="Company"
            placeholder="Enter company name"
            value={Company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Job Title</label>
          <input
            type="text"
            className="form-control"
            name="JobTitle"
            placeholder="Enter job title"
            value={JobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary me-2">
            Save Changes
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;
