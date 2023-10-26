
'use client'

export default function Card({children, additionalStyles}){
    return <div className={`!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-100 dark:shadow-none dark:!bg-zinc-800 dark:text-white ${additionalStyles}`}>{children}</div>
}