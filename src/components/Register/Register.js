import React from 'react';
import {Link} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";

import {RegisterWrapper} from "./styled";
import {FormGroup, FormTitle, SubmitButton} from "../Login/styled";
import CustomSelect from "../Inputs/CustomSelect";

const genderOptions = [
  {value: 0, label: "Male"},
  {value: 1, label: "Female"},
];

const validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Enter a full name'),
  email: yup
    .string()
    .email('Enter an email')
    .required('Enter an email'),
  password: yup
    .string()
    .required('Enter a password'),
  gender: yup
    .string()
    .required('Select a gender'),
  age: yup
    .number()
    .min(18, 'Enter an age between 18 and 60')
    .max(60, 'Enter an age between 18 and 60')
    .required('Enter an age'),
});

const Register = () => {
  const onSubmitForm = (values, actions) => {
    console.log(values)
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <RegisterWrapper>
      <FormTitle>Register</FormTitle>
      <p>Already have an account? <Link to="/login">LogIn</Link></p>
      <Formik
        initialValues={{fullName: '', email: '', password: '', gender: '', age: ''}}
        onSubmit={onSubmitForm}
        validationSchema={validationSchema}
      >
        {({touched, errors, isSubmitting}) => (
          <Form>
            <FormGroup>
              <label htmlFor="fullName">Full Name</label>
              <Field id="fullName" type="text" name="fullName" placeholder="First and last name"
                     className={`form-control ${
                       touched.fullName && errors.fullName ? "is-invalid" : ""
                       }`}/>
              <ErrorMessage component="div" name="fullName" className="error"/>
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email address</label>
              <Field id="email" type="email" name="email" placeholder="Email address"
                     className={`form-control ${
                       touched.email && errors.email ? "is-invalid" : ""
                       }`}/>
              <ErrorMessage component="div" name="email" className="error"/>
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">Password</label>
              <Field id="password" type="password" name="password" placeholder="Enter your password"
                     className={`form-control ${
                       touched.password && errors.password ? "is-invalid" : ""
                       }`}/>
              <ErrorMessage component="div" name="password" className="error"/>
            </FormGroup>
            <FormGroup>
              <label htmlFor="gender">Gender</label>
              <Field name="gender" component={CustomSelect} placeholder="Select gender" options={genderOptions}/>
              <ErrorMessage component="div" name="gender" className="error"/>
            </FormGroup>
            <FormGroup>
              <label htmlFor="age">Age</label>
              <Field id="age" type="number" name="age" placeholder="Age in number"
                     className={`form-control ${
                       touched.age && errors.age ? "is-invalid" : ""
                       }`}/>
              <ErrorMessage component="div" name="age" className="error"/>
            </FormGroup>

            <SubmitButton type="submit"
                          disabled={isSubmitting}>{isSubmitting ? 'Please wait...' : 'Register'}</SubmitButton>
          </Form>
        )}
      </Formik>
    </RegisterWrapper>
  );
};

export default Register;
