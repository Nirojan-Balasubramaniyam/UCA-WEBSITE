# EmailJS Setup Instructions

To enable email functionality, you need to set up EmailJS (free tier available).

## Steps:

1. **Create an EmailJS account** at https://www.emailjs.com/

2. **Add an Email Service:**
   - Go to "Email Services" in your dashboard
   - Add a service (Gmail, Outlook, etc.)
   - Copy the **Service ID**

3. **Create Email Templates:**

   **Template 1 - Inquiry Email (to nirojan.baala@gmail.com):**
   - Go to "Email Templates"
   - Create a new template
   - Set "To Email" to: ``
   - Set "Subject" to: `New Contact Form Submission from {{from_name}}`
   - Set "Content" to:
     ```
     You have received a new contact form submission:
     
     Name: {{from_name}}
     Email: {{from_email}}
     Company: {{company}}
     
     Message:
     {{message}}
     ```
   - Copy the **Template ID**

   **Template 2 - Auto-Reply (to client):**
   - Create another template
   - Set "To Email" to: `{{to_email}}`
   - Set "From Name" to: `Unicorn Connected Apps`
   - Set "Reply To" to: `noreply@unicornconnectedapps.com`
   - Set "Subject" to: `Thank You for Contacting Us - Unicorn Connected Apps`
   - Set "Content" to:
     ```
     Dear {{to_name}},
     
     Thank you for contacting Unicorn Connected Apps. We have received your message and will get back to you as soon as possible.
     
     Best regards,
     Unicorn Connected Apps Team
     
     ---
     This is an automated message. Please do not reply to this email.
     ```
   - Copy the **Template ID**

4. **Get your Public Key:**
   - Go to "Account" → "General"
   - Copy your **Public Key**

5. **Create environment file:**
   - Create a `.env` file in the root directory
   - Add your credentials:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id_here
     VITE_EMAILJS_TEMPLATE_INQUIRY=your_inquiry_template_id_here
     VITE_EMAILJS_TEMPLATE_REPLY=your_reply_template_id_here
     VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
     ```
   - Replace the placeholder values with your actual credentials
   - **Important:** The `.env` file is already in `.gitignore` so your credentials won't be committed

6. **Restart your dev server:**
   - Stop the current server (Ctrl+C)
   - Run `npm run dev` again to load the new environment variables

## Alternative: Backend Solution

For production, consider using a backend service (Node.js, Python, etc.) with:
- Nodemailer (Node.js)
- SendGrid API
- AWS SES
- Or similar email services

This provides better security and control over email sending.

