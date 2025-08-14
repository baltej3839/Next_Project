import { error } from "console"

export const SigninComponent=()=>{
    return(

        <>
        
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Sign in to your account
        </p>

        

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              defaultValue=""
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={""}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-indigo-600 hover:shadow-lg transition duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-indigo-500 hover:underline hover:text-indigo-600"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
        
        </>
    )
}