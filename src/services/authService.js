import HttpService from "./httpService";

export const login = async (data) =>{
    return await HttpService.post("api/user/login", data);
}
export const signup = async(data) => {
    return await HttpService.post("api/user/signup", data);
}

// export const logout = async () => {
//     await axios.post(``);
// }
