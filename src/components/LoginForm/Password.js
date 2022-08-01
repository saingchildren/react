import React, { useContext } from "react"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import UserData from "../../context/UserData"

export default function Password () {
	
	const { password, setPassword } = useContext(UserData)

	return (
		<>
			<FloatingLabel
				label="Password"
				className="mb-3"
			>
				<Form.Control
					value={password}
					onChange={(e) => {
						setPassword(e.target.value)
					}}
					type="text"
				/>
			</FloatingLabel>
		</>
	)
}
