export default function Signup() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

      <input
        type="text"
        placeholder="Name"
        className="w-full mb-3 px-4 py-2 border rounded-lg"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full mb-3 px-4 py-2 border rounded-lg"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-4 px-4 py-2 border rounded-lg"
      />

      <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
        Create Account
      </button>
    </div>
  );
}
