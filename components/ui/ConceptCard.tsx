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
            <div>
                <Image
                    src={image}
                    alt={title}
                    width={200}
                    height={200}
                    className='rounded-xl'
                />
            </div>
            <h2 className='text-lg font-bold text-gray-900'>{title}</h2>
            <p className='text-sm text-gray-500 leading-relaxed'>{content}</p>
            <button className='w-full py-2 border-2 border-indigo-600 text-indigo-600 rounded-full font-semibold text-sm hover:bg-indigo-50 transition-colors cursor-pointer'>
                Aprender más
            </button>
        </div>
    )
}

export default ConceptCard;