import React from 'react'

const ContactForm = () => {
  return (
    <div className='ContactForm max-w-[1440px] w-full mx-auto text-center flex flex-col items-center justify-center' >

        <h1 className='text-2xl font-medium my-4'>
            Contact Form
        </h1>

        <form className='my-6 flex flex-col w-11/12 md:w-1/2'>

            <input type="text" placeholder="Email" className='outline-none border-b-2 border-slate-400 my-2 p-2' />
            <textarea rows={5} type="text" placeholder="Message" className='outline-none border-2 border-slate-400 my-2 p-2 rounded' />
            <button className="px-8 py-3 bg-sky-300 my-4  rounded-full hover:bg-sky-400 transition-all duration-500">
          Send Message
        </button>

        </form>

    </div>
  )
}

export default ContactForm