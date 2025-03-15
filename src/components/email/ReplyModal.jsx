import React, { useState } from "react";
import { emails, Email } from "../../../data";

const ReplyModal = ({ email, closeModal }) => {
    const [subject, setSubject] = useState(`Re: ${email.subject}`);
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const formatted_message = `${message}\n\n\n--- Ursprüngliche Nachricht --- \n\n\n ${email.message}`;
        emails.push(new Email(
            emails.length, 
            email.to, 
            email.from, 
            1, 
            new Date(), 
            `AW: ${email.subject}`, 
            formatted_message, 
            false
        ));
    
        closeModal();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-[400px] max-w-[90%] shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Auf Email antworten:</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">An:</label>
                        <input
                            type="text"
                            value={email.from}
                            readOnly
                            className="w-full p-2 border rounded-md mt-1 text-gray-600"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Von:</label>
                        <input
                            type="text"
                            value={email.to}
                            readOnly
                            className="w-full p-2 border rounded-md mt-1 text-gray-600"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Betreff:</label>
                        <input
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full p-2 border rounded-md mt-1 text-gray-600"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Nachricht:</label>
                        <textarea
                            rows="5"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full p-2 border rounded-md mt-1 text-gray-600"
                        />
                    </div>
                    <div className="flex justify-between mt-4">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                        >
                            Senden
                        </button>
                        <button
                            type="button"
                            onClick={closeModal}
                            className="bg-gray-300 text-black p-2 rounded-md hover:bg-gray-400"
                        >
                            Schließen
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReplyModal;