import React from 'react'
import { Formik, Form, Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments:'',
  address:''
}

const onSubmit = values => {
  console.log('form values after submit:', values)
}

const validationSchema = Yup.object({
  name: Yup.string().required('required'),
  email: Yup.string().email('invalid email format').required('required'),
  channel: Yup.string().required('required')
})

function YoutubeForm() {

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}>
      <Form>
        <div className='form-control'>
          <label htmlFor="name">Name</label>
          <Field
            type='text'
            id='name'
            name='name'
            placeholder='Enter your name'
          />
          <ErrorMessage name='name' component={TextError} />
        </div>

        <div className='form-control'>
          <label htmlFor="email">Email</label>
          <Field
            type='email'
            id='email'
            name='email'
            placeholder='Enter your EmailId'
          />
          <ErrorMessage name='email'>
            {
              (errormsg)=><div className='error'>{errormsg}</div>
            }
          </ErrorMessage>
        </div>

        <div className='form-control'>
          <label htmlFor="Channel">Channel</label>
          <Field
            type='text'
            id='channel'
            name='channel'
            placeholder='Enter your Channel name'
          />
          <ErrorMessage name='channel' />
        </div>

        <div className='form-control'>
          <label htmlFor="comments">Comments</label>
          <Field
            as='textarea'
            id='comments'
            name='comments'
            placeholder='Enter comments'
          />
        </div>

        <div className='form-control'>
          <label htmlFor="address">Address</label>
          <Field
            name='comments'
            placeholder='Enter Address'
          >
            {
              (props)=>{
                const {field,form,meta}=props;
                console.log('render props',props)
                return <div><input type='text' id='address' {... field} />
                {meta.touched && meta.error ? <div>{meta.error}</div>: null}</div>
              }
            }
          </Field>
        </div>

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}

export default YoutubeForm
