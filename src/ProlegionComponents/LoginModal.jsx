const LoginModal = ({ onClose }) => {
    return (
      <div className="fixed inset-0 bg-gray-200 bg-opacity-50 flex justify-center items-center mt-20 z-50">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-[90vw] md:max-w-[60%] lg:max-w-[40vw]">
          <div className="flex justify-between items-center pt-4 px-1">
            <button onClick={onClose} className="text-blue-500 hover:text-blue-900 text-lg font-semibold">Back</button>
            <h2 className="text-2xl text-gray-500 font-bold text-center flex-grow">Welcome back</h2>
          </div>
          <form>
            <div className="mb-4">
              <label className="block font-semibold text-gray-900">Email*</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none bg-blue-100" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label className="block font-semibold text-gray-900">Password*</label>
              <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none bg-blue-100" placeholder="Enter your password" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 mt-4">Login</button>
            <div className="flex justify-between items-center mb-4 mt-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default LoginModal;
  