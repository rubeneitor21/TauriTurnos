"use client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
export default function Prueba() {

    useEffect(() => {
        function closeVideoAndShowCursor(event: Event) {
            // document.querySelector("main")?.removeAttribute("style")
            // document.querySelector("video")?.remove()
            router.push("/")
        }
        document.querySelector("video")?.addEventListener("ended", closeVideoAndShowCursor)
    })
    
    const router = useRouter()

    return (
        <main style={{cursor: "none"}}>
            <video
                id="intro"
                src={"/intro.mp4"}
                className="w-full h-full border-white absolute z-10"
                autoPlay
            />
        </main>
        
        // <Image src={"/iconoSteam.jpg"} alt="Hola"/>
    )
}