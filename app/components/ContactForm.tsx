"use client";
import React from "react";
import { MdEmail, MdFace } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { motion } from "framer-motion";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const inputVariants = {
  focus: {
    scale: 1.02,
    transition: { type: "spring", stiffness: 300 }
  }
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Your email was sent to Yuval Shalom", {
          icon: "🖨️",
          style: {
            border: "1px solid #D0C1D6",
            padding: "12px",
            color: "#D0C1D6",
          },
        });
      } else {
        toast.error("An error occurred while sending the email", {
          icon: "📧",
          style: {
            border: "1px solid #FECACA",
            padding: "12px",
            color: "#FECACA",
          },
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while sending the email");
    }
  };

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <motion.label 
          className="input input-primary input-bordered flex items-center gap-2 w-full"
          whileFocus="focus"
          variants={inputVariants}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <input
            type="text"
            placeholder="Full Name"
            id="name"
            className="grow"
            {...register("name", { required: "Name is required" })}
          />
          <MdFace />
        </motion.label>
        {errors.name && (
          <motion.span 
            className="text-red-500 text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errors.name.message}
          </motion.span>
        )}

        <motion.label 
          className="input input-primary input-bordered flex items-center gap-2 w-full"
          whileFocus="focus"
          variants={inputVariants}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="grow"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          <MdEmail />
        </motion.label>
        {errors.email && (
          <motion.span 
            className="text-red-500 text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errors.email.message}
          </motion.span>
        )}

        <motion.textarea
          className="textarea textarea-primary w-full"
          placeholder="Message"
          id="message"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileFocus={{ scale: 1.02 }}
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <motion.span 
            className="text-red-500 text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errors.message.message}
          </motion.span>
        )}

        <motion.button
          className="btn btn-primary text-primary-content font-normal"
          type="submit"
          disabled={Object.keys(errors).length > 0 || isSubmitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {isSubmitting ? (
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              ⏳
            </motion.span>
          ) : (
            "Send"
          )}
        </motion.button>
      </form>
      <Toaster />
    </>
  );
};

export default ContactForm;
