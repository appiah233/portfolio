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

Project descriptions and links are maintained in `app/data.ts`. The featured JB Heights project is private, so this site intentionally does not link to its repository. Contact and consultation requests use me@mydomain.com, with a prefilled email request for meetings. To override the public email or enable direct scheduling, set `NEXT_PUBLIC_CONTACT_EMAIL` and `NEXT_PUBLIC_BOOKING_URL` in the deployment environment and rebuild. The booking link should point to your real Calendly, Microsoft Bookings, or equivalent page.

This branch is for review. It is not configured to deploy to the upstream Nim template repository.


## Contact form (Formspree)

The contact section uses `@formspree/react` and the CLI project `3126126637532315433`.
`formspree.json` defines `contactForm` and sends notifications to `me@mydomain.com`.
The form includes required name, email and message fields, a topic selector, a spam
honeypot, pending state, field errors and an inline success message.

Formspree configuration is deployed separately from the Next.js site. After
changing `formspree.json`, set `FORMSPREE_DEPLOY_KEY` in your shell environment and
run `npm run deploy:forms`. Keep this secret out of source control and never prefix
it with `NEXT_PUBLIC_`. The public project ID is safe to include in the client.
Ordinary Vercel builds use `npm run build` and do not need the deploy key.

The notification address must be a working mailbox. Complete any recipient
verification requested by Formspree before relying on email notifications.
