"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const BASE_URL = process.env.BASE_URL;
export async function handleTodoSubmit(formData: FormData) {

  const title = formData.get('title') as string;
  const description = formData.get('desc') as string;
  const status = formData.get('status') as string;

  const cookieStore = await cookies();
  await fetch(`${BASE_URL}/api/todos`, {
    method: "POST",
    body: JSON.stringify({title, description, status}),
    headers: { 
      "Content-Type": "application/json",
      Cookie: cookieStore.toString()
     },
  });
  redirect('/');
}

export async function deleteTodo(id: string) {
  console.log('deleting...')
  const cookieStore = await cookies();
  const res = await fetch(`${BASE_URL}/api/todos/${id}`, { method: 'DELETE',
    headers: { 
      "Content-Type": "application/json",
      Cookie: cookieStore.toString()
     },
     cache:'no-store'
   });
   revalidatePath("/")
   return await res.json();
}

export async function fetchTodos() {
  console.log('fetching...')
  const cookieStore = await cookies();
  const res = await fetch(`${BASE_URL}/api/todos`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
     cache: 'no-store'
  });
  const data = await res.json();
  return data;
}

export async function fetchTodoById(id:string) {
  console.log('fetching by id...')
  const cookieStore = await cookies();
  const res = await fetch(`${BASE_URL}/api/todos/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
     cache: 'no-store'
  });
  const data = await res.json();
  return data;
}

export async function handleUpdate(formData: FormData) {

  const title = formData.get('title') as string;
  const description = formData.get('desc') as string;
  const status = formData.get('status') as string;
  const id = formData.get('todoId') as string;


  const cookieStore = await cookies();
  await fetch(`${BASE_URL}/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify({title, description, status}),
    headers: { 
      "Content-Type": "application/json",
      Cookie: cookieStore.toString()
     },
  });
  redirect('/');
}
