import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  name: '',
  email: '',
  channel: ''
}

const onSubmit = values => {
  console.log('form values after submit:', values)
}
const validate = (values) => {
    //values.name values.email values.channel
    //errors.name errors.email errors.channel
    //errors.name='this field is required'
    let errors = {};
  
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "invalid email format";
    }
    if (!values.channel) {
      errors.channel = "Required";
    }
    return errors;
  };

const validationSchema = Yup.object({
  name: Yup.string().required('required'),
  email: Yup.string().email('invalid email format').required('required'),
  channel: Yup.string().required('required')
})

function OldYoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    //validate
  })
 // console.log('form values',formik.values)
  console.log('visited fields: ', formik.touched)

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <label htmlFor="name">Name</label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className='error'>{formik.errors.name}</div>
          ) : null}
        </div>

        <div className='form-control'>
          <label htmlFor="email">Email</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='error'>{formik.errors.email}</div>
          ) : null}
        </div>

        <div className='form-control'>
          <label htmlFor="Channel">Channel</label>
          <input
            type='text'
            id='channel'
            name='channel'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className='error'>{formik.errors.channel}</div>
          ) : null}
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default OldYoutubeForm

