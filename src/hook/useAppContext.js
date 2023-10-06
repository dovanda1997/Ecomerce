import { useContext } from "react"
import { AppContext } from "../contax/AppContext"

export const useAppContext = () =>{
    const context = useContext(AppContext);
    
    return {...context}
}