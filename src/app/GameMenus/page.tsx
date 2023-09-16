"use client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Layout from './layout'

export default function GameMenu() {
    
    const router = useRouter()

    return (
        <main className="bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600 h-[100vh] w-full">
            <Layout>
                <Link
                    type="button"
                    href={"/GameMenus"}
                    className="absolute border rounded left-[50%] translate-x-[-50%] top-[50%] w-[15vw] p-5 h-auto text-center cursor-pointer"
                >
                </Link>
            </Layout>
            
        </main>
    )
}
