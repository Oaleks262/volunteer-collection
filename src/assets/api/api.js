import axios from "axios";

axios.defaults.baseURL = "https://volunteer-collection-api.onrender.com/";


export const lendingData = {
    getTitle() {
       return axios.get("title");
    },
    getAbout() {
       return axios.get("about");
    },
    getBank() {
       return axios.get("bank");
    }
};


export const AdminApi = {
    setToken(token) {
       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },
    loginAdmin(body) {
       return axios.post("/auth/login", body);
    },
    logoutAdmin(body) {
       return axios.post("/admin/logout", body);
    },
    getAdminBank() {
        return axios.get("/admin/bank");
    },
    getAdminTitle() {
        return axios.get("/admin/title");
    },
    getAdminAbout(){
        return axios.get("/admin/about");
    },
    putAdminBank(body){
        return axios.put("/admin/bank", body);
    },
    putAdminTitle(body){
        return axios.put("/admin/title", body);
    },
    putAdminAbout(body){
        return axios.put ("/admin/about", body);
    }
}
export default { lendingData, AdminApi };