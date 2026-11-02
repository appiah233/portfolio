"use client"

import { FormspreeProvider, useForm, ValidationError } from '@formspree/react'
import { ArrowUpRight } from 'lucide-react'

function ContactFields() {
  const [state, handleSubmit] = useForm('contactForm')

  if (state.succeeded) {
    return <div className="contact-form-success" role="status"><h3>Message received.</h3><p>Thank you for getting in touch. I’ll review your message and reply using the email address you provided.</p></div>
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-label="Send a message" aria-busy={state.submitting}>
      <div className="contact-form-row">
        <div><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" required maxLength={120} /><ValidationError prefix="Name" field="name" errors={state.errors} /></div>
        <div><label htmlFor="contact-email">Email address</label><input id="contact-email" type="email" name="email" autoComplete="email" required maxLength={254} /><ValidationError prefix="Email" field="email" errors={state.errors} /></div>
      </div>
      <label htmlFor="contact-subject">What would you like to discuss?</label>
      <select id="contact-subject" name="subject" defaultValue="Project enquiry"><option>Project enquiry</option><option>Consultation request</option><option>IT support</option><option>Role or collaboration</option><option>Other</option></select>
      <label htmlFor="contact-message">Your message</label>
      <textarea id="contact-message" name="message" rows={5} required maxLength={5000} placeholder="Tell me about your project, goals, or support needs." />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div className="form-honeypot" aria-hidden="true"><label htmlFor="contact-website">Leave this empty</label><input id="contact-website" name="_gotcha" tabIndex={-1} autoComplete="off" /></div>
      {state.errors && <p className="contact-form-error" role="alert">Your message couldn’t be sent. Please check the fields and try again.</p>}
      <button className="btn" type="submit" disabled={state.submitting}>{state.submitting ? 'Sending…' : 'Send message'}<ArrowUpRight size={17} aria-hidden="true" /></button>
      <p className="contact-form-note">Your details and message will be sent securely through Formspree so I can respond.</p>
    </form>
  )
}

export function ContactForm() {
  return <FormspreeProvider project="3126126637532315433"><ContactFields /></FormspreeProvider>
}
