import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }: any) => {
  const token = localStorage.getItem("@AtlasChallenge:token");
  return token ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;