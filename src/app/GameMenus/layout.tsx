"use client"
import {useRef, useEffect, useState} from 'react'
import Image from 'next/image'

export default function MenusLayout({children}: {
    children: React.ReactNode
}) {

    const [time, setTime] = useState(new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}))

    useEffect ( () => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}))
        }, 1000)

        return () => clearInterval(interval)
        
    }, [])

    return (
        <div>
            <header
                className='absolute flex flex-row justify-center place-content-center' 
            >
                <Image
                    className='p-2'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzrycnWVxThOo4ft3tjyyWWEX0tSTL-OJ86qttknmgZPsetGkX66Vu43uvgdAW8TDKQU&usqp=CAU"
                    alt='Profile Picture' width={50} height={50}>
                </Image>
                <div className='text-white'>{"Rubeneitor2"} <br /> LV:{25} </div>
                <div
                    className='absolute left-[50vw] translate-x-[-50%]'
                >
                    {time}
                </div>
            </header>
            {children}
        </div>
    )
}

