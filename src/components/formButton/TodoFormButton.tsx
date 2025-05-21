'use client'

import { useFormStatus } from "react-dom";
import Loader from "../Loader";
import { useTranslations } from "next-intl";

interface TodoFormButtonProps {
    isEdit: boolean | undefined;
}
export default function TodoFormButton({isEdit}: TodoFormButtonProps) {
    const t = useTranslations("TodoForm");
    const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Loader text={t('todo_create_waiting')}/>
      ) : (
        <button
          type="submit"
          className="cursor-pointer w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          {isEdit ? t('update_todo'): t("add_new_todo")}
        </button>
      )}
    </>
  );
}