"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, createContext, useState } from "react"
import { invoke } from "@tauri-apps/api/tauri"
import { BaseDirectory, readTextFile, writeTextFile } from "@tauri-apps/api/fs"
import { appDataDir, desktopDir } from "@tauri-apps/api/path"
import text from '../../../public/translations/menu.json'
import { useLanguage } from "@/Components/useLanguage"
import image from '../../../public/Background/1.png'
import { URL } from "url"

export default function TitleScreen() {

    const lang = useLanguage() as keyof typeof text.logginButtonText

    const [loginStatus, setLoginStatus] = useState(
        <Link
            type="button"
            href={"/GameMenus"}
            className="w-[15vw] p-5 h-auto text-center text-white bg-purple-900 bg-opacity-90 ease-in duration-150 hover:bg-opacity-100 border-none cursor-wait rounded"
        >
            <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {text.loadingButtonText[lang]}
            </div>
        </Link>
    )

    const [images, setImages] = useState(`/Background/1.png`)

    useEffect(() => {

        fetch ("http://127.0.0.1:6969/user", {
            method: "PUT",
            body: JSON.stringify({"uudi": "j12ieoj12eij"})
        }).then(r => r.text().then(t => console.log(t)))

        setImages(`/Background/${Math.floor(Math.random() * 4) + 1}.png`);

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
        <main className="h-[100vh] w-full" style={{
            backgroundImage: `url(${images})`,
            backgroundSize: "100vw 100vh"
        }}>
            <div
                className="fixed flex flex-col gap-5 justify-center items-center z-10 w-[100vw] h-[32vh] bottom-0"
            >
                {loginStatus}
            </div>
        </main>
    )
}