import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateRecipient() {
  const navigate = useNavigate();
  const [recipient, setRecipient] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    countryOfResidence: "",
    cityOrTown: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setRecipient((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5001/api/v1/recipients/add", {
        firstName: recipient.firstName,
        middleName: recipient.middleName,
        lastName: recipient.lastName,
        email: recipient.email,
        phoneNumber: recipient.phoneNumber,
        countryOfResidence: recipient.countryOfOrigin,
        cityOrTown: recipient.cityOrTown,
        sender: localStorage.getItem("userId"),
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recipient);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => console.log("Recipient created"))
      .then(() => navigate("/recipients"));
  };

  return (
    <>
      <div className="container py-4">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h3 className="text-2xl font-bold text-cyan-700 text-center text-uppercase">
                    Recipient Information
                  </h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          First name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          required
                          onChange={handleChange}
                          value={recipient.firstName}
                          name="firstName"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Middle name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          onChange={handleChange}
                          value={recipient.middleName}
                          name="middleName"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Last name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          required
                          onChange={handleChange}
                          value={recipient.lastName}
                          name="lastName"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Phone Number
                        </label>
                        <input
                          className="form-control"
                          type="phone"
                          required
                          onChange={handleChange}
                          value={recipient.phoneNumber}
                          name="phoneNumber"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Email address
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          onChange={handleChange}
                          value={recipient.email}
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Country
                        </label>
                        <select
                          onChange={ handleChange}
                          className="form-control"
                          name="countryOfOrigin"
                          value={recipient.countryOfResidence}
                          required
                        >
                          <option value="Select">Select</option>
                          <option value="Zimbabwe">Zimbabwe</option>
                          <option value="Kenya">Kenya</option>
                          <option value="Australia">Australia</option>
                          <option value="United Kingdom">United Kingdom</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          City or Town
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          onChange={handleChange}
                          value={recipient.cityOrTown}
                          name="cityOrTown"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary btn-md ms-auto container mt-6"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
