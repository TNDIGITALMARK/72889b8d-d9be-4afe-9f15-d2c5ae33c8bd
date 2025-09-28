import { HeroCarousel } from '@/components/HeroCarousel'
import { RacingStats } from '@/components/RacingStats'
import { UpcomingRaces } from '@/components/UpcomingRaces'
import { FeaturedCar } from '@/components/FeaturedCar'
import { JoinElite } from '@/components/JoinElite'

export const dynamic = 'force-dynamic'

export default function LegendsOfSpeed() {
  return (
    <div className="min-h-screen racing-gradient-bg">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 racing-red-gradient rounded-sm flex items-center justify-center">
              <span className="text-white font-bold">V</span>
            </div>
            <span className="text-xl font-bold text-white racing-title">VELOCITY RACING</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/cars" className="text-white hover:text-red-400 transition-colors racing-subtitle text-sm">CARS</a>
            <a href="/races" className="text-white hover:text-red-400 transition-colors racing-subtitle text-sm">RACES</a>
            <a href="/news" className="text-white hover:text-red-400 transition-colors racing-subtitle text-sm">NEWS</a>
            <a href="/news" className="text-white hover:text-red-400 transition-colors racing-subtitle text-sm">NEWS</a>
            <a href="/gallery" className="text-white hover:text-red-400 transition-colors racing-subtitle text-sm">GALLERY</a>
          </div>
        </div>
      </nav>

      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Stats, Races, and Featured Car Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <RacingStats />
          <UpcomingRaces />
          <FeaturedCar />
        </div>
      </div>

      {/* Join Elite Section */}
      <JoinElite />

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 racing-red-gradient rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-lg font-bold text-white">VELOCITY RACING</span>
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="/terms" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
            <a href="/contact" className="hover:text-white transition-colors">CONTACT</a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
              <span className="text-white text-sm">f</span>
            </div>
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
              <span className="text-white text-sm">ig</span>
            </div>
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
              <span className="text-white text-sm">tw</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}