import React, { useState } from 'react';
import './BookingModal.css'; // We'll create this next

const BookingModal = ({ isOpen, onClose, onSubmit }) => {
    const [step, setStep] = useState(1);
    const [vehicleType, setVehicleType] = useState('');
    const [quizAnswers, setQuizAnswers] = useState({});
    const [problemDescription, setProblemDescription] = useState('');
    const [images, setImages] = useState([]);

    if (!isOpen) return null;

    const handleVehicleSelect = (type) => {
        setVehicleType(type);
        setStep(2);
    };

    const handleQuizChange = (question, answer) => {
        setQuizAnswers({ ...quizAnswers, [question]: answer });
    };

    const handleImageUpload = (e) => {
        // In a real app, we'd upload to a server/cloud here. 
        // For now, we'll just store the local URL for preview.
        const files = Array.from(e.target.files);
        const newImages = files.map(file => URL.createObjectURL(file));
        setImages([...images, ...newImages]);
    };

    const handleSubmit = () => {
        const bookingData = {
            vehicleType,
            quizResults: Object.entries(quizAnswers).map(([q, a]) => ({ question: q, answer: a })),
            problemDescription,
            images: [], // We'd send actual URLs here in production
        };
        onSubmit(bookingData);
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>&times;</button>

                {step === 1 && (
                    <div className="step-container">
                        <h2>Select Your Vehicle</h2>
                        <div className="vehicle-grid">
                            <div className="vehicle-card" onClick={() => handleVehicleSelect('2-wheeler')}>
                                <span>🏍️</span>
                                <p>2-Wheeler</p>
                            </div>
                            <div className="vehicle-card" onClick={() => handleVehicleSelect('4-wheeler')}>
                                <span>🚗</span>
                                <p>4-Wheeler</p>
                            </div>
                            <div className="vehicle-card" onClick={() => handleVehicleSelect('Truck')}>
                                <span>🚚</span>
                                <p>Truck</p>
                            </div>
                            <div className="vehicle-card" onClick={() => handleVehicleSelect('Tempo')}>
                                <span>🚛</span>
                                <p>Tempo</p>
                            </div>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="step-container">
                        <h2>Diagnostic Quiz</h2>
                        <div className="quiz-question">
                            <p>1. Is the engine making a strange noise?</p>
                            <label><input type="radio" name="q1" onChange={() => handleQuizChange('Engine Noise', 'Yes')} /> Yes</label>
                            <label><input type="radio" name="q1" onChange={() => handleQuizChange('Engine Noise', 'No')} /> No</label>
                        </div>
                        <div className="quiz-question">
                            <p>2. Is there smoke coming from the exhaust?</p>
                            <label><input type="radio" name="q2" onChange={() => handleQuizChange('Smoke', 'Yes')} /> Yes</label>
                            <label><input type="radio" name="q2" onChange={() => handleQuizChange('Smoke', 'No')} /> No</label>
                        </div>
                        <div className="input-group">
                            <label>Describe the problem in your own words:</label>
                            <textarea value={problemDescription} onChange={(e) => setProblemDescription(e.target.value)} />
                        </div>
                        <button className="next-btn" onClick={() => setStep(3)}>Next</button>
                    </div>
                )}

                {step === 3 && (
                    <div className="step-container">
                        <h2>Upload Photos</h2>
                        <input type="file" multiple onChange={handleImageUpload} />
                        <div className="image-preview">
                            {images.map((img, idx) => (
                                <img key={idx} src={img} alt="preview" className="preview-thumb" />
                            ))}
                        </div>
                        <button className="submit-btn" onClick={handleSubmit}>Book Mechanic</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingModal;
