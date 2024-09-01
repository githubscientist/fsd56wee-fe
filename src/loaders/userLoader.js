import authServices from "../services/authServices"

const userLoader = async () => {
    try {
        const response = await authServices.me();
        return response.data;
    } catch (error) {
        return null;
    }
}

export default userLoader;