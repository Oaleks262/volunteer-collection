import axios from "axios";
// axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.baseURL = "http://http://localhost:4444";


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