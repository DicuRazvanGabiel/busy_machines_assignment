
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";

export default function ResetPasswordPage() {
	const history = useHistory();

	const {
		register,
		handleSubmit,
	} = useForm();
	const onSubmit = (data) => {
		history.push("/login");
	};
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Reset password</h1>

			<form
				onSubmit={handleSubmit(onSubmit)}
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
					label="Email"
					variant="outlined"
					{...register("email")}
				/>

				<Button
					variant="contained"
					style={{ background: "#FFB550", color: "#fff" }}
					type="submit"
				>
					Next
				</Button>
			</form>
		</div>
	);
}
