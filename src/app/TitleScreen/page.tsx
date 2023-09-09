"use client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
export default function Prueba() {
    
    const router = useRouter()

    return (
        <main className="bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600 h-[100vh] w-full">
            <div className="absolute border rounded left-[50%] translate-x-[-50%] top-[80%] w-[15vw] p-5 h-auto text-center">Hola</div>
            <Link href={"/"}>Back</Link>
        </main>
        
        // <Image src={"/iconoSteam.jpg"} alt="Hola"/>
    )
}