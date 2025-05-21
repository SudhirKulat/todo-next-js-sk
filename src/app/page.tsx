import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import TodoList from "@/components/TodoList";
import { authOptions } from "@/lib/authOptions";
import { fetchTodos } from "./actions/todoActions";

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
          <h2 className="self-center font-bold text-xl">{name && `Welcome, ${name}`}</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <TodoList todos={data} />
        </div>
    </>
  );
}
