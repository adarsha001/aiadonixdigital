import React, { useEffect, useRef } from "react";
// It's assumed that gsap and its plugins are installed in your project
// npm install gsap
// The imports below were updated to use a CDN to resolve bundling errors.
import gsap from "https://cdn.skypack.dev/gsap";
import ScrollTrigger from "https://cdn.skypack.dev/gsap/ScrollTrigger";
import { Bot, MessageCircle, Send, Instagram, GitMerge, Headset, Filter, Zap } from 'lucide-react';

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

                // Animation 2: Zoom into the phone
                tl.to(phone, {
                    scale: isDesktop ? 1.5 : 1.2,
                    ease: 'power2.inOut'
                }, ">+0.2");

                // Animation 3: Scroll the content inside the phone's screen
                tl.to(phoneContent, {
                    y: () => -(phoneContent.scrollHeight - phone.offsetHeight * 0.95),
                    ease: 'none'
                }, "<+0.5");

                // Animation 4: Zoom back out
                tl.to(phone, {
                    scale: 1,
                    ease: 'power2.inOut'
                }, ">+0.5");

                // Animation 5: Scale down and fade out
                tl.to(phone, {
                    scale: 0.8,
                    opacity: 0,
                    y: isDesktop ? '20vh' : '10vh',
                    ease: 'power1.in'
                }, ">+0.5");
            });

        }, containerRef); // Scope the context to the main container

        // Cleanup function to revert all GSAP animations and ScrollTriggers
        return () => ctx.revert();
    }, []);

    return (
        // CHANGED: Applied the gradient background to the main wrapper
        <div className="font-sans bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900 text-white">

            {/* Phone Animation Container */}
            {/* REMOVED: Removed bg-slate-950 to allow the parent gradient to show through */}
            <div id="services" ref={containerRef} className="relative">
                <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                    
                    {/* CHANGED: Styled this section to match the glassmorphism card from the previous component */}
                    <div ref={rightContentRef} className="absolute w-full max-w-lg right-[5%] p-8 hidden md:block bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl">
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
                                        <span className="text-sm font-semibold text-slate-900">9:41</span>
                                        <div className="flex gap-1 items-center">
                                            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 0H1.5C0.671573 0 0 0.671573 0 1.5V9.5C0 10.3284 0.671573 11 1.5 11H15.5C16.3284 11 17 10.3284 17 9.5V1.5C17 0.671573 16.3284 0 15.5 0Z" fill="#1E293B"/></svg>
                                            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 2.5H14V8.5H12.5V2.5ZM10 0H11.5V11H10V0ZM0 5.5H1.5V11H0V5.5ZM2.5 4H4V11H2.5V4ZM5 2.5H6.5V11H5V2.5ZM7.5 1.5H9V11H7.5V1.5Z" fill="#1E293B"/></svg>
                                        </div>
                                    </div>
                                
                                    {/* Chat Interface */}
                                    <div className="flex flex-col h-full">
                                        {/* Chat Header */}
                                        <div className="bg-gradient-to-r from-purple-600 to-purple-500 px-4 py-3 flex items-center gap-3">
                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                                <Bot size={20} className="text-purple-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-white text-sm">Garudan Properties</h3>
                                                <p className="text-purple-100 text-xs">AI Agent • Online</p>
                                            </div>
                                        </div>

                                        {/* Chat Messages */}
                                        <div className="flex-1 bg-slate-50 px-4 py-4 space-y-3 overflow-y-auto">
                                            {/* AI Message */}
                                            <div className="flex gap-2">
                                                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Bot size={16} className="text-white" />
                                                </div>
                                                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2 max-w-[75%] shadow-sm">
                                                    <p className="text-sm text-slate-800">Hello Sheela! 👋 Welcome to Garudan Properties. I'm your AI Agent. How can I assist you today?</p>
                                                </div>
                                            </div>

                                            {/* User Message */}
                                            <div className="flex justify-end">
                                                <div className="bg-purple-600 rounded-2xl rounded-tr-sm px-4 py-2 max-w-[75%]">
                                                    <p className="text-sm text-white">Hi, I wanted to know if there are any 3BHK flats available in Electronic City within 1 crore.</p>
                                                </div>
                                            </div>

                                            {/* AI Message */}
                                            <div className="flex gap-2">
                                                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Bot size={16} className="text-white" />
                                                </div>
                                                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2 max-w-[75%] shadow-sm">
                                                    <p className="text-sm text-slate-800">Sure, Sheela. Let me check the latest listings for 3BHK apartments in Electronic City under ₹1 crore... 🔍</p>
                                                </div>
                                            </div>

                                            {/* Property Listings */}
                                            <div className="flex gap-2">
                                                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Bot size={16} className="text-white" />
                                                </div>
                                                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] shadow-sm">
                                                    <p className="text-sm text-slate-800 mb-3">Here are the top 3 matches:</p>
                                                    <div className="space-y-2 text-sm">
                                                        <div className="bg-slate-50 rounded-lg p-2">
                                                            <p className="font-semibold text-slate-900">1️⃣ Mahindra Lifespaces</p>
                                                            <p className="text-slate-600 text-xs">₹95L • 1250 sq.ft • Ready to move</p>
                                                        </div>
                                                        <div className="bg-slate-50 rounded-lg p-2">
                                                            <p className="font-semibold text-slate-900">2️⃣ Salarpuria Sattva Greenage</p>
                                                            <p className="text-slate-600 text-xs">₹98L • Semi-furnished</p>
                                                        </div>
                                                        <div className="bg-slate-50 rounded-lg p-2">
                                                            <p className="font-semibold text-slate-900">3️⃣ Concorde Cuppertino</p>
                                                            <p className="text-slate-600 text-xs">₹99L • Near Infosys campus</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* ... more messages ... */}
                                            {/* User Message */}
                                            <div className="flex justify-end">
                                                <div className="bg-purple-600 rounded-2xl rounded-tr-sm px-4 py-2 max-w-[75%]">
                                                    <p className="text-sm text-white">Yes, please share details for Mahindra Lifespaces.</p>
                                                </div>
                                            </div>
                                            
                                            {/* AI Confirmation */}
                                            <div className="flex gap-2">
                                                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Bot size={16} className="text-white" />
                                                </div>
                                                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] shadow-sm">
                                                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-2">
                                                        <p className="text-sm font-semibold text-green-800">✅ Booking Confirmed</p>
                                                        <p className="text-xs text-green-700 mt-1">Mahindra Lifespaces, Electronic City</p>
                                                        <p className="text-xs text-green-700">Saturday at 3:00 PM</p>
                                                        <p className="text-xs text-green-700">Agent: Mr. Ramesh</p>
                                                    </div>
                                                    <p className="text-xs text-slate-600">I'll send you a WhatsApp confirmation and map link shortly.</p>
                                                </div>
                                            </div>
                                            {/* ... rest of the messages ... */}
                                            <div className="flex justify-end">
                                                <div className="bg-purple-600 rounded-2xl rounded-tr-sm px-4 py-2 max-w-[75%]">
                                                    <p className="text-sm text-white">Thanks for the quick help. This is really convenient!</p>
                                                </div>
                                            </div>

                                            <div className="flex gap-2">
                                                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Bot size={16} className="text-white" />
                                                </div>
                                                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2 max-w-[75%] shadow-sm">
                                                    <p className="text-sm text-slate-800">I'm glad to hear that, Sheela! 😊 We're here 24/7 to help you. Would you like me to send you similar 3BHK recommendations weekly?</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final Section */}
            {/* REMOVED: Removed bg-slate-950 to allow the parent gradient to show through */}
            <section id="contact" className="min-h-screen flex items-center justify-center p-4 md:p-8">
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