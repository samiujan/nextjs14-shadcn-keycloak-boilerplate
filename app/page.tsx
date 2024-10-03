import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">YALT2</h1>
      <p className="text-xl mb-4">Yet Another Labeling Tool 2</p>
      <Button>Get Started</Button>
    </main>
  )
}