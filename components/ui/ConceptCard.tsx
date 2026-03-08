'use client'

import Image from 'next/image'
import React, { useState } from 'react'

interface ConceptCardProps {
    image: string
    title: string
    content: string
    detailContent: string
    examples?: string[]
    protectionTips?: string[]
}

function ConceptCard({ image, title, content, detailContent, examples = [], protectionTips = [] }: ConceptCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <div
                className='flex flex-col gap-4 bg-white rounded-2xl shadow-md p-6 max-w-sm cursor-pointer transition-transform hover:scale-[1.02]'
                onClick={() => setIsModalOpen(true)}
            >
                <div className='w-full'>
                    <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={300}
                        className='rounded-xl mx-auto'
                    />
                </div>
                <h2 className='text-lg font-bold'>{title}</h2>
                <p className='text-md text-gray-500'>{content}</p>
                <button className='w-full py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold text-md hover:bg-indigo-50 cursor-pointer'>
                    Aprender más
                </button>
            </div>

            {/* Modal Overlay */}
            {isModalOpen && (
                <div
                    className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4'
                    onClick={() => setIsModalOpen(false)}
                >
                    {/* Modal Content */}
                    <div
                        className='relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-[modalIn_0.25s_ease-out]'
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className='absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:text-gray-700 hover:border-gray-500 transition-colors cursor-pointer bg-white'
                            aria-label='Cerrar'
                        >
                            ✕
                        </button>

                        <div className='p-8 flex flex-col gap-5'>
                            {/* Icon */}
                            <div className='w-full h-40 rounded-xl flex items-center justify-center'>
                                <Image
                                    src={image}
                                    alt={title}
                                    width={400}
                                    height={400}
                                    className='rounded-lg'
                                />
                            </div>

                            {/* Title */}
                            <h2 className='text-2xl font-bold text-gray-900'>{title}</h2>

                            {/* Description */}
                            <p className='text-gray-500 leading-relaxed'>{detailContent}</p>

                            {/* Common Examples */}
                            {examples.length > 0 && (
                                <div className='border-t border-gray-100 pt-5'>
                                    <h3 className='text-lg font-bold text-gray-900 flex items-center gap-2 mb-4'>
                                        <span className='text-amber-500 text-xl'>⚠</span>
                                        Ejemplos comunes
                                    </h3>
                                    <ul className='flex flex-col gap-3'>
                                        {examples.map((example, index) => (
                                            <li key={index} className='flex items-start gap-3 text-gray-600'>
                                                <span className='mt-1.5 w-2 h-2 min-w-[8px] rounded-full bg-amber-400'></span>
                                                {example}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* How to Protect Yourself */}
                            {protectionTips.length > 0 && (
                                <div className='bg-emerald-50 rounded-xl p-5'>
                                    <h3 className='text-lg font-bold text-gray-900 flex items-center gap-2 mb-4'>
                                        <span className='text-emerald-500 text-xl'>🛡</span>
                                        Cómo protegerte
                                    </h3>
                                    <ol className='flex flex-col gap-3'>
                                        {protectionTips.map((tip, index) => (
                                            <li key={index} className='flex items-start gap-3 text-gray-600'>
                                                <span className='mt-0.5 w-6 h-6 min-w-[24px] rounded-full bg-emerald-400 text-white text-xs font-bold flex items-center justify-center'>
                                                    {index + 1}
                                                </span>
                                                {tip}
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Animation keyframes */}
            <style jsx>{`
                @keyframes modalIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95) translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
            `}</style>
        </>
    )
}

export default ConceptCard;