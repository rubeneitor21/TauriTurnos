"use client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import text from "../../public/translations/intro.json"
import { useLanguage } from "@/Components/useLanguage"

export default function Intro() {

    const lang = useLanguage() as keyof typeof text.PressToSkipButton

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
        <main style={{ cursor: "none" }}>
            <div className="bg-black rounded text-white absolute z-[999] p-1 top-[85%] left-[50%] translate-x-[-50%]">
                {text.PressToSkipButton[lang]}
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
