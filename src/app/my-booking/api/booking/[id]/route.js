import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


export const GET = async (request, {params}) => {
    try {
        const db = await connectDB();
        const bookingsCollection = db.collection("bookings");
        const id = ObjectId.createFromHexString(params.id)

        if (!id) {
            return NextResponse.json({message: "Booking not found"}, {status: 404});
        }

        const res = await bookingsCollection.findOne({_id: new ObjectId(id)});
        return NextResponse.json({message: "Booking found", res}, {status: 200})
    } catch (error) {
        console.log({message: "something wrong!"}, {status: 500});
    }

}


export const PATCH = async (request, {params}) => {
    try {
        const db = await connectDB();
        const bookingsCollection = db.collection("bookings");
        const id = ObjectId.createFromHexString(params.id);
        const updatedDoc = await request.json();

        if (!updatedDoc) {
            return NextResponse.json({message: "Updated data not found"}, {status: 404});
        }

        const res = await bookingsCollection.updateOne(
            {_id: new ObjectId(id)},
            {
                $set: {
                    ...updatedDoc
                }
            },
            {
                upsert: true
            }
        );

        return NextResponse.json({message: "Updated the booking", res}, {status: 200})
        
    } catch (error) {
        return NextResponse.json({message: "Failed to update the booking!", error}, {status: 500})
    }

}


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
