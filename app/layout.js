import { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Task Manager App",
  description: "A simple task management application built with Next JS ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-xl font-semibold"> Task Manager</h1>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
