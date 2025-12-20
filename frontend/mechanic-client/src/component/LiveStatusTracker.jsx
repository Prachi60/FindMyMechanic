import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LiveStatusTracker.css'; // We'll create this

const LiveStatusTracker = () => {
    const [activeBooking, setActiveBooking] = useState(null);

    useEffect(() => {
        const fetchActiveBooking = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) return;

                // In a real app, we'd have a specific endpoint for "my active booking"
                // For now, let's assume we fetch the latest booking and check if it's active
                // This is a simplification. Ideally: GET /api/bookings/me/active
                // We'll mock this behavior by fetching all user bookings (if we had that endpoint)
                // or just storing the last booking ID in local storage for this demo.

                const lastBookingId = localStorage.getItem("lastBookingId");
                if (!lastBookingId) return;

                // We need an endpoint to get a specific booking by ID. 
                // I'll assume GET /api/bookings/:id exists or I need to create it.
                // Wait, I didn't create GET /api/bookings/:id. 
                // Let's create a quick poller that checks status if we have an ID.
                // Since I can't easily modify backend right now without context switch, 
                // I'll assume I can add a route or use an existing one.
                // Actually, I'll add GET /api/bookings/:id to backend in next step if needed.
                // For now, let's write the frontend code assuming it exists.

                const res = await axios.get(`http://localhost:5000/api/bookings/${lastBookingId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (["pending", "accepted", "on_way", "arrived"].includes(res.data.status)) {
                    setActiveBooking(res.data);
                } else {
                    setActiveBooking(null);
                }

            } catch (error) {
                console.error("Error fetching active booking:", error);
            }
        };

        const interval = setInterval(fetchActiveBooking, 5000);
        fetchActiveBooking();

        return () => clearInterval(interval);
    }, []);

    if (!activeBooking) return null;

    const getStatusStep = (status) => {
        switch (status) {
            case 'pending': return 1;
            case 'accepted': return 2;
            case 'on_way': return 3;
            case 'arrived': return 4;
            case 'completed': return 5;
            default: return 0;
        }
    };

    const currentStep = getStatusStep(activeBooking.status);

    return (
        <div className="live-tracker-container">
            <h3>Live Status: {activeBooking.vehicleType} Service</h3>
            <div className="status-stepper">
                <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>Requested</div>
                <div className={`line ${currentStep >= 2 ? 'active' : ''}`}></div>
                <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>Accepted</div>
                <div className={`line ${currentStep >= 3 ? 'active' : ''}`}></div>
                <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>On Way</div>
                <div className={`line ${currentStep >= 4 ? 'active' : ''}`}></div>
                <div className={`step ${currentStep >= 4 ? 'active' : ''}`}>Arrived</div>
            </div>
            {activeBooking.providerId && (
                <div className="mechanic-info">
                    <p>Mechanic is assigned!</p>
                </div>
            )}
        </div>
    );
};

export default LiveStatusTracker;
