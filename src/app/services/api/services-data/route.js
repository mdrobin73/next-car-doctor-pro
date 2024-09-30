import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";


export const GET = async () => {
    
    try {
        const db = await connectDB();
        const serviceCollection = db.collection("allServices");
        const services = await serviceCollection.find().toArray();
        return NextResponse.json({message: "Successfully got all data", services}, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error", error }, { status: 500 });
    }
};