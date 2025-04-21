// src/utils/formValidation.js

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid, false otherwise
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates UK phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid, false otherwise
 */
export const isValidUKPhone = (phone) => {
  // Basic UK phone validation - allows spaces, dashes, and parentheses
  const phoneRegex = /^(\+44|0)[0-9 \-()]{9,13}$/;
  return phoneRegex.test(phone);
};

/**
 * Validates form data for the contact form
 * @param {Object} formData - The form data to validate
 * @returns {Object} - Object with isValid flag and any error messages
 */
export const validateContactForm = (formData) => {
  const errors = {};
  
  // Check name
  if (!formData.name || formData.name.trim() === '') {
    errors.name = 'Please enter your name';
  } else if (formData.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  // Check email
  if (!formData.email || formData.email.trim() === '') {
    errors.email = 'Please enter your email address';
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  // Check phone
  if (!formData.phone || formData.phone.trim() === '') {
    errors.phone = 'Please enter your phone number';
  } else if (!isValidUKPhone(formData.phone)) {
    errors.phone = 'Please enter a valid UK phone number';
  }
  
  // Check message
  if (!formData.message || formData.message.trim() === '') {
    errors.message = 'Please enter a message';
  } else if (formData.message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};