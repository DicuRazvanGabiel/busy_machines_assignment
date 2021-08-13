import { useAuth } from "../use-auth";
import { useHistory } from "react-router-dom";

export default function AdminPage() {
	const auth = useAuth();
	const history = useHistory();
	return (
		<div>
			<h1>Admin</h1>
			<button
				onClick={() => {
					auth.signout(() => {
						history.push("/");
					});
				}}
			>
				sign out
			</button>
		</div>
	);
}
