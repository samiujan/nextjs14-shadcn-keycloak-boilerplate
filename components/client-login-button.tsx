"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"

export function ClientLoginButton() {
    const { data: session } = useSession()

    if (session && session.user) {
        return (
            <div className="flex items-center gap-4">
                <span>Signed in as {session.user.email}</span>
                <Button onClick={() => signOut()}>Sign out</Button>
            </div>
        )
    }
    return <Button onClick={() => signIn("keycloak")}>Sign in</Button>
}