import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t6v9vk7', 'template_s6b387l', form.current, 'oST6UpLC2qPnK6xjV')
      .then((result) => {
          console.log(result.text);
          console.log('Message sent')
          alert("Message sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <form id="form" ref={form} onSubmit={sendEmail} className="flex flex-col justify-between">
        <label>Name</label>
        <input type="text" name="user_name" className="rounded-lg"/>
        <label>Email</label>
        <input type="email" name="user_email" className="rounded-lg"/>
        <label>Address</label>
        <input type="text" name="address" className="rounded-lg"/>
        <label>Message</label>
        <textarea name="message" className="rounded-lg"/>
        <input type="submit" value="Send" className="hover:text-[#aefff1] hover:underline w-20 self-center"/>
      </form>
  );
};