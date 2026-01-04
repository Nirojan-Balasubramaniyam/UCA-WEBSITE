# Quick Start: Enable Email Functionality

## Why is Outlook opening?

Outlook is opening because EmailJS is not configured yet. The form is using a fallback method (mailto:) that opens your email client. This is temporary until you set up EmailJS.

## What you need to do:

### Step 1: Create EmailJS Account (2 minutes)
1. Go to https://www.emailjs.com/
2. Click "Sign Up" (free account)
3. Verify your email

### Step 2: Add Email Service (3 minutes)
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (or your email provider)
4. Click **"Connect Account"** and authorize
5. **Copy the Service ID** (looks like: `service_xxxxxxx`)

### Step 3: Create First Template - Inquiry Email (5 minutes)
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Fill in:
   - **Template Name:** `Contact Form Inquiry`
   - **To Email:** `nirojan.baala@gmail.com`
   - **From Name:** `{{from_name}}`
   - **From Email:** `{{from_email}}`
   - **Subject:** `New Contact Form Submission from {{from_name}}`
   - **Content:**
     ```
     You have received a new contact form submission:
     
     Name: {{from_name}}
     Email: {{from_email}}
     Company: {{company}}
     
     Message:
     {{message}}
     ```
4. Click **"Save"**
5. **Copy the Template ID** (looks like: `template_xxxxxxx`)

### Step 4: Create Second Template - Auto-Reply (5 minutes)
1. Click **"Create New Template"** again
2. Fill in:
   - **Template Name:** `Auto Reply to Client`
   - **To Email:** `{{to_email}}`
   - **From Name:** `Unicorn Connected Apps`
   - **From Email:** (your email service email)
   - **Reply To:** `noreply@unicornconnectedapps.com`
   - **Subject:** `Thank You for Contacting Us - Unicorn Connected Apps`
   - **Content:**
     ```
     Dear {{to_name}},
     
     Thank you for contacting Unicorn Connected Apps. We have received your message and will get back to you as soon as possible.
     
     Best regards,
     Unicorn Connected Apps Team
     
     ---
     This is an automated message. Please do not reply to this email.
     ```
3. Click **"Save"**
4. **Copy the Template ID**

### Step 5: Get Public Key (1 minute)
1. Go to **"Account"** → **"General"**
2. Find **"Public Key"**
3. **Copy the Public Key** (looks like: `xxxxxxxxxxxxx`)

### Step 6: Create .env File (2 minutes)
1. In your project root folder, create a file named `.env`
2. Add these lines (replace with YOUR actual values):
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_INQUIRY=template_xxxxxxx
   VITE_EMAILJS_TEMPLATE_REPLY=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
   ```
3. Save the file

### Step 7: Restart Dev Server
1. Stop your current dev server (press Ctrl+C in terminal)
2. Run `npm run dev` again
3. The form should now work without opening Outlook!

## Testing:
1. Fill out the contact form
2. Click "Send Message"
3. You should see "Message sent successfully!" 
4. Check nirojan.baala@gmail.com - you should receive the inquiry
5. Check the client's email - they should receive the auto-reply

## Troubleshooting:
- If you still see errors, check the browser console (F12) for details
- Make sure all IDs in .env file are correct (no extra spaces)
- Make sure you restarted the dev server after creating .env
- Free EmailJS account allows 200 emails/month

