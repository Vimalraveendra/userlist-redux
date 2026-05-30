import axios from "axios"
import { User } from "./userTypes"

const API_URL = "https://randomuser.me/api/?&nat=gb&results=30";

export const fetchUsers=async()=>{
    try{
        const response = await axios.get(API_URL);
        const formattedData: User[] = response.data && response.data.results.map((user: any) => ({
              id: user.id.value,
              name: `${user.name.first} ${user.name.last}`,
              city: user.location.city,
              email: user.email,
              phone: user.phone,
              image: user.picture.large,
            })); 
            return formattedData;
    }catch(error:any){
        throw new Error("Failed to fetch users")
    }
}