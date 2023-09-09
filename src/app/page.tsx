"use client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
export default function Prueba() {

    useEffect(() => {
        function closeVideoAndShowCursor(event: Event) {
            router.push("/TitleScreen")
        }

        function skipIntroVideo(event: KeyboardEvent) {
            router.push("/TitleScreen")
        }

        window.addEventListener("keydown", skipIntroVideo)
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
