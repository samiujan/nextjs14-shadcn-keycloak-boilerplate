"use client"

import { Button } from "@/components/ui/button"
import { ClientLoginButton } from "@/components/client-login-button"

export function ClientHome() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-bold mb-8">YALT2</h1>
            <p className="text-xl mb-4">Yet Another Labeling Tool</p>
            <div className="flex flex-col items-center gap-4">
                <Button>Get Started</Button>
                <ClientLoginButton />
            </div>
        </main>
    )
}