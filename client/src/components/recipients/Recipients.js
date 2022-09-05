import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Recipients({ id }) {
  const [recipients, setRecipients] = useState({});
  const sendRequests = async () => {
    const res = await axios
      .get("http://localhost:5001/api/v1/recipients/")
      .catch((err) => {
        console.log(err);
      });
    const data = await res.data;
    // console.log(JSON.stringify(data, null, 2));
    return data;
  };

  const deleteRecipient = async () => {
    const res = await axios
      .delete(`http://localhost:5001/api/v1/recipients/${id}`)
      .catch((err) => {
        console.log(err);
      });
    const data = await res.data;
    console.log(JSON.stringify(data, null, 2));
    return data;
  };

  const handleDelete = () => {
    try {
      deleteRecipient().then(() =>
        console.log("Recipient deleted successfully")
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    sendRequests().then((data) => setRecipients(data.recipients));
  }, []);

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">
                  Recipients table
                </h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Author
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Function
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Status
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Employed
                      </th>
                      <th className="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img
                              src="../assets/img/team-3.jpg"
                              className="avatar avatar-sm me-3 border-radius-lg"
                              alt="user2"
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Alexa Liras</h6>
                            <p className="text-xs text-secondary mb-0">
                              alexa@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">
                          Programator
                        </p>
                        <p className="text-xs text-secondary mb-0">Developer</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm bg-gradient-secondary">
                          Offline
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">
                          11/01/19
                        </span>
                      </td>
                      <td className="align-middle">
                        <a
                          href="/"
                          className="text-secondary font-weight-bold text-xs"
                          data-toggle="tooltip"
                          data-original-title="Edit user"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
