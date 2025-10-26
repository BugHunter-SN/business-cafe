function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-primary to-secondary text-accent text-center">
      <h1 className="text-4xl font-bold mb-4">Business Cafe</h1>
      <p className="text-lg mb-6 max-w-md">
        Custom color scheme test — if you see a greenish-to-black gradient, your
        Tailwind theme colors are working perfectly!
      </p>
      <button className="px-6 py-3 bg-accent text-primary font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
        It Works 🎉
      </button>
    </div>
  );
}

export default App;
