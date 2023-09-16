"use client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, createContext, useState } from "react"
import { invoke } from "@tauri-apps/api/tauri"
import { BaseDirectory, readTextFile, writeTextFile } from "@tauri-apps/api/fs"
import { appDataDir, desktopDir } from "@tauri-apps/api/path"
import { UUID, randomUUID } from "crypto"

export default function TitleScreen() {


    const [loginStatus, setLoginStatus] = useState(
        <Link
            type="button"
            href={"/GameMenus"}
            className="absolute border rounded left-[50%] translate-x-[-50%] top-[80%] w-[15vw] p-5 h-auto text-center text-white bg-purple-900 border-none cursor-wait"
        >
            <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
            </div>
        </Link>
    )

    useEffect(() => {

        (async () => {
            let user
            try {
                user = JSON.parse(await readTextFile("account.json", { dir: BaseDirectory.AppLocalData }))
            }
            catch {
                user = crypto.randomUUID()
                await writeTextFile("account.json", JSON.stringify({ "user": user }), { dir: BaseDirectory.AppLocalData })
            }

        })()

    }, [])

    return (
        <main className="bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600 h-[100vh] w-full">
            {loginStatus}
        </main>
    )
}