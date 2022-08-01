import React, { useState, useContext } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import UserData from "./context/UserData"
import Router from "./routes/Router"

export default function App () {

	const[account, setAccount] = useState("")
	const[password, setPassword] = useState("")

	return (
		<UserData.Provider value={{
			account: account,
			setAccount: setAccount,
			password: password,
			setPassword: setPassword,
		}}>
			<Router />
		</UserData.Provider>
	)
}
