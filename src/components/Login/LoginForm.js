import React from 'react';
import {Link} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

import {LoginFormWrapper, FormTitle, SubmitButton, FormGroup} from "./styled";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter an email')
    .required('Enter an email'),
  password: yup
    .string()
    .required('Enter a password'),
});

const LoginForm = () => {
  const onSubmitForm = (values, actions) => {
    console.log(values)
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <LoginFormWrapper>
      <FormTitle>Login</FormTitle>
      <p>Don't have an account yet? <Link to="/register">Sign Up</Link></p>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={onSubmitForm}
        validationSchema={validationSchema}
      >
        {({touched, errors, isSubmitting}) => (
          <Form>
            <FormGroup>
              <label htmlFor="email">Email</label>
              <Field id="email" type="email" name="email" placeholder="Enter your email address"
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
            <span className="forget-pwd">Forget Password</span>
            <SubmitButton type="submit"
                          disabled={isSubmitting}>{isSubmitting ? 'Please wait...' : 'Login'}</SubmitButton>
          </Form>
        )}
      </Formik>
    </LoginFormWrapper>
  );
};

export default LoginForm;
