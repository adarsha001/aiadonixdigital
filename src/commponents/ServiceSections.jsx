// file: src/components/ServiceSections.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceSections = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-gray-950 text-white min-h-screen py-16 px-6 md:px-20 space-y-24">

      {/* 🌐 Website Development Section */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="rounded-2xl bg-gray-900 p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-400">
          🌐 Website Development (MERN + GSAP + Automation)
        </h2>
        <p className="text-gray-300 mb-6">
          We don’t just build websites — we create digital experiences:
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-200">
          <li>Custom, responsive, SEO-ready websites tailored to your business goals.</li>
          <li>MERN stack backend → Scalable, fast, and secure applications.</li>
          <li>GSAP animations → Smooth, interactive visuals to impress visitors.</li>
          <li>AI-enabled features → Chatbots, voice assistants, or lead capture forms embedded in your website.</li>
          <li>n8n integration → Automate tasks like sending confirmation emails, adding leads to CRM, or triggering WhatsApp messages.</li>
          <li>Social & messaging integration → Connect your site with Instagram, Telegram, WhatsApp for instant engagement.</li>
          <li>Example: A visitor fills a contact form → Data automatically saved in CRM → WhatsApp confirmation sent → Email follow-up scheduled → Team notified via Telegram.</li>
        </ul>
      </section>

      {/* 📊 CRM Solutions Section */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="rounded-2xl bg-gray-900 p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-400">
          📊 CRM Solutions (MERN + n8n + Multi-channel Automation)
        </h2>
        <p className="text-gray-300 mb-6">
          Our custom CRM systems go beyond simple lead management:
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-200">
          <li>Manage leads & customer interactions → Keep everything organized in one dashboard.</li>
          <li>Automation with n8n → Auto-send follow-ups, assign leads to team members, trigger notifications.</li>
          <li>Multi-channel integration → Connect with WhatsApp, Gmail, Instagram, Telegram, and even AI Agents for real-time communication.</li>
          <li>Custom workflows → Example: lead comes in → score & categorize → send automated WhatsApp/Email → assign to sales agent.</li>
          <li>Analytics & reports → Track campaign success, lead conversion, and customer engagement.</li>
          <li>AI-powered insights → Predictive analysis on leads, customer behavior, and sales performance.</li>
          <li>Example: CRM captures an Instagram lead → AI agent scores the lead → Automated WhatsApp & Email follow-ups → Data synced with dashboard → Team notified instantly.</li>
        </ul>
      </section>

      {/* 🤖 AI Agents Section */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="rounded-2xl bg-gray-900 p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-400">
          🤖 AI Agents (ElevenLabs + WhatsApp + n8n + Multi-channel)
        </h2>
        <p className="text-gray-300 mb-6">
          Our AI agents handle customer interactions 24/7:
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-200">
          <li>Chat & Voice Agents → Natural AI voice via ElevenLabs.</li>
          <li>WhatsApp Bots → Engage with leads/customers instantly.</li>
          <li>Instagram Automation → Auto-respond DMs, capture leads, reply to story mentions.</li>
          <li>Telegram Bots → Run communities, broadcast updates, handle queries.</li>
          <li>Gmail Automation → Send welcome emails, confirmations, and follow-ups.</li>
          <li>n8n Workflows → Orchestrate all multi-channel interactions seamlessly.</li>
          <li>Example: A lead contacts you via Instagram → AI agent replies → Data saved in CRM → WhatsApp confirmation → Gmail follow-up → Team notified via Telegram.</li>
        </ul>
      </section>
    </div>
  );
};

export default ServiceSections;
