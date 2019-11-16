import React from 'react';
import {Link} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

import {LoginFormWrapper, FormTitle} from "./styled";

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
      <img src="/img/logo@2x.jpg" alt="logo" width={200}/>
      <div>
        <FormTitle>Login</FormTitle>
        <p>Don't have an account yet? <Link to="/register">Sign Up</Link></p>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={onSubmitForm}
          validationSchema={validationSchema}
        >
          {({touched, errors, isSubmitting}) => (
            <Form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" placehodler="Enter your email address" className={`form-control ${
                  touched.email && errors.email ? "is-invalid" : ""
                  }`}/>
                <ErrorMessage component="div" name="email" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" placehodler="Enter your password" className={`form-control ${
                  touched.password && errors.password ? "is-invalid" : ""
                  }`}/>
                <ErrorMessage component="div" name="password" className="error" />
              </div>
              <p className="forget-pwd">Forget Password</p>
              <button type="submit">Login</button>
            </Form>
          )}
        </Formik>
      </div>
    </LoginFormWrapper>
  );
};

export default LoginForm;
