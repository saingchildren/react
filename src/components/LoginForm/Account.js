import React, { useContext } from "react"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import UserData from "../../context/UserData"

export default function Account () {

	const {account, setAccount} = useContext(UserData)

	return (
		<Form>
			<FloatingLabel 
				label="Account"
				className="mb-3"
			>
				<Form.Control
					value={account}
					onChange={(e) => { 
						setAccount(e.target.value)
					}}
					type="text"
				/>
			</FloatingLabel>
		</Form>
	)
}
