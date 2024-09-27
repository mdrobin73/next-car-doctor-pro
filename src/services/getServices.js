import axios from "axios";


// All services
export const carServices = async () => {
    const res = await axios.get("http://localhost:3000/services/api/services-data");
    return res.data
}

// Single service details
export const serviceDetails = async (id) => {
    const res = await axios.get(`http://localhost:3000/services/api/${id}`);
    return res.data
}