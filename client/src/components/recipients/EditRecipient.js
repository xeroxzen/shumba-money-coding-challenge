import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditRecipient(recipientId) {
  const [recipient, setRecipient] = useState({});
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const URI = "http://localhost:5001/api/v1/recipients/";
  const id = useParams().id;

  const handleChange = (e) => {
    e.preventDefault();
    setRecipient({
      ...recipient,
      [e.target.name]: e.target.value,
    });
  };

  // Update recipient details
  const fetchRecipient = async () => {
    const res = await axios.get(`${URI}update/${recipientId}}`).catch((err) => {
      console.log(err);
    });
    const data = await res.data;
    console.log(data);
    return data;
  };

  useEffect(() => {
    fetchRecipient().then((data) => {
      setRecipient(data.recipient);
      console.log(data.recipient);
      setInputs({
        ...data,
      });
    });
  }, [id]);

  //   const sendUpdateRequest = async () => {
  //     const res = await axios
  //       .put(`${URI}update/${id}`, {
  //         recipient: {
  //           firstName: recipient.firstName,
  //           middleName: recipient.middleName,
  //           lastName: recipient.lastName,
  //           email: recipient.email,
  //           phoneNumber: recipient.phoneNumber,
  //           countryOfResidence: recipient.countryOfOrigin,
  //         },
  //       })
  //       .catch((err) => console.log(err));
  //     const data = await res.data;
  //     console.log(data);
  //     return data;
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const res = axios.put(`${URI}update/${id}`, {
        recipient: {
          ...recipient,
        },
      });
      const data = res.data;
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container py-4">
        {Array.isArray(inputs)
          ? inputs.map((input) => (
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
                                value={input.firstName}
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
                                value={input.middleName}
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
                                value={input.lastName}
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
                                value={input.phoneNumber}
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
                                value={input.email}
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
                                name="countryOfResidence"
                                value={input.countryOfResidence}
                                required
                              >
                                <option value="Select">Select</option>
                                <option value="Zimbabwe">Zimbabwe</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Australia">Australia</option>
                                <option value="United Kingdom">
                                  United Kingdom
                                </option>
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
                                value={input.cityOrTown}
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
            ))
          : null}
      </div>
    </>
  );
}
