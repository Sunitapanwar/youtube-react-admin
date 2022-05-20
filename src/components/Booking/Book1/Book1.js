import React from "react";
import './Book1.css'

function Book1() {
  return (
    <div className="tableform">
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
        <div className="colflexmt">
          <div className="colflexmr">
            <div style={{ background: "#ffa1a1" }} className="tablelabel" />
            <span>UnRegistered User</span>
          </div>
          <div className="colflexmr">
            <div style={{ background: "#ffb9b9" }} className="tablelabel" />
            <span>Booking Cancel</span>
          </div>
          <div className="colflexmr">
            <div style={{ background: "#f39c12" }} className="tablelabel" />
            <span>Cancelled asn refunded</span>
          </div>
        </div>
        <div className="tableresponsive">
        <table className="tabletablebordered ">
          <thead className="tablety">
            <tr>
              <th> <input type="checkbox" style={{margin:4}} /></th>
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
            <tr className="textbody">
              <td >
                <input
                  type="checkbox"
                  className="checkCKid"
                  name="ck_id[]"
                  defaultValue={59}
                />
              </td>
              <td className="textdd">
                59 / OD157715319
                <br />
                01/05/2022
                <br />
                <label className="labellabelprimary">Beawar</label>
              </td>
              <td className="textdd">Subhashsoni <br/> 9828410020 </td>
              <td className="textdd">17 /May 22<br/>09:00AM - 12:00PM  </td>
              <td className="textdd">
           <label class="labellabelsuccess">Electrician</label><br/>
            <label class="labellabelprimary">MCB and fuse</label><br/>
           </td>
                                    
            </tr>
          </tbody>
        </table>
        </div>
      </form>
    </div>
  );
}

export default Book1;
