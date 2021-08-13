import { useAuth } from "../use-auth";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import Link from "@material-ui/core/Link";

export default function LoginPage() {
	const auth = useAuth();
	const history = useHistory();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = async (data) => {
		console.log(data)
		const response = await fetch("https://reqres.in/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		const dataJson = await response.json();
		console.log(dataJson);

		auth.signin(dataJson.token, () => {
			history.push("/admin");
		});
	};

	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Login</h1>

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
				<TextField
					style={{ width: "100%", marginBottom: "10px" }}
					id="outlined-basic"
					label="Password"
					variant="outlined"
					type="password"
					{...register("password")}
				/>

				<Button
					variant="contained"
					style={{ background: "#FFB550", color: "#fff" }}
					type="submit"
				>
					Login
				</Button>
			</form>

			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<Link href="/register" onClick={(e) => e.preventDefault}>
					Register
				</Link>
				<Link href="/reset-password" onClick={(e) => e.preventDefault}>
					Forgot password?
				</Link>
			</div>
		</div>
	);
}
