import React, { useState, useEffect } from "react";
import Toggleform from "../ToggleForm/ToggleForm";
import '../Allbooking/Allbooking.css';
import { Visibility } from "@material-ui/icons";

function newbooking() {
  return (
      <div className="tabletable">
    <div className="tableform">
    <Toggleform/>
      <form>
        <input
          name="_token"
          type="hidden"
          defaultValue="AdL5GMWEP5kRXzEI5juGicCesU8EmHPhbU6yxJD4"
        />
        <input
          name="Active"
          type="button"
          className="btninfobtnflat"
          defaultValue="active"
          style={{ margin: 10 }}
        />
        <input
          type="button"
          className="btnwarningbtnflat"
          defaultValue="inactive"
          name="InActive"
          style={{ margin: 10 }}
        />
        <input
          type="button"
          className="btndangerbtnflat"
          defaultValue="delete"
          name="Delete"
          style={{ margin: 10 }}
        />
        <input
          type="button"
          className="btnwarningbtnflat"
          defaultValue="Refund & Cancel"
          name="refundCancel"
          style={{ margin: 10 }}
        />
        <input
          type="button"
          className="btninfobtnflat"
          defaultValue="Complete Booking"
          name="completestatus"
          style={{ margin: 10 }}
        />
        <input
          type="button"
          className="btndangerbtnflat"
          defaultValue="Role Back"
          name="rolBack"
          style={{ margin: 10 }}
        />
        <input type="hidden" name="tagName" defaultValue="tablebook" />
        <div className="tableresponsive">
          <table className="tabletablebordered ">
            <thead className="tablety">
              <tr>
                <th>
                  {" "}
                  <input type="checkbox" style={{ margin: 4 }} />
                </th>
                <th>Booking ID</th>
                <th>Name</th>
                <th>Appointment Date</th>
                <th>Services</th>
                <th>Amount</th>
                <th>Action</th>
                <th>Payment Status</th>
                <th>Current Status</th>
                <th>Provider</th>
                <th>Provider Status</th>
                <th>Confirm</th>
              </tr>
            </thead>
            <tbody>
            <tr class="odd">
            <td valign="top" colspan="5" className="datatable">No data available in table
            </td>
            </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
    </div>
  );
}

export default newbooking;
