import React from "react";
// import { Accordion } from "react-bootstrap";
import { useState } from "react";
import "./toggle.css";
// import "bootstrap/dist/css/bootstrap.min.css";


const kk = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/");
    if (!res.ok) {
      throw new Error("something wrong");
    }
    const response = res.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};


function Toggleform() {
  const [show, setShow] = useState(false);

  function onClick() {
    setShow(!show);
  }

  return (
    <div className="navbarContainer">
      <div className="navbarheading" onClick={onClick}>
        <span className="navheadingtext">Filter</span>
      </div>
      {show && (
        <div className="rowContainer">
          <div className="rowContainerform">
            <div className="formContainer">
              <form>
                <div className="colummContainer">
                  <div className="colContainer">
                    <div className="formgroup">
                      <label className="formLabel">
                        Full Name &amp;&amp; booking Id
                      </label>
                      <input
                        type=" text"
                        className="formcontrol"
                        name="name"
                        placeholder="Full Name && booking Id"
                      />
                    </div>
                  </div>
                  <div className="colContainer">
                    <div className="formgroup">
                      <label className="formLabel">
                        Email/Mobile No
                      </label>
                      <input
                        type=" text"
                        className="formcontrol"
                        name="name"
                        placeholder="Enter Email/Mobile No"
                      />
                    </div>
                  </div>
                </div>
                <div className="colummContainer">
                  <div className="colContainer">
                    <div className="formgroup">
                      <label className="formLabelrow">Select Date Range</label>
                      <div className="rowcontainerrow">
                        <div className="colformrow">
                          <input
                            type="text"
                            className="formcontrolrow"
                            name="start_date"
                            placeholder="Enter start date"
                          />
                        </div>
                        <div className="colformrow">
                          <input
                            type="text"
                            className="formcontrolrowrow"
                            name="end_date"
                            placeholder="Enter end date"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="colContainer">
                    <div className="formgroup">
                      <div className="rowcontainerrow">
                        <div className="colformrow">
                          <label className="formLabelrowrow">
                            Select Date Range
                          </label>
                          <select className="formcontrolrowrowrow " name="type">
                            <option value selected="selected">
                              ---Select Status---
                            </option>
                            <option value="newbookings">New Booking</option>
                            <option value="confirm">Confirm</option>
                            <option value="inactive">InActive</option>
                            <option value="review">Review Booking</option>
                          </select>
                        </div>

                        <div className="rowcontainerrow">
                          <div className="colformrow">
                            <label className="formLabelrowrow">
                              Total Entry per page
                            </label>
                            <input
                              type="number"
                              min={0}
                              name="val"
                              className="formcontrolrowrowrow"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="colcontentcc">
                    <button type="submit" className="btnbtnwarning">
                      <i className="fafasearch" aria-hidden="true" />
                      &nbsp;Search
                    </button>
                    <span href="https://nearone.co.in/oc-admin/bookings">
                      <input
                       className="btnbtnsecondary"
                        type="button"
                        defaultValue="Reset"
                      />
                    </span>
                    <button
                      type="submit"
                      name="billing"
                      value="billing"
                      className="btnbtndanger"
                    >
                      <i className="fafiletext" aria-hidden="true" />
                      &nbsp;Get pdf
                    </button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Toggleform;
