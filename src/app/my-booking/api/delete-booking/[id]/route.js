import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


export const DELETE = async (request, {params}) => {
    try {
        const db = await connectDB();
        const bookingsCollection = db.collection("bookings");
        const id = ObjectId.createFromHexString(params.id)

        if (!id) {
            return NextResponse.json({message: "Booking not found"}, {status: 404});
        }

        const res = await bookingsCollection.deleteOne({_id: new ObjectId(id)});
        return NextResponse.json({message: "Booking deleted successfully", res}, {status: 200})
    } catch (error) {
        console.log({message: "something wrong!"}, {status: 500});
    }

}