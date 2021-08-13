
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function InfoPage() {
	const history = useHistory();
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<h1 style={{ textAlign: "center" }}>Basic information</h1>

			<form
				style={{
					margin: "10px",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				<TextField
					style={{ width: "100%", marginBottom: "10px" }}
					id="outlined-basic"
					label="First name"
					variant="outlined"
				/>
				<TextField
					style={{ width: "100%", marginBottom: "10px" }}
					id="outlined-basic"
					label="Last name"
					variant="outlined"
				/>
				<TextField
					style={{ width: "100%", marginBottom: "10px" }}
					id="outlined-basic"
					label="Company"
					variant="outlined"
				/>
				<TextField
					style={{ width: "100%", marginBottom: "10px" }}
					id="outlined-basic"
					label="Company role"
					variant="outlined"
				/>
			</form>

			<div style={{ display: "flex", justifyContent: "center" }}>
				<Button
					variant="contained"
					style={{ background: "#FFB550", color: "#fff" }}
					onClick={() => {
						history.push("/verify-email");
					}}
				>
					Sign up
				</Button>
			</div>
		</div>
	);
}
