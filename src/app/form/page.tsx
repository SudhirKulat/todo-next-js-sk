import CreateTodo from "@/components/CreateTodo";
import { useTranslations } from "next-intl";

export default function TodoForm() {
  const t = useTranslations("TodoForm");

  return (
    <CreateTodo/>
  );
}
