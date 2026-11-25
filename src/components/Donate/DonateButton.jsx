import React, { useState } from 'react';

const DonateButton = () => {
    const [showDonation, setShowDonation] = useState(false);

    const donationStyles = `
       .donate-button-section {
    background: linear-gradient(135deg, #780202 0%, #5a0101 100%);
    padding: 30px 0;
    text-align: center;
}

.donate-btn-large {
    background: white;
    color: #780202;
    border: none;
    padding: 12px 25px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    width: auto;
    min-width: 150px;
}

.donate-btn-large:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
    background: #f8f9fa;
}

.donation-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.donation-content {
    background: white;
    padding: 40px;
    border-radius: 12px;
    max-width: 500px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    text-align: center;
    position: relative;
}

.close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    background: #780202;
    color: white;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 18px;
}

.qr-display {
    margin: 30px 0;
}

.qr-image {
    width: 300px;
    height: 300px;
    border-radius: 8px;
    border: 2px solid #e9ecef;
    object-fit: cover;
}

.esewa-info {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
}

.esewa-id {
    font-size: 20px;
    font-weight: bold;
    color: #780202;
    margin: 10px 0;
}

.instructions {
    background: #fff5f5;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
    text-align: left;
}

.instructions h4 {
    color: #780202;
    margin-bottom: 10px;
}

@media (max-width: 768px) {
    .donation-content {
        padding: 25px;
    }
    
    .qr-image {
        width: 250px;
        height: 250px;
    }
}

@media (max-width: 480px) {
    .donation-content {
        padding: 20px;
    }
    
    .qr-image {
        width: 200px;
        height: 200px;
    }
    
    .donate-btn-large {
        padding: 10px 20px;
        font-size: 14px;
        min-width: 120px;
    }
}
    `;

    return (
        <>
            <style>{donationStyles}</style>
            
            {/* Donate Button Section */}
            <section className="donate-button-section">
                <div className="container">
                    <button 
                        className="donate-btn-large"
                        onClick={() => setShowDonation(true)}
                    >
                        DONATE NOW!
                    </button>
                </div>
            </section>

            {/* Donation Modal */}
            {showDonation && (
                <div className="donation-modal">
                    <div className="donation-content">
                        <button 
                            className="close-btn"
                            onClick={() => setShowDonation(false)}
                        >
                            ×
                        </button>
                        
                        <h2 style={{color: '#780202', marginBottom: '20px'}}>Donate via eSewa</h2>
                        
                        {/* QR Display */}
                        <div className="qr-display">
                            <img 
                                src="https://via.placeholder.com/300x300?text=Upload+Your+QR+Here" 
                                alt="eSewa QR Code" 
                                className="qr-image"
                            />
                        </div>

                        {/* eSewa Info */}
                        <div className="esewa-info">
                            <strong>eSewa ID:</strong>
                            <div className="esewa-id">9848444014</div>
                            <p style={{margin: '5px 0 0 0', fontSize: '14px', color: '#666'}}>
                                You can also send directly to this eSewa ID
                            </p>
                        </div>

                        {/* Instructions */}
                        <div className="instructions">
                            <h4>How to Donate:</h4>
                            <p>1. Open your eSewa app</p>
                            <p>2. Tap on "Scan & Pay"</p>
                            <p>3. Scan the QR code above</p>
                            <p>4. Enter donation amount</p>
                            <p>5. Complete payment</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DonateButton;