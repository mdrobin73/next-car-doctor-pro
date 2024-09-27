import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";


export const GET = async () => {
    
    try {
        const db = await connectDB();
        const serviceCollection = db.collection("allServices");
        const services = await serviceCollection.find().toArray();
        return NextResponse.json(services, { status: 200 });

    } catch (error) {
        console.error("Failed to fetch services:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};