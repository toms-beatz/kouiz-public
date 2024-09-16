import { axiosInstance } from "../BaseAPI";

export const listAllKouiz = async (token) => {
    try {
        const response = await axiosInstance.get('/kouiz/all',{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        // Gérer les erreurs ici, par exemple, renvoyer une erreur ou un message d'erreur
        throw error;
    }
}
