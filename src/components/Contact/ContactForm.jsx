import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage({ text: '', type: '' });

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log('Email sent successfully:', result.text);
                    setMessage({
                        text: 'Message sent successfully! I\'ll get back to you soon.',
                        type: 'success'
                    });
                    e.target.reset();
                    setIsLoading(false);
                },
                (error) => {
                    console.error('Email sending failed:', error.text);
                    setMessage({
                        text: 'Failed to send message. Please try again.',
                        type: 'error'
                    });
                    setIsLoading(false);
                }
            );
    };

    return (
        <div>
            <div>
                <form
                    onSubmit={sendEmail}
                    className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md mx-auto w-full"
                >
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-300">Name</label>
                        <input
                            type="text"
                            name="from_name"
                            required
                            className="w-full px-3 py-2 text-white rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-gray-300">Email</label>
                        <input
                            type="email"
                            name="from_email"
                            required
                            className="w-full px-3 py-2 text-white rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-gray-300">Message</label>
                        <textarea
                            name="message"
                            rows="4"
                            required
                            className="w-full px-3 py-2 rounded text-white bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors disabled:bg-green-700 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>

                    {message.text && (
                        <div
                            className={`mt-4 p-3 rounded text-center ${message.type === 'success'
                                    ? 'bg-green-900 text-green-300 border border-green-700'
                                    : 'bg-red-900 text-red-300 border border-red-700'
                                }`}
                        >
                            {message.text}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ContactForm;