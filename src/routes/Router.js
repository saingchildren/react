import { HashRouter, Routes, Route } from "react-router-dom"
import React from "react"
import LoginPage from "./LoginPage/LoginPage"

export default function Router () {
	return (
		<HashRouter>
			<Routes>
				<Route exact path="/" element={<LoginPage />} />
			</Routes>
		</HashRouter>
	)
}
