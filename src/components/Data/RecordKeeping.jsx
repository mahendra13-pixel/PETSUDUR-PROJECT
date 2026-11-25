import React, { useState, useEffect } from 'react';

const ServicesSection = () => {
    const [language, setLanguage] = useState('en');
    const [selectedService, setSelectedService] = useState(null);
    const [selectedAction, setSelectedAction] = useState('');
    const [formData, setFormData] = useState({
        animalType: '',
        serialNo: '',
        location: '',
        date: '',
        notes: '',
        images: []
    });
    const [imagePreviews, setImagePreviews] = useState([]);

    // Text content based on language
    const textContent = {
        en: {
            title: "Our Services",
            subtitle: "Support community animal welfare through various initiatives",
            recordKeeping: "Record Keeping",
            hostCamps: "Host Camps",
            joinCamps: "Join Camps", 
            joinSponsor: "Join as Sponsor",
            backToServices: "← Back to Services",
            selectAction: "Select Action Type",
            vaccinated: "Vaccinated",
            revaccination: "Revaccination",
            sterilized: "Sterilized",
            rescued: "Rescued",
            feed: "Fed/Provided Food",
            animalType: "Animal Type",
            serialNo: "Serial Number",
            location: "Location Found",
            date: "Date",
            notes: "Additional Notes",
            uploadImages: "Upload Images",
            uploadedImages: "Uploaded Images",
            submit: "Submit Record",
            cancel: "Cancel",
            serviceDescription: "Track and manage animal welfare records"
        },
        np: {
            title: "हाम्रा सेवाहरू",
            subtitle: "विभिन्न पहलहरू मार्फत सामुदायिक जनावर कल्याणलाई सहयोग गर्नुहोस्",
            recordKeeping: "रेकर्ड राख्ने",
            hostCamps: "क्याम्प आयोजना गर्नुहोस्",
            joinCamps: "क्याम्पमा सहभागी हुनुहोस्",
            joinSponsor: "प्रायोजकको रूपमा सामेल हुनुहोस्",
            backToServices: "← सेवाहरूमा फर्कनुहोस्",
            selectAction: "कार्य प्रकार छान्नुहोस्",
            vaccinated: "टीकाकरण गरिएको",
            revaccination: "पुनः टीकाकरण",
            sterilized: "बाँझोपन गरिएको", 
            rescued: "उद्धार गरिएको",
            feed: "खुवाइएको/खाना दिइएको",
            animalType: "जनावरको प्रकार",
            serialNo: "क्रम संख्या",
            location: "फेला परेको स्थान",
            date: "मिति",
            notes: "थप नोटहरू",
            uploadImages: "तस्बिरहरू अपलोड गर्नुहोस्",
            uploadedImages: "अपलोड गरिएका तस्बिरहरू",
            submit: "रेकर्ड पेश गर्नुहोस्",
            cancel: "रद्द गर्नुहोस्",
            serviceDescription: "जनावर कल्याण रेकर्डहरू ट्र्याक र व्यवस्थापन गर्नुहोस्"
        }
    };

    const t = textContent[language];

    const handleServiceSelect = (service) => {
        setSelectedService(service);
        setSelectedAction('');
        setFormData({
            animalType: '',
            serialNo: '',
            location: '',
            date: '',
            notes: '',
            images: []
        });
        setImagePreviews([]);
    };

    const handleActionSelect = (action) => {
        setSelectedAction(action);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        
        // Create preview URLs for display
        const newPreviews = files.map(file => URL.createObjectURL(file));
        setImagePreviews(prev => [...prev, ...newPreviews]);
        
        // Store original files for submission
        setFormData(prevState => ({
            ...prevState,
            images: [...prevState.images, ...files]
        }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append('animalType', formData.animalType);
    formPayload.append('serialNo', formData.serialNo);
    formPayload.append('location', formData.location);
    formPayload.append('date', formData.date);
    formPayload.append('notes', formData.notes);
    formPayload.append('action', selectedAction);

    formData.images.forEach((image) => {
        formPayload.append('images', image);
    });

    try {
        const response = await fetch('http://127.0.0.1:8000/api/records/create/', {
            method: 'POST',
            body: formPayload
        });

        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log('Record submitted:', data);
        alert('Record submitted successfully!');
    } catch (error) {
        console.error('Error submitting record:', error);
        alert('Error submitting record');
    }

    // Reset form
    handleCancel();
};



    const handleCancel = () => {
        // Clean up image preview URLs
        imagePreviews.forEach(url => URL.revokeObjectURL(url));
        
        setSelectedService(null);
        setSelectedAction('');
        setFormData({
            animalType: '',
            serialNo: '',
            location: '',
            date: '',
            notes: '',
            images: []
        });
        setImagePreviews([]);
    };

    // Clean up image URLs when component unmounts
    useEffect(() => {
        return () => {
            imagePreviews.forEach(url => URL.revokeObjectURL(url));
        };
    }, [imagePreviews]);

    const servicesStyles = `
        .services-section {
            padding: 40px 0;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .services-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
        }

        .section-header {
            text-align: center;
            margin-bottom: 30px;
        }

        .section-header h2 {
            color: #780202;
            font-size: 28px;
            margin-bottom: 10px;
            font-weight: 700;
        }

        .section-header p {
            color: #666;
            font-size: 16px;
            max-width: 600px;
            margin: 0 auto 15px;
            line-height: 1.5;
        }

        .language-switcher {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 15px;
        }

        .lang-btn {
            padding: 8px 20px;
            border: 2px solid #780202;
            background: white;
            color: #780202;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
            font-size: 14px;
        }

        .lang-btn:hover {
            background: #f8f9fa;
        }

        .lang-btn.active {
            background: #780202;
            color: white;
        }

        .services-grid {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 30px;
        }

        .single-service-container {
            display: flex;
            justify-content: center;
            width: 100%;
        }

        .service-card {
            background: white;
            border-radius: 12px;
            padding: 25px 20px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            border: 2px solid transparent;
            width: 100%;
            max-width: 350px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
            border-color: #780202;
        }

        .service-card h3 {
            color: #333;
            font-size: 22px;
            margin: 15px 0 10px;
            font-weight: 700;
        }

        .service-card p {
            color: #666;
            font-size: 14px;
            line-height: 1.5;
            margin: 0;
        }

        .service-icon {
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, #780202 0%, #a50101 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 28px;
            margin: 0 auto 15px;
            box-shadow: 0 4px 10px rgba(120, 2, 2, 0.2);
        }

        /* Record Keeping Modal - FIXED FOR MOBILE */
        .record-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: flex-start;
            z-index: 10000;
            padding: 15px;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .record-container {
            background: #f8f9fa;
            border-radius: 15px;
            width: 100%;
            max-width: 500px;
            margin: 20px auto;
            position: relative;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            animation: slideUp 0.3s ease;
            max-height: calc(100vh - 40px);
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        .modal-header {
            background: linear-gradient(135deg, #780202 0%, #a50101 100%);
            color: white;
            padding: 20px;
            border-radius: 15px 15px 0 0;
            position: sticky;
            top: 0;
            z-index: 10;
        }

        .modal-header h3 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
            line-height: 1.3;
        }

        .modal-content {
            padding: 20px;
            overflow-y: auto;
            flex-grow: 1;
            -webkit-overflow-scrolling: touch;
        }

        .back-button {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 10px;
            padding: 5px 0;
            width: fit-content;
        }

        .back-button:hover {
            opacity: 0.9;
        }

        /* Action Selection Grid */
        .actions-title {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
            font-size: 18px;
            font-weight: 600;
        }

        .actions-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin-bottom: 25px;
        }

        @media (min-width: 480px) {
            .actions-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        .action-card {
            background: white;
            border-radius: 10px;
            padding: 18px 15px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid #e0e0e0;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            min-height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .action-card:hover {
            border-color: #780202;
            box-shadow: 0 4px 12px rgba(120, 2, 2, 0.15);
        }

        .action-card.selected {
            background: #780202;
            border-color: #780202;
            color: white;
        }

        .action-card h5 {
            margin: 0;
            font-size: 14px;
            font-weight: 600;
            line-height: 1.3;
        }

        /* Record Form - OPTIMIZED FOR MOBILE */
        .record-form {
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.08);
        }

        .form-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 15px;
            margin-bottom: 20px;
        }

        @media (min-width: 768px) {
            .form-grid {
                grid-template-columns: 1fr 1fr;
            }
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-group label {
            display: block;
            margin-bottom: 6px;
            color: #333;
            font-weight: 600;
            font-size: 14px;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 12px;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            font-size: 16px;
            transition: all 0.3s ease;
            background: white;
            -webkit-appearance: none;
            appearance: none;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #780202;
            box-shadow: 0 0 0 3px rgba(120, 2, 2, 0.1);
        }

        .form-group textarea {
            height: 100px;
            resize: vertical;
            font-family: inherit;
        }

        /* Image Upload Section */
        .image-upload {
            margin: 20px 0;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 8px;
            border: 2px dashed #e0e0e0;
        }

        .image-upload label {
            display: block;
            margin-bottom: 8px;
            color: #333;
            font-weight: 600;
            font-size: 14px;
        }

        .image-upload input {
            width: 100%;
            padding: 10px;
            border: 1px solid #e0e0e0;
            border-radius: 6px;
            background: white;
            font-size: 14px;
        }

        /* Image Preview Gallery */
        .image-preview-section {
            margin: 20px 0;
        }

        .preview-title {
            font-size: 16px;
            font-weight: 600;
            color: #333;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .preview-count {
            background: #780202;
            color: white;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 12px;
        }

        .preview-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
            gap: 10px;
        }

        .preview-item {
            position: relative;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid #e0e0e0;
            background: white;
        }

        .preview-item img {
            width: 100%;
            height: 80px;
            object-fit: cover;
            display: block;
        }

        .preview-item:hover {
            transform: scale(1.05);
            transition: transform 0.2s ease;
        }

        /* Form Buttons - OPTIMIZED FOR MOBILE */
        .form-buttons {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 25px;
        }

        @media (min-width: 480px) {
            .form-buttons {
                flex-direction: row;
            }
        }

        .submit-btn, .cancel-btn {
            flex: 1;
            padding: 15px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
            font-size: 16px;
            transition: all 0.3s ease;
            border: none;
            min-height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .submit-btn {
            background: linear-gradient(135deg, #780202 0%, #a50101 100%);
            color: white;
        }

        .submit-btn:hover {
            box-shadow: 0 4px 12px rgba(120, 2, 2, 0.3);
        }

        .cancel-btn {
            background: #6c757d;
            color: white;
        }

        .cancel-btn:hover {
            background: #5a6268;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .nepali-text {
            font-family: 'Preeti', 'Mangal', 'Kalimati', sans-serif;
        }

        /* MOBILE OPTIMIZATIONS */
        @media (max-width: 767px) {
            .services-section {
                padding: 30px 0;
            }
            
            .section-header h2 {
                font-size: 24px;
            }
            
            .section-header p {
                font-size: 14px;
                margin-bottom: 10px;
            }
            
            .service-card {
                padding: 20px 15px;
                max-width: 320px;
            }
            
            .service-card h3 {
                font-size: 20px;
            }
            
            .modal-content {
                padding: 15px;
            }
            
            .record-form {
                padding: 15px;
            }
            
            .form-group input,
            .form-group select,
            .form-group textarea {
                padding: 10px;
                font-size: 16px;
            }
            
            .modal-header {
                padding: 15px;
            }
            
            .modal-header h3 {
                font-size: 20px;
            }
            
            .record-container {
                margin: 10px;
                max-height: calc(100vh - 20px);
            }
            
            .form-buttons {
                margin-top: 20px;
            }
        }

        @media (max-width: 480px) {
            .actions-grid {
                grid-template-columns: 1fr;
            }
            
            .service-icon {
                width: 60px;
                height: 60px;
                font-size: 24px;
            }
            
            .service-card h3 {
                font-size: 18px;
            }
            
            .record-container {
                border-radius: 12px;
            }
            
            .preview-grid {
                grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
                gap: 8px;
            }
            
            .preview-item img {
                height: 70px;
            }
        }

        @media (max-width: 360px) {
            .record-container {
                margin: 5px;
                max-height: calc(100vh - 10px);
            }
            
            .modal-content {
                padding: 12px;
            }
            
            .record-form {
                padding: 12px;
            }
            
            .form-group input,
            .form-group select,
            .form-group textarea {
                padding: 8px;
                font-size: 15px;
            }
        }

        /* Prevent keyboard overlap on mobile */
        @media (max-height: 600px) {
            .record-modal {
                align-items: flex-start;
            }
            
            .record-container {
                margin-top: 10px;
                max-height: 90vh;
            }
        }

        /* Touch device improvements */
        @media (hover: none) and (pointer: coarse) {
            .action-card:hover,
            .service-card:hover,
            .preview-item:hover {
                transform: none;
            }
            
            .submit-btn:hover,
            .cancel-btn:hover {
                transform: none;
                box-shadow: none;
            }
        }
    `;

    const services = [
        { id: 'record', icon: '📋', title: t.recordKeeping, description: t.serviceDescription },
    ];

    return (
        <section className="services-section">
            <style>{servicesStyles}</style>
            <div className="services-container">
                <div className="section-header">
                    <h2 className={language === 'np' ? 'nepali-text' : ''}>{t.title}</h2>
                    <p className={language === 'np' ? 'nepali-text' : ''}>{t.subtitle}</p>
                    
                    {/* Language Switcher */}
                    <div className="language-switcher">
                        <button 
                            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                            onClick={() => setLanguage('en')}
                        >
                            English
                        </button>
                        <button 
                            className={`lang-btn ${language === 'np' ? 'active' : ''}`}
                            onClick={() => setLanguage('np')}
                        >
                            नेपाली
                        </button>
                    </div>
                </div>

                {/* Services Grid - Single centered card */}
                <div className="services-grid">
                    <div className="single-service-container">
                        {services.map((service) => (
                            <div 
                                key={service.id}
                                className="service-card"
                                onClick={() => handleServiceSelect(service.id)}
                            >
                                <div className="service-icon">
                                    {service.icon}
                                </div>
                                <h3 className={language === 'np' ? 'nepali-text' : ''}>
                                    {service.title}
                                </h3>
                                <p className={language === 'np' ? 'nepali-text' : ''}>
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Record Keeping Modal */}
                {selectedService === 'record' && (
                    <div className="record-modal">
                        <div className="record-container">
                            <div className="modal-header">
                                <button 
                                    className="back-button"
                                    onClick={handleCancel}
                                >
                                    <span>←</span>
                                    <span className={language === 'np' ? 'nepali-text' : ''}>
                                        {t.backToServices}
                                    </span>
                                </button>
                                <h3 className={language === 'np' ? 'nepali-text' : ''}>
                                    {t.recordKeeping}
                                </h3>
                            </div>
                            
                            <div className="modal-content">
                                {/* Action Selection */}
                                {!selectedAction ? (
                                    <>
                                        <h4 className={`actions-title ${language === 'np' ? 'nepali-text' : ''}`}>
                                            {t.selectAction}
                                        </h4>
                                        <div className="actions-grid">
                                            <div 
                                                className={`action-card ${selectedAction === 'vaccinated' ? 'selected' : ''}`}
                                                onClick={() => handleActionSelect('vaccinated')}
                                            >
                                                <h5 className={language === 'np' ? 'nepali-text' : ''}>
                                                    {t.vaccinated}
                                                </h5>
                                            </div>
                                            <div 
                                                className={`action-card ${selectedAction === 'revaccination' ? 'selected' : ''}`}
                                                onClick={() => handleActionSelect('revaccination')}
                                            >
                                                <h5 className={language === 'np' ? 'nepali-text' : ''}>
                                                    {t.revaccination}
                                                </h5>
                                            </div>
                                            <div 
                                                className={`action-card ${selectedAction === 'sterilized' ? 'selected' : ''}`}
                                                onClick={() => handleActionSelect('sterilized')}
                                            >
                                                <h5 className={language === 'np' ? 'nepali-text' : ''}>
                                                    {t.sterilized}
                                                </h5>
                                            </div>
                                            <div 
                                                className={`action-card ${selectedAction === 'rescued' ? 'selected' : ''}`}
                                                onClick={() => handleActionSelect('rescued')}
                                            >
                                                <h5 className={language === 'np' ? 'nepali-text' : ''}>
                                                    {t.rescued}
                                                </h5>
                                            </div>
                                            <div 
                                                className={`action-card ${selectedAction === 'feed' ? 'selected' : ''}`}
                                                onClick={() => handleActionSelect('feed')}
                                            >
                                                <h5 className={language === 'np' ? 'nepali-text' : ''}>
                                                    {t.feed}
                                                </h5>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    /* Record Form */
                                    <form className="record-form" onSubmit={handleSubmit}>
                                        <div className="form-grid">
                                            <div className="form-group">
                                                <label htmlFor="animalType" className={language === 'np' ? 'nepali-text' : ''}>
                                                    {t.animalType}
                                                </label>
                                                <select 
                                                    id="animalType" 
                                                    name="animalType" 
                                                    value={formData.animalType}
                                                    onChange={handleInputChange}
                                                    required
                                                    className={language === 'np' ? 'nepali-text' : ''}
                                                >
                                                    <option value="">Select Type</option>
                                                    <option value="dog">Dog / कुकुर</option>
                                                    <option value="cat">Cat / बिरालो</option>
                                                    <option value="cow">Cow / गाई</option>
                                                    <option value="goat">Goat / बाख्रा</option>
                                                    <option value="other">Other / अन्य</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="serialNo" className={language === 'np' ? 'nepali-text' : ''}>
                                                    {t.serialNo}
                                                </label>
                                                <input 
                                                    type="text" 
                                                    id="serialNo" 
                                                    name="serialNo" 
                                                    value={formData.serialNo}
                                                    onChange={handleInputChange}
                                                    required 
                                                    placeholder={language === 'np' ? 'जस्तै: PET-001' : 'e.g., PET-001'}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="location" className={language === 'np' ? 'nepali-text' : ''}>
                                                    {t.location}
                                                </label>
                                                <input 
                                                    type="text" 
                                                    id="location" 
                                                    name="location" 
                                                    value={formData.location}
                                                    onChange={handleInputChange}
                                                    required 
                                                    placeholder={language === 'np' ? 'क्षेत्र/सडकको नाम' : 'Area/Street name'}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="date" className={language === 'np' ? 'nepali-text' : ''}>
                                                    {t.date}
                                                </label>
                                                <input 
                                                    type="date" 
                                                    id="date" 
                                                    name="date" 
                                                    value={formData.date}
                                                    onChange={handleInputChange}
                                                    required 
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="notes" className={language === 'np' ? 'nepali-text' : ''}>
                                                {t.notes}
                                            </label>
                                            <textarea 
                                                id="notes" 
                                                name="notes" 
                                                value={formData.notes}
                                                onChange={handleInputChange}
                                                placeholder={language === 'np' ? 'थप विवरणहरू...' : 'Additional details...'}
                                                className={language === 'np' ? 'nepali-text' : ''}
                                            />
                                        </div>

                                        <div className="image-upload">
                                            <label htmlFor="images" className={language === 'np' ? 'nepali-text' : ''}>
                                                {t.uploadImages}
                                            </label>
                                            <input 
                                                type="file" 
                                                id="images" 
                                                multiple 
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                            />
                                        </div>

                                        {/* Image Preview Gallery */}
                                        {imagePreviews.length > 0 && (
                                            <div className="image-preview-section">
                                                <div className="preview-title">
                                                    {t.uploadedImages}
                                                    <span className="preview-count">{imagePreviews.length}</span>
                                                </div>
                                                <div className="preview-grid">
                                                    {imagePreviews.map((url, index) => (
                                                        <div key={index} className="preview-item">
                                                            <img src={url} alt={`Preview ${index + 1}`} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className="form-buttons">
                                            <button type="button" className="cancel-btn" onClick={handleCancel}>
                                                {t.cancel}
                                            </button>
                                            <button type="submit" className="submit-btn">
                                                {t.submit}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ServicesSection;