import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../App.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, 'Username must be at least 3 characters')
        .required('Username is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit: (values) => {
      console.log('Signup Submitted:', values);
    },
  });

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            {...formik.getFieldProps('username')}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="error">{formik.errors.username}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <div className="input-with-icon">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              {...formik.getFieldProps('password')}
            />
            <span onClick={togglePasswordVisibility} className="icon">
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="input-with-icon">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              {...formik.getFieldProps('confirmPassword')}
            />
            <span onClick={toggleConfirmPasswordVisibility} className="icon">
              {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="error">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
