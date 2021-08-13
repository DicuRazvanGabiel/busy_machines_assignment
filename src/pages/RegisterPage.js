import { useAuth } from "../use-auth";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import Link from "@material-ui/core/Link";

export default function RegisterPage() {
	const auth = useAuth();
	const history = useHistory();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = async (data) => {
		console.log(data);
		const response = await fetch("https://reqres.in/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		const dataJson = await response.json();
		console.log(dataJson);

		auth.signin(dataJson.token, () => {
			history.push("/info");
		});
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<h1 style={{ textAlign: "center" }}>Register</h1>

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
					{...register("email", { pattern: /^\S+@\S+\.\S+$/ })}
				/>
				{errors.email && "Please enter an valid email"}
				<TextField
					style={{ width: "100%", marginBottom: "10px" }}
					id="outlined-basic"
					label="Password"
					variant="outlined"
					type="password"
					{...register("password", { required: true, minLength: 5 })}
				/>
				{errors.password && "Please enter a valid password"}
				<TextField
					style={{ width: "100%", marginBottom: "10px" }}
					id="outlined-basic"
					label="Comfirm password"
					variant="outlined"
					type="password"
					{...register("repassword", {
						required: true,
						minLength: 5,
					})}
				/>
				{errors.repassword && "Please enter an valid password"}
				<Button
					variant="contained"
					style={{ background: "#FFB550", color: "#fff" }}
					type="submit"
				>
					Create acount
				</Button>
			</form>
			<div style={{ display: "flex", justifyContent: "flex-end" }}>
				<Link href="/login" onClick={(e) => e.preventDefault}>
					Login
				</Link>
			</div>
		</div>
	);
}
