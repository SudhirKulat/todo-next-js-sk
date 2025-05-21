"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { Todo } from "./TodoList";
import { deleteTodo } from "@/app/actions/todoActions";
import Loader from "./Loader";

interface TodoListProps {
  todo: Todo;
}
const TodoItemButton = ({ todo }: TodoListProps) => {
  const t = useTranslations("TodoPage");
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    const res = await deleteTodo(todo._id);
    if(res?.status === 200) {
      setLoading(false);
    }else{
      setLoading(false);
      throw new Error("Error while deleting todo..");
    }

  };
  return (
    <>
      {loading ? (
        <Loader text={t('todo_delete_waiting')} />
      ) : (
        <button
          className="text-red-600 hover:underline text-sm cursor-pointer"
          onClick={handleDelete}
        >
          {t("delete_todo_btn")}
        </button>
      )}
    </>
  );
};

export default TodoItemButton;
