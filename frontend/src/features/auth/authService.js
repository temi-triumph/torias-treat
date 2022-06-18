import axios from "axios";


const API_URL = "http://localhost:5000/login";

// Login User

const login = async (user) => {
    const response = await axios.post(API_URL, user);

    if(response.data){
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response.data;
}

const authService = {
    login,

}


export default authService;