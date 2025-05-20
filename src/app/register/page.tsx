import { useTranslations } from "next-intl";
import Link from "next/link";
import { handleSignUp } from "../actions/authActions";

export default function RegisterPage() {
  const t = useTranslations("AuthDetails");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        action={handleSignUp}
        className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">{t('register')}</h2>
        <div>
          <label className="block text-sm font-medium">{t("firstName")}</label>
          <input
            type="text"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            name="firstName"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">{t("lastName")}</label>
          <input
            type="text"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            name="lastName"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">{t("email")}</label>
          <input
            type="email"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            name="email"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">{t("password")}</label>
          <input
            type="password"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            name="password"
            required
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          {t("register")}
        </button>
        <p className="text-center text-sm">
          {t("haveAccountQue")}
          <Link
            href="/login"
            className="cursor-pointer text-blue-600 hover:underline"
          >
            {t("login_link")}
          </Link>
        </p>
      </form>
    </div>
  );
}
