import { connectDB } from "@/lib/connectDB"
import { services } from "@/lib/services";
import { NextResponse } from "next/server";


export const GET = async () => {
    const db = await connectDB();
    const serviceCollection = db.collection("allServices");

    try {
        await serviceCollection.deleteMany();
        const res = await serviceCollection.insertMany(services);
        return NextResponse.json({message: "Seeded Successfully", res},{status: 200});

    } catch (error) {
        return NextResponse.json({message: "Failed to insert data into DB", error}, {status: 500});
    }
}