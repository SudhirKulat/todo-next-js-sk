import { handleTodoSubmit, handleUpdate } from "@/app/actions/todoActions";
import { useTranslations } from "next-intl";
import React from "react";
import TodoFormButton from "./formButton/TodoFormButton";

interface CreateUpdateProps {
  title?: string;
  description?: string;
  status?: string;
  isEdit?: boolean;
  todoId?: string
}
const CreateTodo = ({title, description, status, isEdit, todoId}: CreateUpdateProps) => {
  const t = useTranslations("TodoForm");
  return (
    <div className="w-1/3 m-auto">
      <form
        action={isEdit? handleUpdate : handleTodoSubmit}
        className="space-y-4 p-4 bg-white rounded shadow h-80"
      >
        <h2 className="text-lg font-semibold">{isEdit ? 'Update TODO' : t("add_new_todo")}</h2>
        <input
          className="w-full border rounded p-2"
          type="text"
          name="title"
          id="title"
          defaultValue={title}
          placeholder={t("placeholder_title")}
          required
        />
        <textarea
          className="w-full border rounded p-2"
          placeholder={t("placeholder_desc")}
          name="desc"
          defaultValue={description}
          id="desc"
          required
        />
        <select className="w-full border rounded p-2" name="status" id="status" defaultValue={status}>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        {isEdit ? <input type="hidden" name="todoId" value={todoId} /> : null }

        <TodoFormButton isEdit={isEdit}/>
      </form>
    </div>
  );
};

export default CreateTodo;
