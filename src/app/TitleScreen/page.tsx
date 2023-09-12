"use client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import text from '../../../public/translations/menu.json'
import { error } from "console"

export default function TitleScreen() {
    
    const router = useRouter()

    /* ----------------------- Some TS bullshit types gymnastics ---------------------- */

    const navlang = navigator.language

    console.log(navlang)

    let tempLang = 'en'
    
    if (Object.keys(text.logginButtonText).includes(navlang)) {
        tempLang = navlang
    }
    const LOCALE = tempLang as keyof typeof text.logginButtonText

    return (
        <main className="bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600 h-[100vh] w-full">
            <Link
             type="button"
             href={"/GameMenus"}
             className="absolute border rounded left-[50%] translate-x-[-50%] top-[80%] w-[15vw] p-5 h-auto text-center cursor-pointer"
            >
            {text.logginButtonText[LOCALE]}
            </Link>
            <Link href={"/"}>Back</Link>
        </main>
        
        // <Image src={"/iconoSteam.jpg"} alt="Hola"/>
    )
}