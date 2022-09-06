import React from "react";
import Recipients from "./Recipients";
// import bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";

export default function RecipientTable() {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0 ">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                {/* make text color navy blue */}

                <h3 className="text-2xl font-bold text-cyan-700 text-center text-uppercase">
                  Recipients
                </h3>
              </div>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Tally
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Name and Email
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Country
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Phone Number
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Date Joined
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Edit
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Delete
                      </th>
                      <th className="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <Recipients />
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
