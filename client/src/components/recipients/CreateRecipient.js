import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateRecipient() {
  const [recipient, setRecipient] = useState({});
  const navigate = useNavigate();
  const [senders, setSenders] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setRecipient({
      ...recipient,
      [e.target.name]: e.target.value,
    });
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5001/api/v1/recipients/add", {
        recipient: {
          firstName: recipient.firstName,
          lastName: recipient.lastName,
          email: recipient.email,
          phoneNumber: recipient.phoneNumber,
          countryOfOrigin: recipient.countryOfOrigin,
          cityOrTown: recipient.cityOrTown,
          token: localStorage.getItem("userId"),
          sender: recipient.sender,
        },
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => console.log("Recipient created"))
      .then(() => navigate("recipients"));
  };

  useEffect(() => {
    const setSender = async () => {
      const res = await axios
        .get("http://localhost:5001/api/v1/customers/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userId")}`,
          },
          body: JSON.stringify(),
        })
        .catch((err) => console.log(err));
      setSenders(res.data);
      const data = await res.data;
      console.log(data);
      return data;
    };
    setSender();
  }, []);

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
                          onChange={(e) => handleChange(e)}
                          className="form-control"
                          name="countryOfOrigin"
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
                          name="cityOrTown"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Sender
                        </label>
                        <select
                          onChange={(e) => handleChange(e)}
                          className="form-control"
                          name="sender"
                          required
                        >
                          {Array.isArray(senders)
                            ? senders.map((sender) => (
                                <option key={sender._id} value={sender._id}>
                                  {sender.firstName} {sender.lastName}
                                </option>
                              ))
                            : null}
                        </select>
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
