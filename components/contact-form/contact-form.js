"use client";

import React from "react";
import cn from "classnames";
import styles from "./contact-form.module.css";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mgeggwjn");

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.input}>
          <input
            className={cn("label-large")}
            type="name"
            placeholder="Enter your name"
            id="name"
            name="name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div className={styles.input}>
          <input
            className={cn("label-large")}
            type="email"
            placeholder="Enter your email address"
            id="email"
            name="email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className={styles.input}>
          <textarea
            className={cn("label-large")}
            placeholder="Enter your message"
            id="message"
            name="message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          className={cn("button", "button-primary", styles.button)}
          type="submit"
          disabled={state.submitting}
        >
          Send Message
        </button>
      </form>

      {state.succeeded && (
        <div className={cn("paragraph-small", styles.success)}>
          {"Thanks for reaching out! We'll get back to you soon."}
        </div>
      )}
    </>
  );
}
