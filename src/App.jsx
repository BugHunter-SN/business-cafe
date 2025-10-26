function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">TailwindCSS Test Page</h1>
      <p className="text-lg mb-6 max-w-md">
        If you can see this colorful gradient background and white centered
        text, TailwindCSS is working correctly in your project!
      </p>
      <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-100 transition duration-300">
        It Works 🎉
      </button>
    </div>
  );
}

export default App;
