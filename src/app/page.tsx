"use client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import text from "../../public/translations/intro.json"
export default function Intro() {
    
    let tempLang = 'en'

    useEffect(() => {
        function closeVideoAndShowCursor(event: Event) {
            router.push("/TitleScreen")
        }

        function skipIntroVideo(event: KeyboardEvent) {
            router.push("/TitleScreen")
        }

        window.addEventListener("keydown", skipIntroVideo)
        document.querySelector("video")?.addEventListener("ended", closeVideoAndShowCursor)

        const navlang = navigator.language.slice(0,2)
        console.log(navlang)

        if (Object.keys(text.PressToSkipButton).includes(navlang)) {
            tempLang = navlang
        }
    })

    const LOCALE = tempLang as keyof typeof text.PressToSkipButton

    const router = useRouter()
    
    return (
        <main style={{cursor: "none"}}>
            <div className="bg-black text-white absolute z-[999] p-1 top-[80%] left-[50%] translate-x-[-50%]">
                {text.PressToSkipButton[LOCALE]}
            </div>
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
