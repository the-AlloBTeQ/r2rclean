// src/app/api/send-email/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Parse the request body
    const { name, email, phone, service, message } = await request.json();
    
    // Validate the required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { message: 'Please fill in all required fields' },
        { status: 400 }
      );
    }
    
    console.log('Creating email transporter...');
    
    // Create a transporter using R2R Cleaning's email server settings
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'sxb1plzcpnl509237.prod.sxb1.secureserver.net',
      port: parseInt(process.env.EMAIL_PORT || '465'),
      secure: process.env.EMAIL_SECURE !== 'false', // true by default for port 465
      auth: {
        user: process.env.EMAIL_USER || 'quote@r2rcleaning.co.uk',
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false
      },
      debug: true, // Show debug output
      logger: true  // Log information into the console
    });
    
    console.log('Transporter created, verifying connection...');
    
    // Verify connection configuration
    transporter.verify(function(error, success) {
      if (error) {
        console.error('Server connection error:', error);
      } else {
        console.log('Server connection verified:', success, '- ready to send emails');
      }
    });
    
    // Map service ID to a human-readable name
    const serviceMap = {
      'residential': 'Residential Cleaning',
      'commercial': 'Commercial Cleaning',
      'specialized': 'Specialized Cleaning',
      'deep': 'Deep Cleaning',
      'carpet': 'Carpet & Upholstery',
      'window': 'Window Cleaning',
      '': 'Not specified'
    };
    
    const serviceName = serviceMap[service] || 'Not specified';
    
    // Format current date
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    console.log('Preparing email content...');
    
    // Create email content with simpler HTML to avoid spam filters
    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER || 'quote@r2rcleaning.co.uk'}>`,
      to: 'quote@r2rcleaning.co.uk',
      replyTo: email,
      subject: `Website Inquiry from ${name}`,
      text: `
        NEW INQUIRY FROM WEBSITE
        
        Submitted on: ${formattedDate}
        
        CLIENT DETAILS:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service Requested: ${serviceName}
        
        CLIENT MESSAGE:
        ${message}
        
        This email was sent from the website contact form.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2>New Website Inquiry</h2>
          <p>Submitted on ${formattedDate}</p>
          
          <h3>Client Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${serviceName}</p>
          
          <h3>Client Message</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
          
          <p>This email was sent from the website contact form.</p>
        </div>
      `,
      headers: {
        'X-Mailer': 'Website Contact Form',
        'X-Priority': '3',
        'Importance': 'Normal'
      }
    };
    
    console.log('Sending email...');
    
    try {
      // Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.response);
      console.log('Message ID:', info.messageId);
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      
      // Prepare a more helpful error message based on the error type
      let errorMsg = 'Failed to send email.';
      
      if (emailError.code === 'EMESSAGE' && emailError.responseCode === 550) {
        errorMsg = 'Failed to send the quotation request this time around. Please use the direct email option instead.';
      } else if (emailError.code === 'ESOCKET' && emailError.syscall === 'read') {
        errorMsg = 'Failed to send the quotation request this time around. Please use the direct email option instead.';
      } else if (emailError.code === 'EAUTH') {
        errorMsg = 'Authentication failed with the email server. Please use the direct email option.';
      }
      
      return NextResponse.json(
        { message: errorMsg, error: emailError.message, code: emailError.code },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in API route:', error);
    
    return NextResponse.json(
      { message: 'Failed to send email. Please click "Send Email Directly" below or email us at quote@r2rcleaning.co.uk', error: error.message },
      { status: 500 }
    );
  }
}