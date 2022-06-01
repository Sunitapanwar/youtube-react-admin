import React, { useState, useEffect } from "react";
import "./Book1.css";
import { Visibility } from "@material-ui/icons";

function Book1() {
  const [data, setData] = useState();

  console.log(data, "now ok");

  useEffect(() => {
    const sunita = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/");
        if (!res.ok) {
          console.log(res);
          throw new Error("something wrong");
        }
        const response = await res.json();
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    sunita();
  }, []);

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
            {/* {
                data.map((data, index)=>{
                    return(
                        <tr key={index}>
                        <td className="textdd">
                  <input
                    type="checkbox"
                    className="checkCKid"
                    name="ck_id[]"
                    defaultValue={59}
                  />
                </td>
                            <td className="textdd">{data.title}</td>
                            <td className="textdd"></td>
                            <td className="textdd">{data.discription}</td>
                            <td className="textdd">{data.category}</td>
                            <td className="textdd">{data.price}</td>
                            <td className="textdd"></td>
                            <td className="textdd"></td>
                            <td className="textdd">{data.description}</td>
                            
                        </tr>
                    )
                })
            } */}
            </tbody>
            <tbody>
              <tr className="textbody">
                <td>
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
                <td className="textdd">
                  Subhashsoni <br /> 9828410020{" "}
                </td>
                <td className="textdd">
                  17 /May 22
                  <br />
                  09:00AM - 12:00PM{" "}
                </td>
                <td className="textdd">
                  <label class="labellabelsuccess">Electrician</label>
                  <br />
                  <label class="labellabelprimary">MCB and fuse</label>
                  <br />
                </td>
                <td className="textdd">₹ 269</td>
                <td className="textdd">
                  <a className="btnbtnprimary">
                    <i className="fafaeye">
                      <Visibility fontSize="small" />
                      Short View
                    </i>
                  </a>
                  <a className="btnbtndangerbtn" title="Edit">
                    <i className="fafaeye">
                      <Visibility fontSize="small" />
                      View
                    </i>
                  </a>
                </td>
                <td className="textdd">
             <label className="labellabelinfo">Pay at home</label><br />
             </td>
             <td className="textdd">
             <label className="labellabelsuccess"> Completed</label><br />
             </td>
             <td className="textdd">
              Mohammad Rizwan<br/>
            (9829990521)<br/>
             </td>
             <td className="textdd">
            
             </td>
             <td className="textdd">
            
             </td>
              </tr>
              <tr className="textbodylist">
                <td>
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
                <td className="textdd">
                  Subhashsoni <br /> 9828410020{" "}
                </td>
                <td className="textdd">
                  17 /May 22
                  <br />
                  09:00AM - 12:00PM{" "}
                </td>
                <td className="textdd">
                  <label class="labellabelsuccess">Electrician</label>
                  <br />
                  <label class="labellabelprimary">MCB and fuse</label>
                  <br />
                </td>
                <td className="textdd">₹ 269</td>
                <td className="textdd">
                  <a className="btnbtnprimary">
                    <i className="fafaeye">
                      <Visibility fontSize="small" />
                      Short View
                    </i>
                  </a>
                  <a className="btnbtndangerbtn" title="Edit">
                    <i className="fafaeye">
                      <Visibility fontSize="small" />
                      View
                    </i>
                  </a>
                </td>
                <td className="textdd">
             <label className="labellabelinfo">Pay at home</label><br />
             </td>
             <td className="textdd">
             <label className="labellabeldanger"> Booking Cancel</label><br />
             </td>
             <td className="textdd">
              Mohammad Rizwan<br/>
            (9829990521)<br/>
             </td>
             <td className="textdd">
            
             </td>
             <td className="textdd">
            
             </td>
              </tr>
              <tr className="textbody">
                <td>
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
                <td className="textdd">
                  Subhashsoni <br /> 9828410020{" "}
                </td>
                <td className="textdd">
                  17 /May 22
                  <br />
                  09:00AM - 12:00PM{" "}
                </td>
                <td className="textdd">
                  <label class="labellabelsuccess">Electrician</label>
                  <br />
                  <label class="labellabelprimary">MCB and fuse</label>
                  <br />
                </td>
                <td className="textdd">₹ 269</td>
                <td className="textdd">
                  <a className="btnbtnprimary">
                    <i className="fafaeye">
                      <Visibility fontSize="small" />
                      Short View
                    </i>
                  </a>
                  <a className="btnbtndangerbtn" title="Edit">
                    <i className="fafaeye">
                      <Visibility fontSize="small" />
                      View
                    </i>
                  </a>
                </td>
                <td className="textdd">
             <label className="labellabelinfo">Pay at home</label><br />
             </td>
             <td className="textdd">
             <label className="labellabelsuccess"> Completed</label><br />
             </td>
             <td className="textdd">
              Mohammad Rizwan<br/>
            (9829990521)<br/>
             </td>
             <td className="textdd">
            
             </td>
             <td className="textdd">
            
             </td>
              </tr>
              <tr className="textbody">
                <td>
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
                <td className="textdd">
                  Subhashsoni <br /> 9828410020{" "}
                </td>
                <td className="textdd">
                  17 /May 22
                  <br />
                  09:00AM - 12:00PM{" "}
                </td>
                <td className="textdd">
                  <label class="labellabelsuccess">Electrician</label>
                  <br />
                  <label class="labellabelprimary">MCB and fuse</label>
                  <br />
                </td>
                <td className="textdd">₹ 269</td>
                <td className="textdd">
                  <a className="btnbtnprimary">
                    <i className="fafaeye">
                      <Visibility fontSize="small" />
                      Short View
                    </i>
                  </a>
                  <a className="btnbtndangerbtn" title="Edit">
                    <i className="fafaeye">
                      <Visibility fontSize="small" />
                      View
                    </i>
                  </a>
                </td>
                <td className="textdd">
             <label className="labellabelinfo">Pay at home</label><br />
             </td>
             <td className="textdd">
             <label className="labellabelsuccess">Completed</label><br />
             </td>
             <td className="textdd">
              Mohammad Rizwan<br/>
            (9829990521)<br/>
             </td>
             <td className="textdd">
             </td>
             <td className="textdd">
             </td>
              </tr>
              <tr className="textbodylist">
                <td>
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
                <td className="textdd">
                  Subhashsoni <br /> 9828410020{" "}
                </td>
                <td className="textdd">
                  17 /May 22
                  <br />
                  09:00AM - 12:00PM{" "}
                </td>
                <td className="textdd">
                  <label class="labellabelsuccess">Electrician</label>
                  <br />
                  <label class="labellabelprimary">MCB and fuse</label>
                  <br />
                </td>
                <td className="textdd">₹ 269</td>
                <td className="textdd">
                  <a className="btnbtnprimary">
                    <i className="fafaeye">
                      <Visibility fontSize="small" />
                      Short View
                    </i>
                  </a>
                  <a className="btnbtndangerbtn" title="Edit">
                    <i className="fafaeye">
                      <Visibility fontSize="small" />
                      View
                    </i>
                  </a>
                </td>
                <td className="textdd">
             <label className="labellabelinfo">Pay at home</label><br />
             </td>
             <td className="textdd">
             <label className="labellabeldanger"> Booking Cancel</label><br />
             </td>
             <td className="textdd">
              Mohammad Rizwan<br/>
              (9829990521)<br/>
             </td>
             <td className="textdd">
             </td>
             <td className="textdd">
             </td>
              </tr>
              <tr className="textbody">
                <td>
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
                <td className="textdd">
                  Subhashsoni <br /> 9828410020{" "}
                </td>
                <td className="textdd">
                  17 /May 22
                  <br />
                  09:00AM - 12:00PM{" "}
                </td>
                <td className="textdd">
                  <label class="labellabelsuccess">Electrician</label>
                  <br />
                  <label class="labellabelprimary">MCB and fuse</label>
                  <br />
                </td>
                <td className="textdd">₹ 269</td>
                <td className="textdd">
                  <a className="btnbtnprimary">
                    <i className="fafaeye">
                      <Visibility fontSize="small" />
                      Short View
                    </i>
                  </a>
                  <a className="btnbtndangerbtn" title="Edit">
                    <i className="fafaeye">
                      <Visibility fontSize="small" />
                      View
                    </i>
                  </a>
                </td>
                <td className="textdd">
             <label className="labellabelinfo">Pay at home</label><br />
             </td>
             <td className="textdd">
             <label className="labellabelsuccess"> Completed</label><br />
             </td>
             <td className="textdd">
              Mohammad Rizwan<br/>
            (9829990521)<br/>
             </td>
             <td className="textdd">
             </td>
             <td className="textdd">
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
