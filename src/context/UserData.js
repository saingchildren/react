import { createContext } from "react"

const UserData = {
	account: "",
	setAccount: () => {},
	password: "",
	setPassword: () => {},

}

export default createContext(UserData)
