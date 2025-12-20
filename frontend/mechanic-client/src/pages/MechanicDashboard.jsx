import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MechanicDashboard.css'; // We'll create this

const MechanicDashboard = () => {
    const [activeJobs, setActiveJobs] = useState([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const token = localStorage.getItem("token");
            // Re-using getProviderBookings but filtering for accepted/active on frontend for now
            // Ideally backend should have a dedicated endpoint or filter param
            const res = await axios.get("http://localhost:5000/api/bookings/provider", {
                headers: { Authorization: `Bearer ${token}` }
            });
            // Filter for non-pending jobs (accepted, on_way, arrived)
            const jobs = res.data.filter(b => ["accepted", "on_way", "arrived"].includes(b.status));
            setActiveJobs(jobs);
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    };

    const updateStatus = async (id, newStatus) => {
        try {
            const token = localStorage.getItem("token");
            await axios.put(`http://localhost:5000/api/bookings/${id}/status`,
                { status: newStatus },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            fetchJobs(); // Refresh list
        } catch (error) {
            console.error("Error updating status:", error);
            alert("Failed to update status");
        }
    };

    return (
        <div className="dashboard-container">
            <h2>Active Jobs</h2>
            <div className="jobs-grid">
                {activeJobs.length === 0 ? (
                    <p>No active jobs.</p>
                ) : (
                    activeJobs.map(job => (
                        <div key={job._id} className="job-card">
                            <h3>{job.vehicleType}</h3>
                            <p><strong>Issue:</strong> {job.problemDescription}</p>
                            <p><strong>Status:</strong> <span className={`status-${job.status}`}>{job.status.replace('_', ' ')}</span></p>

                            <div className="action-buttons">
                                {job.status === 'accepted' && (
                                    <button onClick={() => updateStatus(job._id, 'on_way')}>On My Way</button>
                                )}
                                {job.status === 'on_way' && (
                                    <button onClick={() => updateStatus(job._id, 'arrived')}>Arrived</button>
                                )}
                                {job.status === 'arrived' && (
                                    <button onClick={() => updateStatus(job._id, 'completed')}>Mark Completed</button>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MechanicDashboard;
