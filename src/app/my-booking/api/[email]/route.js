import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";


export const GET = async (request, {params}) => {
    
    try {
        const db = await connectDB();
        const bookingsCollection = db.collection("bookings");
        const bookings = await bookingsCollection.find({email: params.email}).toArray();
        
        if (!bookings) {
            return NextResponse.json({message: "No data found!"}, {status: 404})
        }

        return NextResponse.json(bookings, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error", error }, { status: 500 });
    }
};
