'use client';
import React, { useRef } from 'react';
import { MdEmail, MdFace } from 'react-icons/md';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Email sent successfully');
      } else {
        alert('Failed to send email');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while sending the email');
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow input-primary"
          placeholder="Full Name"
          id="name"
          {...register('name', { required: 'Name is required' })}
        />
        <MdFace />
      </label>
      {errors.name && (
        <span className="text-red-500 text-sm">{errors.name.message}</span>
      )}

      <label className="input input-bordered flex items-center gap-2">
        <input
          type="email"
          className="grow input-primary"
          placeholder="Email"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'Invalid email address',
            },
          })}
        />
        <MdEmail />
      </label>
      {errors.email && (
        <span className="text-red-500 text-sm">{errors.email.message}</span>
      )}

      <textarea
        className="textarea textarea-primary"
        placeholder="Message"
        id="message"
        {...register('message', { required: 'Message is required' })}
      ></textarea>
      {errors.message && (
        <span className="text-red-500 text-sm">{errors.message.message}</span>
      )}

      <button
        className="btn btn-primary text-primary-content font-normal"
        type="submit"
        disabled={Object.keys(errors).length > 0}
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
