import { notFound } from "next/navigation";
import { axiosInstance } from "../BaseAPI";

export const kouizDetails = async (token, id) => {
    try {
        const response = await axiosInstance.get(`/kouiz/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        // Gérer les erreurs ici, par exemple, renvoyer une erreur ou un message d'erreur
        // if(error.response.status === 404) {
        //     notFound();
        // }
        throw error.response;
    }
}
