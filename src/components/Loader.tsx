interface LoaderProps {
  text: string;
}
export default function Loader({ text }: LoaderProps) {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin" />
      <p>{text}</p>
    </div>
  );
}
