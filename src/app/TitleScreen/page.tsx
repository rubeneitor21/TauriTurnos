"use client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import text from '../../../public/translations/menu.json'
import { useLanguage } from "@/Components/useLanguage"

export default function TitleScreen() {
    
    const router = useRouter()

    /* ----------------------- Some TS bullshit types gymnastics ---------------------- */
    
    const lang = useLanguage() as keyof typeof text.logginButtonText

    return (
        <main className="bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600 h-[100vh] w-full">
            <Link
             type="button"
             href={"/GameMenus"}
             className="absolute border rounded left-[50%] translate-x-[-50%] top-[80%] w-[15vw] p-5 h-auto text-center cursor-pointer text-white bg-purple-900 hover:bg-purple-800 duration-100 ease-in focus:bg-purple-800 border-none"
            >
                {text.logginButtonText[lang]}
            </Link>
        </main>
    )
}