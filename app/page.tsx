'use client'

import { useRef, useState } from 'react'
import { slide as Menu } from 'react-burger-menu'

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
      {/* Burger Menu for Mobile */}
      <div className="md:hidden z-50">
        <Menu
          right={false}
          width={'60%'}
          isOpen={mobileMenuOpen}
          onStateChange={(state: { isOpen: boolean }) => setMobileMenuOpen(state.isOpen)}
          customBurgerIcon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          }
          customCrossIcon={false}
          styles={{
            bmMenu: {
              background: '#1e1e1e',
              padding: '2.5em 2em 1em',
              fontSize: '1.15em',
            },
            bmBurgerButton: {
              left: '24px',
              top: '24px',
              width: '32px',
              height: '32px',
              padding: '4px',
            },
          }}
        >
          {TABS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => {
                setActiveTab(value)
                setMobileMenuOpen(false)
              }}
              className={`block w-full text-left px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeTab === value
                  ? 'bg-slate-700 text-white'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              scrollToContact()
            }}
            className="block w-full text-left px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
          >
            Contact
          </button>
        </Menu>
      </div>
      {/* Desktop Nav */}
      <nav className="w-full flex flex-col gap-4 md:flex-row md:items-center py-4 px-2 md:py-8 md:px-8 hidden md:flex">
        <div className="flex w-full justify-between md:w-auto md:block">
          <button
            onClick={goHome}
            className="text-base md:text-lg font-medium text-primary hover:text-slate-400 transition-colors w-auto md:w-[100px] text-left"
          >
            Daniel Aguilera
          </button>
          <button
            onClick={scrollToContact}
            className="text-base md:text-lg font-medium text-primary hover:text-slate-400 transition-colors w-auto md:w-[100px] text-right md:hidden"
          >
            Contact
          </button>
        </div>
        <div className="flex-1 flex justify-center w-full md:w-auto">
          <div className="bg-slate-900/90 backdrop-blur-sm rounded-full p-1 md:p-2 shadow-lg border border-slate-800 w-full overflow-x-auto md:w-auto">
            <div className="flex gap-1 md:gap-2 w-max">
              {TABS.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setActiveTab(value)}
                  className={`px-4 md:px-6 py-2 text-xs md:text-sm font-medium transition-all duration-300 rounded-full whitespace-nowrap ${
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
          className="hidden md:block text-lg font-medium text-primary hover:text-slate-400 transition-colors w-[100px] text-right"
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
