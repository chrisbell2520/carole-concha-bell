import {useState} from 'react'
import { useForm } from 'react-hook-form'

export default function Enquiry () {
  const [formData, setFormData] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  console.log(watch("lean"))
  const onSubmit = async data => {
    setIsSubmitting(true)
    let response
    console.log(data)
    setFormData(data)
    try {
      response = await fetch('/api/createEnquiry', {
        method: 'POST',
        body: JSON.stringify(data),
        type: 'application/json'
      })
      setIsSubmitting(false)
      setHasSubmitted(true)
    } catch (err) {
      setFormData(err)
    }
    // fetch('/api/mail', {
    //   method: 'post',
    //   body: JSON.stringify({formData})
    // })
  }
 

 if ( isSubmitting) {
    return <h3>Submitting enquiry</h3>
  }
  if (hasSubmitted) {
    console.log("Yeah Baby", formData.name)
    return (
    <div className='grid auto-rows-auto gap-4'>
      <h3 className='font-bold'>Thanks for your enquiry!</h3>
      <ul>
        <li>
          Name: {formData.name} <br />
          Phone: {formData.phone} <br /> 
          Email: {formData.email} <br /> 
          Company: {formData.company} <br /> 
          Message: {formData.comment}
        </li>
      </ul>
    </div>)
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-white max-w-lg border shadow-lg rounded p-5" disabled>
      {/* name */}
      <label className="block mb-5">
            <span className="text-gray-700">Name</span>
            <input 
              name="name" {...register("name")} 
              className="border rounded py-2 px-3 form-input mt-1 block w-full" 
              placeholder="Your name"/>
        </label>
      {/* email */}
      <label className="block mb-5">
            <span className="text-gray-700">Email</span>
            <input 
              name="email" {...register("email")} 
              className=" border rounded py-2 px-3 form-input mt-1 block w-full" 
              placeholder="Your email"/>
        </label>
          {/* mobile */}
        <label className="block mb-5">
            <span className="text-gray-700">Phone</span>
            <input 
              name="phone" {...register("phone")} 
              className=" border rounded py-2 px-3 form-input mt-1 block w-full" 
              placeholder="Your phone number"/>
        </label>
         {/* company */}
        <label className="block mb-5">
            <span className="text-gray-700">Company</span>
            <input 
              name="company" {...register("company")} 
              className=" border rounded py-2 px-3 form-input mt-1 block w-full" 
              placeholder="Your company"/>
        </label>
         {/* message */}
      <label className="block mb-5">
            <span className="text-gray-700">Message</span>
            <textarea  name="comment" {...register("comment")} 
              className=" border rounded py-2 px-3 form-input mt-1 block w-full" 
              placeholder="Your message" rows="4" cols="50" />
        </label>

        <label className="block mb-5">
            <span className="text-gray-700">Are you happy for us to contact you via email?</span>
            <input 
            className="m-4"
            name="newsletter" 
            type="checkbox" {...register("newsletter")} 
            />
          </label>

        
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" className="shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" />

        </form>
)
}
