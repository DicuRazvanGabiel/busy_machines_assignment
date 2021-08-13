import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export default function VerifyEmailPage() {
	const history = useHistory();

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<h2>A verification link has been sent to your email account</h2>
			<Button
				variant="contained"
				style={{ background: "#FFB550", color: "#fff" }}
				type="submit"
				onClick={() => {
					history.push("/login");
				}}
			>
				Login
			</Button>
		</div>
	);
}
