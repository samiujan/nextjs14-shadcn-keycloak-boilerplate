"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function ClientNamespacesPage() {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "loading") return // Do nothing while loading
        if (!session) router.push("/")
    }, [session, status, router])

    if (status === "loading") {
        return <div>Loading...</div>
    }

    if (!session) {
        return null
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Namespaces</h1>
            <p>This is a protected route. Only authenticated users can see this content.</p>
        </div>
    )
}