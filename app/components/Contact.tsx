import React from 'react';
import { playfair } from '../utils/fonts';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div
      className="flex flex-col justify-center min-h-[70vh] md:min-h-screen p-10"
      id="contact"
    >
      <h1
        className={`text-5xl md:text-6xl font-bold mb-4 ${playfair.className}`}
      >
        Keep in touch.
      </h1>
      <p className="text-lg md:text-xl font-light mb-8">
        If you have any questions or just want to say hi, feel free to reach out
        to me.
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
