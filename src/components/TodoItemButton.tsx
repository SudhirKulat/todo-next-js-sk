"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { Todo } from "./TodoList";
import { deleteTodo } from "@/app/actions/todoActions";

interface TodoListProps {
    todo: Todo;
  }
const TodoItemButton = ({ todo }: TodoListProps) => {
  const t = useTranslations("TodoPage");
  return (
    <button
      className="text-red-600 hover:underline text-sm cursor-pointer"
      onClick={() => deleteTodo(todo._id)}
    >
      {t("delete_todo_btn")}
    </button>
  );
};

export default TodoItemButton;
