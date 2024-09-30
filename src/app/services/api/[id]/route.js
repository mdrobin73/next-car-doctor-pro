import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


export const GET = async (request, {params}) => {
    try {
        const db = await connectDB();
        const serviceCollection = db.collection("allServices");
        const id  = ObjectId.createFromHexString(params.id);

        // Ensure params.id is a valid ObjectId string
        if (!ObjectId.isValid(params.id)) {
            return NextResponse.json({message: "Invalid service id"}, {status: 400})
        }
        const service = await serviceCollection.findOne({_id: id})
        
        if (!service) {
            return NextResponse.json({ message: "Service not found" }, { status: 404 });
        }

        return NextResponse.json(service, { status: 200 });
        
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error", error }, { status: 500 });
    }
}