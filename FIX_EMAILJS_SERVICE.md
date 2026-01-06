# Fix: Service ID Not Found Error

## The Problem
You're getting this error: "The service ID not found"

This means the Service ID in your `.env` file doesn't match your EmailJS account.

## Solution Steps:

### Step 1: Verify Your EmailJS Service
1. Go to https://dashboard.emailjs.com/admin
2. Click on **"Email Services"** in the left menu
3. You should see your email service listed
4. **Click on the service** to view its details
5. **Copy the Service ID** (it should look like `service_xxxxxxx`)

### Step 2: Update Your .env File
1. Open the `.env` file in your project root
2. Find this line:
   ```
   VITE_EMAILJS_SERVICE_ID=service_00c26rv
   ```
3. Replace `service_00c26rv` with your **actual Service ID** from Step 1
4. Save the file

### Step 3: Restart Dev Server
1. Stop your current dev server (Ctrl+C)
2. Run `npm run dev` again
3. Try sending a message

## Common Issues:
- **Service was deleted**: If you deleted and recreated the service, you need the new Service ID
- **Wrong account**: Make sure you're logged into the correct EmailJS account
- **Service not connected**: Make sure your email service (Gmail, Outlook, etc.) is properly connected

## Verify Your Service is Active:
1. Go to EmailJS dashboard → Email Services
2. Make sure your service shows as "Active" or "Connected"
3. If it's not connected, click "Connect Account" and authorize it




