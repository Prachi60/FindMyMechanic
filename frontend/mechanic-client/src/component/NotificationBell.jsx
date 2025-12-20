import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NotificationBell.css'; // We'll create this

const NotificationBell = () => {
    const [notifications, setNotifications] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) return;

                const res = await axios.get("http://localhost:5000/api/bookings/provider", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setNotifications(res.data);
            } catch (error) {
                console.error("Error fetching notifications:", error);
            }
        };

        // Poll every 5 seconds
        const interval = setInterval(fetchNotifications, 5000);
        fetchNotifications(); // Initial fetch

        return () => clearInterval(interval);
    }, []);

    const handleAccept = async (bookingId) => {
        try {
            const token = localStorage.getItem("token");
            await axios.put(`http://localhost:5000/api/bookings/${bookingId}/status`,
                { status: "accepted" },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert("Booking accepted! Check your dashboard.");
            setNotifications(notifications.filter(n => n._id !== bookingId));
        } catch (error) {
            console.error("Error accepting booking:", error);
            alert("Failed to accept booking.");
        }
    };

    return (
        <div className="notification-bell-container">
            <div className="bell-icon" onClick={() => setIsOpen(!isOpen)}>
                🔔
                {notifications.length > 0 && <span className="badge">{notifications.length}</span>}
            </div>

            {isOpen && (
                <div className="notification-dropdown">
                    <h3>New Requests</h3>
                    {notifications.length === 0 ? (
                        <p className="no-notifs">No new requests</p>
                    ) : (
                        notifications.map((booking) => (
                            <div key={booking._id} className="notification-item">
                                <p><strong>{booking.vehicleType}</strong> - {booking.problemDescription}</p>
                                <small>{new Date(booking.createdAt).toLocaleTimeString()}</small>
                                <button className="accept-btn" onClick={() => handleAccept(booking._id)}>Accept</button>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default NotificationBell;
