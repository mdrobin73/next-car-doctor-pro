import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async (request) => {

    const userData = await request.json();

    try {
        const db = await connectDB();
        const userCollection = db.collection("users");
        const exist = await userCollection.findOne({email: userData.email});
        if (exist) {
            return Response.json({message: "User already exists"}, {status: 304})
        }
        const hashedPassword = bcrypt.hashSync(userData.password, 14);
        const res = await userCollection.insertOne({...userData, password: hashedPassword});
        return Response.json({message: "user created"}, {status: 200} )

    } catch (error) {
        console.log(error);
        return Response.json({message: "Something went wrong!", error}, {status: 500} )
    }
}