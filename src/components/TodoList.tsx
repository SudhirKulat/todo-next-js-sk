import { useTranslations } from "next-intl";
import TodoItemButton from "./TodoItemButton";
import Link from "next/link";

export interface Todo {
  title: string;
  description: string;
  status: "pending" | "completed";
  _id: string;
}

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
  const t = useTranslations("TodoPage");

  return (
    <main
      className="bg-white shadow p-4 rounded-lg flex-1"
      style={{ maxHeight: "80vh", marginBottom: "10px", overflowY: "auto" }}
    >
      <div className="flex justify-between">
        <h2 className="text-lg font-medium mb-4">{t("todo_Items")}</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {todos !== null &&
          todos?.length > 0 &&
          todos?.map((todo) => (
            <div key={todo._id} className="border p-4 rounded text-center">
              <h3 className="font-bold">{todo.title}</h3>
              <p>{todo.description}</p>
              <span
                className={`inline-block mt-1 px-2 py-1 text-sm rounded ${
                  todo.status === "completed" ? "bg-green-200" : "bg-yellow-200"
                }`}
              >
                {todo.status}
              </span>
              <div className="mt-2 flex gap-2 justify-center">
                <TodoItemButton todo={todo} />
                <button className="text-red-600 hover:underline text-sm cursor-pointer">
                  <Link href={`/form/${todo._id}`}>{t("edit_todo_btn")}</Link>
                </button>
              </div>
            </div>
          ))}
        {!todos?.length && <p>{t('no_todo_data')}</p>}
      </div>
    </main>
  );
}
