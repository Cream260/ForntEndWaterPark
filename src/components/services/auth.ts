
import { mdiEmail } from "@mdi/js";
import http from "./axios";


const  authenticate = async (password_: string, username_: string, email_:string, name_: string, tel_:string) =>{
console.log(JSON.stringify({
  username: username_,
  password: password_,
  email: email_,
  name: name_,
  tel:tel_
}));
    return  await http.post("/auths/register", {
      username: username_,
      password: password_,
      email: email_,
      name: name_,
      tel:tel_
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