import "./globals.css"
import { Inter } from "next/font/google"
import { ClientProviders } from "@/components/client-providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "YALT2 - Yet Another Labeling Tool",
  description: "A powerful tool for annotating images with namespaces, workflows, and role-based access.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders>
          <div className="flex flex-col min-h-screen">
            <header className="border-b">
              <div className="container mx-auto py-4">
                <h1 className="text-2xl font-bold">YALT2</h1>
              </div>
            </header>
            {children}
          </div>
        </ClientProviders>
      </body>
    </html>
  )
}