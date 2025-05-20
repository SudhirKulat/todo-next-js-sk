import { cookies } from "next/headers";
import SubHeader from "./SubHeader";
import Link from "next/link";

const Header = async () => {
  const cookieStore = await cookies();
  const locale = cookieStore?.get("language")?.value || "";
  
  return (
    <header className="bg-sky-500/80 text-white p-4 text-xl font-bold">
      <div className="flex justify-between">
        <Link href="/"><p>Todo App</p></Link>
        <div className="flex gap-6">
          <SubHeader locale={locale}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
