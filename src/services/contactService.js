// File: src/services/contactService.js
/**
 * Contact Service
 * Handles all contact form related operations
 * Currently in mock mode - Ready for backend integration
 */

// Mock data storage (replace with actual API calls)
let mockSubmissions = [];

/**
 * Submit contact form data
 * @param {Object} formData - Contact form data
 * @param {string} formData.name - Full name
 * @param {string} formData.email - Email address
 * @param {string} formData.phone - Phone number (optional)
 * @param {string} formData.message - Message content
 * @param {string} formData.subject - Subject line (optional)
 * @returns {Promise} Promise object representing the submission result
 */
export const submitContactForm = async (formData) => {
  // Validate required fields
  if (!formData.name || !formData.email || !formData.message) {
    return {
      success: false,
      error: "Name, email, and message are required fields.",
    };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return {
      success: false,
      error: "Please enter a valid email address.",
    };
  }

  try {
    // TODO: Replace with actual API endpoint when backend is ready
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });
    // const data = await response.json();
    // return data;

    // Mock API call simulation
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const submission = {
      id: Date.now(),
      ...formData,
      submittedAt: new Date().toISOString(),
      status: "pending",
    };

    // Store in mock database
    mockSubmissions.push(submission);

    // Log for debugging
    console.log("Contact form submission:", submission);

    return {
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
      data: submission,
    };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    };
  }
};

/**
 * Get all contact form submissions (Admin only)
 * @param {Object} options - Query options
 * @param {number} options.limit - Number of records to fetch
 * @param {number} options.offset - Pagination offset
 * @param {string} options.status - Filter by status (pending, resolved, etc.)
 * @returns {Promise} Promise object representing the fetched submissions
 */
export const getContactSubmissions = async (options = {}) => {
  try {
    // TODO: Replace with actual API endpoint when backend is ready
    // const queryParams = new URLSearchParams(options).toString();
    // const response = await fetch(`/api/contact?${queryParams}`);
    // const data = await response.json();
    // return data;

    // Mock data fetch
    await new Promise((resolve) => setTimeout(resolve, 800));

    let results = [...mockSubmissions];

    // Apply filters
    if (options.status) {
      results = results.filter((item) => item.status === options.status);
    }

    // Apply pagination
    if (options.limit) {
      const start = options.offset || 0;
      results = results.slice(start, start + options.limit);
    }

    return {
      success: true,
      data: results,
      total: mockSubmissions.length,
    };
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    return {
      success: false,
      error: "Failed to fetch submissions.",
      data: [],
    };
  }
};

/**
 * Update contact submission status (Admin only)
 * @param {number|string} id - Submission ID
 * @param {Object} updateData - Data to update
 * @param {string} updateData.status - New status (pending, resolved, etc.)
 * @param {string} updateData.notes - Admin notes (optional)
 * @returns {Promise} Promise object representing the update result
 */
export const updateContactSubmission = async (id, updateData) => {
  try {
    // TODO: Replace with actual API endpoint when backend is ready
    // const response = await fetch(`/api/contact/${id}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(updateData),
    // });
    // const data = await response.json();
    // return data;

    // Mock update
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const index = mockSubmissions.findIndex((item) => item.id === id);
    if (index === -1) {
      return {
        success: false,
        error: "Submission not found.",
      };
    }

    mockSubmissions[index] = {
      ...mockSubmissions[index],
      ...updateData,
      updatedAt: new Date().toISOString(),
    };

    return {
      success: true,
      message: "Submission updated successfully.",
      data: mockSubmissions[index],
    };
  } catch (error) {
    console.error("Error updating contact submission:", error);
    return {
      success: false,
      error: "Failed to update submission.",
    };
  }
};

/**
 * Delete a contact submission (Admin only)
 * @param {number|string} id - Submission ID
 * @returns {Promise} Promise object representing the deletion result
 */
export const deleteContactSubmission = async (id) => {
  try {
    // TODO: Replace with actual API endpoint when backend is ready
    // const response = await fetch(`/api/contact/${id}`, {
    //   method: 'DELETE',
    // });
    // const data = await response.json();
    // return data;

    // Mock deletion
    await new Promise((resolve) => setTimeout(resolve, 800));

    const index = mockSubmissions.findIndex((item) => item.id === id);
    if (index === -1) {
      return {
        success: false,
        error: "Submission not found.",
      };
    }

    mockSubmissions.splice(index, 1);

    return {
      success: true,
      message: "Submission deleted successfully.",
    };
  } catch (error) {
    console.error("Error deleting contact submission:", error);
    return {
      success: false,
      error: "Failed to delete submission.",
    };
  }
};

/**
 * Send automated reply to contact form submission
 * @param {Object} formData - Original form data
 * @param {string} formData.email - Recipient email
 * @param {string} formData.name - Recipient name
 * @returns {Promise} Promise object representing the email sending result
 */
export const sendAutoReply = async (formData) => {
  try {
    // TODO: Replace with actual email service API endpoint
    // const response = await fetch('/api/email/auto-reply', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     to: formData.email,
    //     name: formData.name,
    //     subject: 'Thank you for contacting SmartView Technology',
    //   }),
    // });
    // const data = await response.json();
    // return data;

    // Mock email sending
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Auto-reply email sent to:", formData.email);

    return {
      success: true,
      message: "Auto-reply email sent successfully.",
    };
  } catch (error) {
    console.error("Error sending auto-reply:", error);
    return {
      success: false,
      error: "Failed to send auto-reply email.",
    };
  }
};

// Export all functions as a service object
const contactService = {
  submitContactForm,
  getContactSubmissions,
  updateContactSubmission,
  deleteContactSubmission,
  sendAutoReply,
};

export default contactService;
