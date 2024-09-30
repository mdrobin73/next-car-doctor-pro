import axios from "axios";


// All services
export const carServices = async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/services/api/services-data`);
        return res.data;

    } catch (error) {
        console.log(error);
        return [];
    }
}

// Single service details
export const serviceDetails = async (id) => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/services/api/${id}`);
        return res.data;

    } catch (error) {
        console.log(error);
        return {};
    }
}