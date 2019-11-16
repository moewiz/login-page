import React, {useState} from 'react';
import {withRouter, Link} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

import {LoginFormWrapper, FormTitle, SubmitButton, FormGroup} from "./styled";
import AuthService from "../../services/Auth";
import Auth from "../../utils/auth";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter an email')
    .required('Enter an email'),
  password: yup
    .string()
    .required('Enter a password'),
});

const LoginForm = (props) => {
  const [loginError, setLoginError] = useState('');
  const onSubmitForm = async (values, actions) => {
    try {
      const { data } = await AuthService.login(values);
      if (data && data.auth && data.token) {
        Auth.setAccessToken(data.token);
        // redirect to home page
        props.history.push('/profile');
      }
      actions.setSubmitting(false);
    } catch (e) {
      setLoginError('Login failed');
      actions.setSubmitting(false);
    }
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
            {loginError && <div className="error">{loginError}</div>}
            <SubmitButton type="submit"
                          disabled={isSubmitting}>{isSubmitting ? 'Please wait...' : 'Login'}</SubmitButton>
          </Form>
        )}
      </Formik>
    </LoginFormWrapper>
  );
};

export default withRouter(LoginForm);
