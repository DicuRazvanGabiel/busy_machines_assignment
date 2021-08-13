import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProvideAuth } from "./use-auth.js";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import PrivateRoute from "./PrivateRoute.js";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage.js";
import RegisterPage from "./pages/RegisterPage.js";
import InfoPage from "./pages/InfoPage.js";
import VerifyEmailPage from "./pages/VerifyEmailPage.js";
import ResetPasswordPage from "./pages/ResetPasswordPage.js";

function App() {
	return (
		<ProvideAuth>
			<Router>
				<Container maxWidth="sm">
					<Paper elevation={3} style={{ padding: "10px" }}>
						<Switch>
							<Route path={["/", "/register"]} exact>
								<RegisterPage />
							</Route>
							<Route path="/info" exact>
								<InfoPage />
							</Route>
							<Route path="/verify-email" exact>
								<VerifyEmailPage />
							</Route>
							<Route path="/login" exact>
								<LoginPage />
							</Route>
							<Route path="/reset-password" exact>
								<ResetPasswordPage />
							</Route>
							<PrivateRoute path="/admin" exact>
								<AdminPage />
							</PrivateRoute>
						</Switch>
					</Paper>
				</Container>
			</Router>
		</ProvideAuth>
	);
}

export default App;
