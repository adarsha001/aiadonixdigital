import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Database, Bot, Sparkles, Zap, MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ServiceSections = () => {
  const pinContainerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = sectionsRef.current;
      const pinContainer = pinContainerRef.current;

      gsap.set(sections.slice(1), { yPercent: 100 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: pinContainer,
          pin: true,
          scrub: true,
          start: "top top",
          end: `+=${window.innerHeight * 2}`,
        },
      });

      timeline
        .to(sections[1], { yPercent: 0, ease: "none" })
        .to(sections[2], { yPercent: 0, ease: "none" });
    }, pinContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pinContainerRef}
      className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white h-screen relative overflow-hidden"
    >
      {/* Section 1: Web Development */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        style={{ zIndex: 1 }}
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-12 lg:p-20"
      >
        <div className="max-w-5xl w-full bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/20 shadow-2xl md:overflow-y-auto md:max-h-[90vh]">
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl sm:rounded-2xl shadow-2xl">
              <Code size={32} className="sm:w-10 sm:h-10" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                Web Development
              </h2>
              <p className="text-cyan-300 text-base sm:text-lg">Build. Scale. Automate.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-3">
                <Sparkles className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2">Modern Stack</h3>
                  <p className="text-gray-300 text-sm sm:text-base">MERN stack with cutting-edge animations using GSAP and Framer Motion for fluid user experiences.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-3">
                <Zap className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2">Performance First</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Lightning-fast, SEO-optimized sites built for conversions and scalability from day one.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-3">
                <Database className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2">Smart Automation</h3>
                  <p className="text-gray-300 text-sm sm:text-base">End-to-end workflow automation from forms to CRM, reducing manual work by 80%.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-3">
                <Code className="text-green-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2">Custom Solutions</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Tailored dashboards and analytics that give you real-time insights into your business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: CRM Solutions */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        style={{ zIndex: 2 }}
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-12 lg:p-20"
      >
        <div className="max-w-5xl w-full bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/20 shadow-2xl md:overflow-y-auto md:max-h-[90vh]">
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl shadow-2xl">
              <Database size={32} className="sm:w-10 sm:h-10" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                CRM Solutions
              </h2>
              <p className="text-emerald-300 text-base sm:text-lg">Unified. Intelligent. Automated.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-3">
                <MessageSquare className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2">Omnichannel Hub</h3>
                  <p className="text-gray-300 text-sm sm:text-base">WhatsApp, email, and web chat—all conversations in one intuitive dashboard.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-3">
                <Zap className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2">Workflow Magic</h3>
                  <p className="text-gray-300 text-sm sm:text-base">n8n automation triggers follow-ups, assigns leads, and sends reminders instantly.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-3">
                <Sparkles className="text-pink-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2">Real-Time Insights</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Live notifications and custom analytics to track every lead, conversion, and revenue opportunity.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-3">
                <Database className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2">Complete Control</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Manage your entire customer journey from first contact to closed deal in one place.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: AI Agents */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        style={{ zIndex: 3 }}
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-12 lg:p-20"
      >
        <div className="max-w-5xl w-full bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/20 shadow-2xl md:overflow-y-auto md:max-h-[90vh]">
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-xl sm:rounded-2xl shadow-2xl">
              <Bot size={32} className="sm:w-10 sm:h-10" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                AI Agents
              </h2>
              <p className="text-violet-300 text-base sm:text-lg">Always On. Always Learning.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-3">
                <MessageSquare className="text-violet-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2">Human-Like Voices</h3>
                  <p className="text-gray-300 text-sm sm:text-base">ElevenLabs-powered voice agents that sound natural and engage customers authentically.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-3">
                <Zap className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2">Instant Response</h3>
                  <p className="text-gray-300 text-sm sm:text-base">WhatsApp bots and chat agents respond in seconds, capturing leads while they're hot.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-3">
                <Bot className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2">Intelligent Routing</h3>
                  <p className="text-gray-300 text-sm sm:text-base">n8n automations intelligently route queries, notify teams, and log conversations automatically.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-3">
                <Sparkles className="text-pink-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2">Self-Improving</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Trained on your business data and continuously learning to improve responses and conversions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceSections;