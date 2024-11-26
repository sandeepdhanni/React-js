import React from 'react'
import { useFormik } from 'formik'

const initialValues={
  name:'',
  email:'',
  channel:''
}

const onSubmit=values => {
  console.log('form values after submit:',values);
}

const validate=values=>{
  //values.name values.email values.channel
  //errors.name errors.email errors.channel
  //errors.name='this field is required'
  let errors={}

  if(!values.name){
    errors.name='Required'
  }
  if(!values.email){
    errors.email='Required'
  }else if(!/){
    errors.email='invalid email format'
  }
  if(!values.channel){
    errors.channel='Required'
  }
  return errors; 
}


function YoutubeForm() {

  const formik=useFormik({
    initialValues,
    onSubmit,
    validate
  })
  // console.log('form values',formik.values)

  console.log('form values',formik.errors);
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
            {formik.errors.name ? <div>{formik.errors.name}</div>:null}

            <label htmlFor="email">Email</label>
            <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
            {formik.errors.email ? <div>{formik.errors.email}</div>:null}

            <label htmlFor="Channel">Channel</label>
            <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel} />
            {formik.errors.channel ? <div>{formik.errors.channel}</div>:null}


            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default YoutubeForm