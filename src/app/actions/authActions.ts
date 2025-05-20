"use server";

import { redirect } from "next/navigation";

const BASE_URL = process.env.BASE_URL;
export async function handleSignUp(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const res = await fetch(`${BASE_URL}/api/register`, {
    method: "POST",
    body: JSON.stringify({ email, password, firstName, lastName }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    redirect("/login");
  } else {
    throw Error("Something went wrong!!!");
  }
}
