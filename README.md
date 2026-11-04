# Eric Appiah Owusu — Portfolio

Personal portfolio for Eric Appiah Owusu, presenting work across Microsoft 365, identity and access management, automation, cloud operations, and software engineering.

Built with Next.js 15, React 19, and Tailwind CSS 4. The design began from the [Nim template](https://github.com/ibelick/nim) and has been substantially redesigned.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Checks

```bash
npm run lint
npm run build
```

Project descriptions and links are maintained in `app/data.ts`. The featured JB Heights project is private, so this site intentionally does not link to its repository. Contact and meeting requests use the Formspree contact form. To enable direct scheduling, set `NEXT_PUBLIC_BOOKING_URL` in the deployment environment and rebuild. The booking link should point to your real Calendly, Microsoft Bookings, or equivalent page.

This branch is for review. It is not configured to deploy to the upstream Nim template repository.


## Contact form (Formspree)

The contact section uses `@formspree/react` and Formspree project `3126126637532315433`.
The `contactForm` form sends submissions to that project. Its email notification recipient is managed in Formspree.
The form includes required name, email and message fields, a topic selector, a spam
honeypot, pending state, field errors and an inline success message.

The notification address must be a working mailbox verified in Formspree. The public project ID is safe to include in the client.
