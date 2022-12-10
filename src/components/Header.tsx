import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";

export function Header() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("@AtlasChallenge:token");
    navigate("/");
  }
  
  return (
    <>
    <nav className="relative bg-white">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-3 md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <img className="h-12 w-auto sm:h-16" src={logo} alt="Atlas Challenge" />
          </div>
          <div>
            <button type="button" onClick={handleLogout} className="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-8 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-600">
              Sair
            </button>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}