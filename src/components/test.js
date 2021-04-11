import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import UIControl from "../formik/components/UIControl";
import "../index.css";
import masterData from "./MasterData";
import { Link } from "react-router-dom";
import MessageBox from "../components/MessageBox";

const initialValues = {
  power: "",
  tint: "",
  qty: 0,
  rpower: "",
  rtint: "",
  rqty: 0,
};

const validationSchema = Yup.object({
  email: Yup.string().required("required"),
});

const bcOptions = masterData.bcOptions;
const buttons = masterData.MainMenu.find((t) => t.key === "SCL").JobCardSCL;

const onSubmit = (values) => {
  console.log("form data", values);
};

export default function SCLForm() {
  return (
    <div className="row top">
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <div>Soft Conventional Lenses</div>
            </li>
            {buttons.map((button) => (
              <li>
                <button type="button" id={button.key} className="primary block">
                  {button.value}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-2">
        <h1>Soft Conventional Lenses Order Form</h1>
        {/* <MessageBox>Work in progress...</MessageBox> */}

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <table id="customers" className="customers">
                <tr>
                  <th>
                    <button className="primary">Rx</button>
                  </th>
                  <th> Base Curve </th> {/* Column 2 */}
                  <th> Power </th> {/* Column 3 */}
                  <th> Diameter </th> {/* Column 4 */}
                  <th> Tint </th> {/* Column 5 */}
                  <th> Quantity </th> {/* Column 6 */}
                </tr>
                <tr>
                  <td>
                    <div>Left Eye</div>
                  </td>
                  <td>
                    <div>Median</div>
                  </td>
                  <td>
                    <UIControl
                      control="select"
                      type="baseBC"
                      name="power"
                      options={masterData.power}
                      onChange={formik.handleChange}
                      value={formik.values.power}
                    />
                  </td>
                  <td>
                    <div>14.00</div>
                  </td>
                  <td>
                    <UIControl
                      control="select"
                      type="baseTint"
                      name="tint"
                      options={masterData.tint}
                      onChange={formik.handleChange}
                      value={formik.values.tint}
                    />
                  </td>
                  <td>
                    <UIControl
                      control="input"
                      type="baseColor"
                      name="qty"
                      onChange={formik.handleChange}
                      value={formik.values.qty}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>Right Eye</div>
                  </td>
                  <td>
                    <div>Median</div>
                  </td>
                  <td>
                    <UIControl
                      control="select"
                      type="basePower"
                      name="rpower"
                      options={masterData.power}
                      onChange={formik.handleChange}
                      value={formik.values.rpower}
                    />
                  </td>
                  <td>
                    <div>14.00</div>
                  </td>
                  <td>
                    <UIControl
                      control="select"
                      type="baseTint"
                      name="rtint"
                      options={masterData.tint}
                      onChange={formik.handleChange}
                      value={formik.values.rtint}
                    />
                  </td>
                  <td>
                    <UIControl
                      control="input"
                      type="baseColor"
                      name="rqty"
                      onChange={formik.handleChange}
                      value={formik.values.rqty}
                    />
                  </td>
                </tr>
                <tr>
                  <td align="right" colSpan="6">
                    <button id="btnSave" className="primary" type="submit">
                      Generate Order
                    </button>
                  </td>
                </tr>
              </table>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
