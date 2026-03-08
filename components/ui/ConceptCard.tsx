import Image from 'next/image'
import React from 'react'

interface ConceptCardProps {
    image: string
    title: string
    content: string
}

function ConceptCard({ image, title, content }: ConceptCardProps) {
    return (
        <div className='flex flex-col gap-4 bg-white rounded-2xl shadow-md p-6 max-w-sm'>
            <div className='w-1/3'>
                <Image
                    src={image}
                    alt={title}
                    width={50}
                    height={50}
                    className='rounded-xl'
                />
            </div>
            <h2 className='text-lg font-bold'>{title}</h2>
            <p className='text-md text-gray-500'>{content}</p>
            <button className='w-full py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold text-md hover:bg-indigo-50 cursor-pointer'>
                Aprender más
            </button>
        </div>
    )
}

export default ConceptCard;