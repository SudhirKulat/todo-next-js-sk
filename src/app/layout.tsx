import { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import SessionWrapper from "@/components/SessionWrapper";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body>
        <div className="min-h-screen bg-gray-100">
          <SessionWrapper>
            <Header />

            <main className="py-8" style={{ margin: "0 20px" }}>
              <NextIntlClientProvider>{children}</NextIntlClientProvider>
            </main>
          </SessionWrapper>
        </div>
      </body>
    </html>
  );
}
