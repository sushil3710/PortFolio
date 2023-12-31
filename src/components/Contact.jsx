import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import {redux,typescript,figma} from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Sushil Kumar",
          from_email: form.email,
          to_email: "2020csb1132@iitrpr.ac.in",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
    className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
  >
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
    >
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>
  
      <div className='max-w-[100%]' style={{ width: '200%', marginBottom: '2rem' }}>
        <div className='contact-detail'>
          <span style={{ fontSize: '1.25rem' }}>Name: Sushil Kumar</span>
        </div>
        <div className='contact-detail'>
          <span style={{ fontSize: '1.25rem' }}>Contact No: 7015804565</span>
        </div>
        <div className='contact-detail'>
          <span style={{ fontSize: '1.25rem' }}>Email Id: 2020csb1132@iitrpr.ac.in</span>
        </div>
       
        <div className='contact-detail' style={{ cursor: 'pointer', width: '100%', display: 'flex', alignItems: 'center', marginTop:'0.8rem',marginBottom: '0.7rem' }} onClick={() => window.open('https://www.linkedin.com/in/sushil-khatana-3007aa236/')}>
  <img
    src={typescript}
    alt="LinkedIn"
    className='w-8 h-8 object-cover rounded-2xl'
  />
  <p className="text-gray-500 ml-2">LinkedIn</p>
</div>
<div className='contact-detail' style={{ cursor: 'pointer', width: '100%', display: 'flex', alignItems: 'center', marginBottom: '0.7rem' }} onClick={() => window.open('https://github.com/sushil3710')}>
  <img
    src={figma}
    alt="Instagram"
    className='w-8 h-8 object-cover rounded-2xl'
  />

  <p className="text-gray-500 ml-2">GitHub</p>
</div>
<div className='contact-detail' style={{ cursor: 'pointer', width: '100%', display: 'flex', alignItems: 'center', marginBottom: '0.7rem' }} onClick={() => window.open('https://instagram.com/khasush_?igshid=NzZlODBkYWE4Ng==')}>
  <img
    src={redux}
    alt="Instagram"
    className='w-8 h-8 object-cover rounded-2xl'
  />
  <p className="text-gray-500 ml-2">Instagram</p>
</div>




      </div>
    </motion.div>
  
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
    >
      <EarthCanvas />
    </motion.div>
  </div>
  
  );
};

export default SectionWrapper(Contact, "contact");
