import { fetchTodoById, handleTodoSubmit } from "@/app/actions/todoActions";
import CreateTodo from "@/components/CreateTodo";

interface EditTodoProps {
  params: {
    todoId: string;
  };
}
export default async function EditTodoForm({ params }: EditTodoProps) {
  const { todoId } = await params;
  const res = await fetchTodoById(todoId);
  return(
      <CreateTodo isEdit={true}
      title={res.title}
      status={res.status}
      description={res.description}
      todoId={res._id}
      />
  )
}
