import React, {useState} from 'react';
import {withRouter, Link} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";

import {RegisterWrapper} from "./styled";
import {FormGroup, FormTitle, SubmitButton} from "../Login/styled";
import CustomSelect from "../Inputs/CustomSelect";
import AuthService from "../../services/Auth";
import Auth from "../../utils/auth";

const genderOptions = [
  {value: 0, label: "Male"},
  {value: 1, label: "Female"},
];

const validationSchema = yup.object().shape({
  name: yup
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

const Register = (props) => {
  const [errorMsg, setErrorMsg] = useState('');
  const onSubmitForm = async (values, actions) => {
    try {
      const { data } = await AuthService.register(values);
      if (data && data.auth && data.token) {
        Auth.setAccessToken(data.token);
        // redirect to home page
        props.history.push('/profile');
      }
      actions.setSubmitting(false);
    } catch (e) {
      setErrorMsg('Login failed');
      actions.setSubmitting(false);
    }
  };

  return (
    <RegisterWrapper>
      <FormTitle>Register</FormTitle>
      <p>Already have an account? <Link to="/login">LogIn</Link></p>
      <Formik
        initialValues={{name: '', email: '', password: '', gender: '', age: ''}}
        onSubmit={onSubmitForm}
        validationSchema={validationSchema}
      >
        {({touched, errors, isSubmitting}) => (
          <Form>
            <FormGroup>
              <label htmlFor="name">Full Name</label>
              <Field id="name" type="text" name="name" placeholder="First and last name"
                     className={`form-control ${
                       touched.name && errors.name ? "is-invalid" : ""
                       }`}/>
              <ErrorMessage component="div" name="name" className="error"/>
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
            {errorMsg && <div className="error">{errorMsg}</div>}
            <SubmitButton type="submit"
                          disabled={isSubmitting}>{isSubmitting ? 'Please wait...' : 'Register'}</SubmitButton>
          </Form>
        )}
      </Formik>
    </RegisterWrapper>
  );
};

export default withRouter(Register);
