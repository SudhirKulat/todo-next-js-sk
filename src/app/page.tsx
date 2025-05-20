import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import TodoList from "@/components/TodoList";
import { authOptions } from "@/lib/authOptions";
import { fetchTodos } from "./actions/todoActions";
import Link from "next/link";

export default async function TodoDashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  const data = await fetchTodos();
  const name = session?.user?.name ?? '';
  return (
    <> 
        <div className="flex justify-between">
          <h2 className="self-center font-bold text-xl">{name && `Welcome ${name}`} on Todo Dashboard. </h2>
          <button className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-700 my-10">
            <Link href="/form">ADD TODO</Link>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <TodoList todos={data} />
        </div>
    </>
  );
}
