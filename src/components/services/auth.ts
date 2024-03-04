
import http from "./axios";


const  authenticate = async (email: string, password: string, username: string) =>{
console.log({
  email,
  username: username,
  user_password: password
});
    return await http.post("/auths/register", {
      email,
      username: username,
      user_password: password
    });

  
}

const login = async (credentials: { username: string; password: string }) =>{
  try {
    return await http.post("/auths/login", credentials);

  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
}


export default { login, authenticate };