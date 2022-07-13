import axiosInstance from "../plugins/axios";
export default {
    async getListPostHasPaging({commit}){
        try {
            var result = await axiosInstance.get('blogs')
            console.log(result);
        } catch(error){

        }
    }
}