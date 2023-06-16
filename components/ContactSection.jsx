import React from 'react';
import {
  AiOutlineLinkedin,
  AiOutlineMail
} from "react-icons/ai"
function sendEmail() 
{
    window.location = "mailto:kurtirizarry079@gmail.com";
    
}
function newTab() {
  window.open(
  'https://www.linkedin.com/in/kurt-irizarry-webdev1/',
  '_blank' // <- This is what makes it open in a new window.
);
}


const ContactSection = () => {
  return (
    
<section id="contact" className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 flex-row">
  <div className="container mx-auto">
     <h1 className="text-center font-bold text-4xl">
          Let's Work Together!
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4 md:w-1/2 xl:w-1/2">
        <div className="mb-10 overflow-hidden rounded-lg">
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <AiOutlineLinkedin
              className="  m-auto mb-5  text-teal-500"
              size={60}
             fillRule='null'
            />
            <h3 className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
             LinkedIn
            </h3>
            <p className="text-body-color mb-7 text-base leading-relaxed">
              Message me on LinkedIn.
            </p>
            <a
              onClick={newTab}
              alt="Linkedin URL"

              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            >
              Connect With Me!
            </a>
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 xl:w-1/2">
        <div className="mb-10 overflow-hidden rounded-lg ">
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <div className="text-dark  mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
              <AiOutlineMail
            
              className="  m-auto mb-5  text-teal-500"
              size={60}
            />
                Email Me
            </div>
           <p
          
           className=" mb-7 text-base leading-relaxed font-bold">
              Kurtirizarry079@gmail.com
            </p>
            <button
               onClick={sendEmail}
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            >
              Email Me!
            </button>
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 xl:w-1/2">
        
      </div>
    </div>
  </div>
</section>


  )
}

export default ContactSection;