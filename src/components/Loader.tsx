export default function Loader() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      <p className="text-gray-700 font-medium">Loading...</p>
    </div>
  );
}
