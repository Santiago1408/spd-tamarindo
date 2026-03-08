'use client'

import React, { useState } from 'react'

function HistoryForm() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
    }

    return (
        <footer id="history-form" className="relative bg-primary text-white overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"></div>
                <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">

                    {/* Left column – Copy */}
                    <div className="flex flex-col gap-6 lg:sticky lg:top-32">
                        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                            <span className="material-symbols-outlined text-sm">volunteer_activism</span>
                            Tu voz importa
                        </div>

                        <h2 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
                            Cuéntanos tu <span className="text-secondary">historia</span>
                        </h2>

                        <p className="max-w-md text-lg leading-relaxed text-white/70">
                            Tu testimonio puede ayudar a otras personas a identificar y prevenir situaciones de violencia digital. 
                            Toda la información es tratada de forma <strong className="text-white">confidencial</strong>.
                        </p>

                        <div className="flex flex-col gap-4 mt-4">
                            <div className="flex items-start gap-3">
                                <span className="mt-0.5 flex h-8 w-8 min-w-[32px] items-center justify-center rounded-lg bg-white/10 text-secondary">
                                    <span className="material-symbols-outlined text-lg">shield</span>
                                </span>
                                <div>
                                    <p className="font-semibold text-sm">100% Confidencial</p>
                                    <p className="text-xs text-white/50">Tu identidad y datos están protegidos.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="mt-0.5 flex h-8 w-8 min-w-[32px] items-center justify-center rounded-lg bg-white/10 text-secondary">
                                    <span className="material-symbols-outlined text-lg">group</span>
                                </span>
                                <div>
                                    <p className="font-semibold text-sm">Ayuda a otros</p>
                                    <p className="text-xs text-white/50">Tu experiencia puede prevenir más casos.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="mt-0.5 flex h-8 w-8 min-w-[32px] items-center justify-center rounded-lg bg-white/10 text-secondary">
                                    <span className="material-symbols-outlined text-lg">gavel</span>
                                </span>
                                <div>
                                    <p className="font-semibold text-sm">Contribuye al cambio</p>
                                    <p className="text-xs text-white/50">Los testimonios impulsan mejores políticas.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right column – Form */}
                    <div className="relative">
                        <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-md border border-white/10 shadow-2xl">

                            {submitted ? (
                                <div className="flex flex-col items-center justify-center gap-4 py-16 text-center animate-[fadeIn_0.4s_ease-out]">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/20">
                                        <span className="material-symbols-outlined text-4xl text-emerald-400">check_circle</span>
                                    </div>
                                    <h3 className="text-2xl font-bold">¡Gracias por compartir!</h3>
                                    <p className="max-w-xs text-white/60">Tu testimonio ha sido enviado. Un administrador lo revisará pronto.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                                    {/* Name (optional) */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="hf-name" className="text-sm font-semibold text-white/80">
                                            Nombre o seudónimo <span className="text-white/40 font-normal">(opcional)</span>
                                        </label>
                                        <input
                                            id="hf-name"
                                            type="text"
                                            placeholder="Anónimo"
                                            className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="hf-email" className="text-sm font-semibold text-white/80">
                                            Correo electrónico <span className="text-white/40 font-normal">(opcional)</span>
                                        </label>
                                        <input
                                            id="hf-email"
                                            type="email"
                                            placeholder="correo@ejemplo.com"
                                            className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                                        />
                                    </div>

                                    {/* Type of violence */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="hf-type" className="text-sm font-semibold text-white/80">
                                            Tipo de violencia digital
                                        </label>
                                        <select
                                            id="hf-type"
                                            required
                                            defaultValue=""
                                            className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled className="text-gray-900">Selecciona una opción</option>
                                            <option value="grooming" className="text-gray-900">Grooming</option>
                                            <option value="doxing" className="text-gray-900">Doxing</option>
                                            <option value="phishing" className="text-gray-900">Phishing</option>
                                            <option value="cyberbullying" className="text-gray-900">Cyberbullying</option>
                                            <option value="other" className="text-gray-900">Otro</option>
                                        </select>
                                    </div>

                                    {/* Testimony */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="hf-story" className="text-sm font-semibold text-white/80">
                                            Tu testimonio
                                        </label>
                                        <textarea
                                            id="hf-story"
                                            required
                                            rows={5}
                                            placeholder="Describe lo que viviste. Tu historia es importante..."
                                            className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-8 py-4 text-base font-bold text-white hover:brightness-110 hover:shadow-xl hover:shadow-secondary/30 transition-all cursor-pointer active:scale-[0.98]"
                                    >
                                        Enviar testimonio
                                        <span className="material-symbols-outlined">send</span>
                                    </button>

                                    <p className="text-center text-xs text-white/40">
                                        Al enviar, aceptas que tu testimonio sea revisado por nuestro equipo.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-20 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center">
                    <p className="text-sm text-white/40">
                        © 2026 Hub de Educación Digital — Seguridad y Prevención Digital
                    </p>
                </div>
            </div>

            {/* Fade-in animation */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </footer>
    )
}

export default HistoryForm