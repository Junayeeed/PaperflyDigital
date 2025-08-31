"use client";

import React, { useState } from "react";
import cn from "classnames";
import styles from "./contact-form.module.css";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSucceeded(true);
      e.target.reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

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

        </div>

        <div className={styles.input}>
          <textarea
            className={cn("label-large")}
            placeholder="Enter your message"
            id="message"
            name="message"
            required
          />

        </div>

        <button
          className={cn("button", "button-primary", styles.button)}
          type="submit"
          disabled={isSubmitting}
        >
          Send Message
        </button>
      </form>

      {error && (
        <div className={cn("paragraph-small", styles.error)}>
          {error}
        </div>
      )}

      {succeeded && (
        <div className={cn("paragraph-small", styles.success)}>
          {"Thanks for reaching out! We'll get back to you soon."}
        </div>
      )}
    </>
  );
}
