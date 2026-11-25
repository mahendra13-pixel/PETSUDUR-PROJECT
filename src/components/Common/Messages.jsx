import React from 'react';

const Messages = ({ messages }) => {
    if (!messages || messages.length === 0) {
        return null;
    }

    return (
        <div className="messages-container">
            {messages.map((message, index) => (
                <div key={index} className={`alert alert-${message.tags}`}>
                    {message.text}
                </div>
            ))}
        </div>
    );
};

export default Messages;