import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";

export function Login() {
  const navigate = useNavigate();

  function handleLogin(event: FormEvent) {
    event.preventDefault();
    navigate("/friends")
  }
  
  return (
    <>
      <div className="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-28 w-auto"
              src={logo}
              alt="Atlas Challenge"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Entre na sua conta
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  E-mail
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-600 focus:outline-none focus:ring-orange-600 sm:text-sm"
                  placeholder="Digite seu email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Senha
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-600 focus:outline-none focus:ring-orange-600 sm:text-sm"
                  placeholder="Digite sua senha"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
