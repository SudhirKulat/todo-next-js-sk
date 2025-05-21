"use client";
import userLangChange from "@/app/actions/languageSwitchAction";
import { signOut, useSession } from "next-auth/react";

interface SubHeaderProps {
  locale: string;
}
const SubHeader = ({ locale }: SubHeaderProps) => {
  const { data: session } = useSession();

  return (
    <>
      {session?.user?.name ? (
        <button
          onClick={() => signOut({ redirect: true })}
          className="cursor-pointer"
        >
          Sign Out
        </button>
      ) : null}
      <select value={locale} onChange={(e) => userLangChange(e?.target?.value)}>
        <option value="en" className="bg-blue text-black">EN</option>
        <option value="fr" className="bg-blue text-black">FR</option>
      </select>
    </>
  );
};

export default SubHeader;
