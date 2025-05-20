'use server'

import { cookies } from "next/headers"

export default async function userLangChange(language: string) {
    (await cookies()).set('language', language)
}
