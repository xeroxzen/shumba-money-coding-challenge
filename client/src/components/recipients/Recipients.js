import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function Recipients({ _id }) {
  const [recipients, setRecipients] = useState({});
  const [recipient, setRecipient] = useState({});
  const id = useParams().id;
  const [user, setUser] = useState();
  const URI = "http://localhost:5001/api/v1/recipients/";
  const navigate = useNavigate();

  const fetchRecipients = async () => {
    const res = await axios.get(`${URI}`).catch((err) => {
      console.log(err);
    });
    const data = await res.data;
    console.log(data);
    return data;
  };

  const fetchRecipientsBySender = async () => {
    const res = await axios.get(`${URI}sender/${id}`).catch((err) => {
      console.log(err);
    });
    const data = await res.data;
    console.log(data);
    return data;
  };

  fetchRecipientsBySender().then((data) => {
    setUser(data.user);
    console.log(data.user);
  });

  const deleteRequest = async (id) => {
    await axios.delete(`${URI}${id}`);
    setRecipients(recipients.filter((recipient) => recipient._id !== id));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteRequest().then((data) => {
      console.log(data);
      navigate("/recipients");
    });
  };

  useEffect(() => {
    deleteRequest().then((data) => setRecipient(data.recipient));
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .get(`${URI}update/${id}`, recipient)

      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          const recipient = recipients.find(
            (recipient) => recipient._id === id
          );
          navigate(`/recipients/${recipient.id}`);
        }
      });
  };

  useEffect(() => {
    fetchRecipients().then((data) => setRecipients(data.recipients));
  }, []);

  return (
    <>
      {Array.isArray(recipients)
        ? recipients.map((recipient, index) => (
            <tr key={recipient._id}>
              <td>
                <div className="d-flex px-2 py-1">
                  <div className="d-flex flex-column justify-content-center">
                    <p className="text-xs text-secondary mb-0">{index + 1}</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex px-2 py-1">
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="mb-0 text-sm">
                      {recipient.firstName} {recipient.lastName}
                    </h6>
                    <p className="text-xs text-secondary mb-0">
                      {recipient.email}
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-xs font-weight-bold mb-0">
                  {recipient.countryOfResidence}
                </p>
                <p className="text-xs text-secondary mb-0">
                  {recipient.cityOrTown}
                </p>
              </td>
              <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">
                  {recipient.phoneNumber}
                </span>
              </td>
              <td className="align-middle text-center">
                <p className="text-xs text-secondary mb-0">
                  {new Date(recipient.createdAt).toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </td>
              <td className="align-middle text-center">
                <button
                  className="btn btn-info btn-md ms-auto"
                  onClick={handleEdit}
                >
                  Edit
                </button>
              </td>
              <td className="align-middle text-center">
                <button
                  className="btn btn-danger btn-md ms-auto"
                  onClick={(id) => {
                    if (
                      window.confirm(
                        "Are you sure you wish to delete this recipient?"
                      )
                    )
                      handleDelete(id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        : null}
    </>
  );
}
