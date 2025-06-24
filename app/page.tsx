'use client'

import { useRef, useState } from 'react'

import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import HeroSection from '@/components/HeroSection'
import ProjectsGrid from '@/components/ProjectsGrid'

const TABS = [
  { label: 'Home', value: 'home' },
  { label: 'About', value: 'about' },
  { label: 'Projects', value: 'projects' },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToContact = () => {
    if (activeTab !== 'home') {
      setActiveTab('home')
      // Wait for tab change to complete
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const goHome = () => {
    setActiveTab('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <nav className="w-full flex items-center py-8 px-4 md:px-8">
        <button
          onClick={goHome}
          className="text-lg font-medium text-primary hover:text-slate-400 transition-colors w-[100px] text-left"
        >
          Daniel Aguilera
        </button>
        <div className="flex-1 flex justify-center">
          <div className="bg-slate-900/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-slate-800">
            <div className="flex gap-2">
              {TABS.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setActiveTab(value)}
                  className={`px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    activeTab === value
                      ? 'bg-slate-700 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={scrollToContact}
          className="text-lg font-medium text-primary hover:text-slate-400 transition-colors w-[100px] text-right"
        >
          Contact
        </button>
      </nav>

      {/* Content */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <HeroSection />
            <div ref={contactRef}>
              <ContactSection />
            </div>
          </>
        )}
        {activeTab === 'about' && <AboutSection />}
        {activeTab === 'projects' && <ProjectsGrid />}
      </main>
    </div>
  )
}
