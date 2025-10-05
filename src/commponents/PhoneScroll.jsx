import React, { useEffect, useRef, useState } from "react";
// It's assumed that gsap and its plugins are installed in your project
// npm install gsap
// The imports below were updated to use a CDN to resolve bundling errors.
import gsap from "https://cdn.skypack.dev/gsap";
import ScrollTrigger from "https://cdn.skypack.dev/gsap/ScrollTrigger";
import { Home, Search, Heart, User, Bot, MessageCircle, Send, Instagram, GitMerge, Headset, Filter, BrainCircuit, Zap, ShieldCheck } from 'lucide-react';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);




// Main App Component
const App = () => {
    const phoneRef = useRef(null);
    const phoneContentRef = useRef(null);
    const containerRef = useRef(null);
    const rightContentRef = useRef(null);

    useEffect(() => {
        // Use gsap.context() for proper cleanup in React
        const ctx = gsap.context(() => {
            const phone = phoneRef.current;
            const phoneContent = phoneContentRef.current;
            const rightContent = rightContentRef.current;

            // Use gsap.matchMedia() for responsive animations
            const mm = gsap.matchMedia();

            mm.add({
                // Define breakpoints
                isDesktop: "(min-width: 768px)",
                isMobile: "(max-width: 767px)"
            }, (context) => {
                // Get conditions from context
                let { isDesktop } = context.conditions;

                // Create a master timeline for the scroll-triggered animations
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top top',
                        end: '+=4500',
                        scrub: 1,
                        pin: true,
                    }
                });

                // Animation 1: Move phone from an initial off-screen position to the center
                tl.fromTo(phone, {
                    x: '-30vw',
                    y: '30vh',
                    scale: 0.7,
                    rotation: -15,
                    opacity: 1,
                }, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotation: 0,
                    opacity: 1,
                    ease: 'power1.inOut'
                }, 0);

                // Animate right content out at the same time
                tl.to(rightContent, {
                    x: '40vw',
                    opacity: 0,
                    ease: 'power1.inOut'
                }, 0);

                // Animation 2: Zoom into the phone, with a different scale for mobile and desktop
                tl.to(phone, {
                    scale: isDesktop ? 1.5 : 1.2, // Reduced the zoom-in scale
                    ease: 'power2.inOut'
                }, ">+0.2");

                // Animation 3: Scroll the content inside the phone's screen
                tl.to(phoneContent, {
                    y: () => -(phoneContent.scrollHeight - phone.offsetHeight * 0.95),
                    ease: 'none'
                }, "<+0.5");

                // Animation 4: Zoom back out after content has been scrolled
                tl.to(phone, {
                    scale: 1,
                    ease: 'power2.inOut'
                }, ">+0.5");

                // Animation 5: Scale down and fade out, adjusting the final position for mobile
                tl.to(phone, {
                    scale: 0.8,
                    opacity: 0,
                    y: isDesktop ? '20vh' : '10vh', // Use a smaller vertical movement on mobile
                    ease: 'power1.in'
                }, ">+0.5");
            });

        }, containerRef); // Scope the context to the main container

        // Cleanup function to revert all GSAP animations and ScrollTriggers
        return () => ctx.revert();
    }, []);

    const services = [
        { name: 'WhatsApp Agents', icon: <MessageCircle size={32} className="text-slate-400" /> },
        { name: 'Telegram Bots', icon: <Send size={32} className="text-slate-400" /> },
        { name: 'Instagram AI', icon: <Instagram size={32} className="text-slate-400" /> },
        { name: 'n8n Workflows', icon: <GitMerge size={32} className="text-slate-400" /> },
        { name: 'AI Support Desk', icon: <Headset size={32} className="text-slate-400" /> },
        { name: 'Lead Capture Bots', icon: <Filter size={32} className="text-slate-400" /> }
    ];

    return (
        <div className="bg-slate-950 font-sans">
  

            {/* Phone Animation Container */}
            <div id="services" ref={containerRef} className="relative bg-slate-950">
                <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                    
                    <div ref={rightContentRef} className="absolute w-full max-w-lg right-[5%] p-8 text-white hidden md:block">
                        <h2 className="text-4xl xl:text-5xl font-bold mb-6">A Glimpse Into Automation</h2>
                        <p className="text-slate-300 xl:text-lg mb-8">
                            As our AI agent takes center stage, watch how seamlessly it can integrate into a mobile-first world. We build solutions that are powerful, intuitive, and accessible.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-full"><Zap size={20} className="text-purple-400"/></div>
                                <div>
                                    <h3 className="font-semibold text-white">Instant Engagement</h3>
                                    <p className="text-slate-400 text-sm">Connect with customers the moment they reach out.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-full"><GitMerge size={20} className="text-purple-400"/></div>
                                <div>
                                    <h3 className="font-semibold text-white">Workflow Integration</h3>
                                    <p className="text-slate-400 text-sm">Powered by n8n for robust connection to your existing tools.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phone Device Mockup - now responsive */}
                    <div ref={phoneRef} className="relative z-10 w-[80vw] h-[calc(80vw*19.5/9)] sm:w-[45vw] sm:h-[calc(45vw*19.5/9)] md:w-[340px] md:h-[690px] max-w-[340px] max-h-[690px]">
                        {/* Phone Frame */}
                        <div className="absolute inset-0 bg-slate-900 rounded-[clamp(2rem,8vw,3.125rem)] shadow-2xl border-[8px] border-slate-800 overflow-hidden">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 sm:w-40 sm:h-7 bg-slate-950 rounded-b-2xl sm:rounded-b-3xl z-20"></div>

                            {/* Screen Content */}
                            <div className="absolute inset-[2px] bg-white rounded-[clamp(1.7rem,7vw,2.625rem)] overflow-hidden">
                                <div ref={phoneContentRef} className="relative">
                                    {/* Status Bar */}
                                    <div className="sticky top-0 z-10 bg-white/95 backdrop-blur px-6 py-4 flex justify-between items-center border-b">
                                        <span className="text-sm font-semibold">9:41</span>
                                        <div className="flex gap-1 items-center">
                                            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 0H1.5C0.671573 0 0 0.671573 0 1.5V9.5C0 10.3284 0.671573 11 1.5 11H15.5C16.3284 11 17 10.3284 17 9.5V1.5C17 0.671573 16.3284 0 15.5 0Z" fill="#1E293B"/></svg>
                                            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 2.5H14V8.5H12.5V2.5ZM10 0H11.5V11H10V0ZM0 5.5H1.5V11H0V5.5ZM2.5 4H4V11H2.5V4ZM5 2.5H6.5V11H5V2.5ZM7.5 1.5H9V11H7.5V1.5Z" fill="#1E293B"/></svg>
                                        </div>
                                    </div>

                                    {/* App Content */}
                                    <div className="px-6 py-8">
                                        <h2 className="text-3xl font-bold mb-2 text-slate-900">AI-Powered Agents</h2>
                                        <p className="text-slate-600 mb-6">Services to automate and grow your business.</p>

                                        {/* Featured Card */}
                                        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 mb-6 text-white">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Bot size={20} />
                                                <span className="text-sm font-semibold">FEATURED SERVICE</span>
                                            </div>
                                            <h3 className="text-2xl font-bold mb-2">WhatsApp AI Agents</h3>
                                            <p className="text-purple-100 mb-4">Engage customers 24/7 with intelligent, automated conversations.</p>
                                            <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold text-sm">Learn More</button>
                                        </div>

                                        {/* Services Grid */}
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            {services.map((service) => (
                                                <div key={service.name} className="bg-slate-50 rounded-2xl p-4 transition hover:shadow-lg">
                                                    <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl h-32 mb-3 flex items-center justify-center">
                                                        {service.icon}
                                                    </div>
                                                    <h4 className="font-semibold text-sm mb-1 text-slate-800">{service.name}</h4>
                                                    <p className="text-xs text-slate-500">Automation</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Core Features */}
                                        <h3 className="text-xl font-bold mb-4 text-slate-900">Why Choose Us?</h3>
                                        <div className="space-y-3 mb-6">
                                            {['Seamless Integration', 'Powered by n8n', '24/7 Automated Support', 'Custom AI Solutions', 'Scalable & Reliable'].map((cat) => (
                                                <div key={cat} className="bg-slate-50 rounded-2xl p-4 flex justify-between items-center transition hover:bg-slate-100 cursor-pointer">
                                                    <span className="font-semibold text-slate-800">{cat}</span>
                                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                                        <span className="text-purple-600 font-bold text-sm">→</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Use Cases */}
                                        <h3 className="text-xl font-bold mb-4 text-slate-900">Popular Use Cases</h3>
                                        <div className="space-y-4">
                                            {['Automated Lead Qualification', 'Instant Customer Support', 'E-commerce Cart Recovery'].map((useCase) => (
                                                <div key={useCase} className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-5 text-white shadow-lg">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h4 className="font-bold text-lg">{useCase}</h4>
                                                            <p className="text-blue-100 text-sm">Increase efficiency</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final Section */}
            <section id="contact" className="min-h-screen bg-slate-950 flex items-center justify-center p-4 md:p-8">
                <div className="max-w-4xl text-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        Ready to Automate Your Business?
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 mb-8">
                        Let's build an AI agent that works for you, 24/7.
                    </p>
                    <button className="px-12 py-5 bg-purple-600 text-white rounded-full font-semibold text-lg hover:bg-purple-700 transition duration-300">
                        Book a Strategy Call
                    </button>
                </div>
            </section>
        </div>
    );
}

export default App;

