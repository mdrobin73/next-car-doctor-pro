import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";


export const POST = async (request) => {

    try {
        const booking = await request.json();
        
        if (!booking) {
            return NextResponse.json({message: "Booking data not found"}, {status: 404})
        }

        const db = await connectDB();
        const bookingCollection = db.collection("bookings");
        const newBooking = await bookingCollection.insertOne(booking);
        return NextResponse.json({message: "Service booked successfully", newBooking}, {status: 200});

    } catch (error) {
        return NextResponse.json({message: "Internal server error", error}, {status: 500});
    }

}