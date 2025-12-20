import Booking from "../models/booking.js";
import Provider from "../models/provider.js";

export const createBooking = async (req, res) => {
    try {
        const { vehicleType, problemDescription, quizResults, images, location } = req.body;
        const customerId = req.user.id; // Assumes authMiddleware attaches user to req

        // Basic logic to find a provider (can be enhanced to find nearest)
        // For now, we'll just create the booking. Matching can be done here or separately.
        // Let's try to find a provider who specializes in the vehicle type and is available.

        // Geo-spatial query if location is provided
        let provider = null;
        if (location && location.coordinates) {
            provider = await Provider.findOne({
                specialization: vehicleType,
                availability: true,
                location: {
                    $near: {
                        $geometry: {
                            type: "Point",
                            coordinates: location.coordinates
                        },
                        $maxDistance: 10000 // 10km radius
                    }
                }
            });
        } else {
            // Fallback if no location or simple match
            provider = await Provider.findOne({ specialization: vehicleType, availability: true });
        }

        const newBooking = new Booking({
            customerId,
            providerId: provider ? provider._id : null, // If null, it's a broadcast request (or pending assignment)
            vehicleType,
            problemDescription,
            quizResults,
            images,
            location
        });

        await newBooking.save();
        res.status(201).json({ message: "Booking created successfully", booking: newBooking });
    } catch (error) {
        console.error("Error creating booking:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const getProviderBookings = async (req, res) => {
    try {
        const providerId = req.user.id;
        // Fetch bookings assigned to this provider or unassigned ones in their area (if we implement broadcasting)
        // For now, simple direct assignment check
        const bookings = await Booking.find({ providerId, status: "pending" })
            .populate("customerId", "name phone location")
            .sort({ createdAt: -1 });

        res.status(200).json(bookings);
    } catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const updateBookingStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const providerId = req.user.id;

        const booking = await Booking.findById(id);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        // Ensure only the assigned provider can update (or if unassigned, assign it on accept)
        if (booking.providerId && booking.providerId.toString() !== providerId) {
            return res.status(403).json({ message: "Not authorized to update this booking" });
        }

        if (status === "accepted" && !booking.providerId) {
            booking.providerId = providerId;
        }

        booking.status = status;
        await booking.save();

        res.status(200).json({ message: "Booking status updated", booking });
    } catch (error) {
        console.error("Error updating booking status:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) return res.status(404).json({ message: "Booking not found" });
        res.json(booking);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
