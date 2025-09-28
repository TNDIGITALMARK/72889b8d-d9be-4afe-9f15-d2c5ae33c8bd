'use client'

import { ArrowRight, Crown, Star, Zap } from 'lucide-react'

const benefits = [
  {
    icon: Crown,
    title: 'Exclusive Access',
    description: 'First access to new releases and limited editions'
  },
  {
    icon: Star,
    title: 'VIP Events',
    description: 'Invitations to private racing events and launches'
  },
  {
    icon: Zap,
    title: 'Performance Insights',
    description: 'Detailed analytics and racing performance data'
  }
]

export function JoinElite() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 checkered-bg opacity-5"></div>
      <div className="absolute top-20 left-20 w-64 h-1 racing-red-gradient opacity-30 rotate-12"></div>
      <div className="absolute bottom-20 right-20 w-48 h-1 racing-gold-gradient opacity-30 -rotate-12"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white racing-title mb-4">
            JOIN THE
            <span className="racing-gold-gradient bg-clip-text text-transparent ml-4">ELITE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Become part of an exclusive community of racing enthusiasts and unlock premium content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="text-center group racing-hover"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-600/20 to-gold-600/20 flex items-center justify-center border border-red-500/30 group-hover:border-gold-500/50 transition-all duration-300 group-hover:racing-glow">
                  <Icon className="w-8 h-8 text-red-400 group-hover:text-gold-400 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white racing-subtitle mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm max-w-sm mx-auto">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-red-600/10 via-gray-900/50 to-gold-600/10 backdrop-blur-sm rounded-3xl p-12 border border-red-500/20 hover:border-gold-500/30 transition-all duration-500">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-flex items-center space-x-3 bg-red-600/20 rounded-full px-6 py-3 mb-6">
                  <Crown className="w-5 h-5 text-gold-400" />
                  <span className="text-sm font-bold text-white racing-subtitle">
                    LIMITED MEMBERSHIP
                  </span>
                  <Crown className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="text-3xl font-black text-white racing-title mb-4">
                  Ready to Experience
                  <br />
                  <span className="racing-red-gradient bg-clip-text text-transparent">
                    Ultimate Performance?
                  </span>
                </h3>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                  Join thousands of racing enthusiasts who trust our expertise in high-performance vehicles.
                  Get exclusive access to the world's most coveted racing machines.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="group racing-red-gradient px-8 py-4 rounded-xl text-white font-bold racing-subtitle flex items-center space-x-3 hover:scale-105 transition-all duration-300 racing-glow min-w-[200px]">
                  <span>JOIN ELITE CLUB</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group bg-transparent border-2 border-gold-500 px-8 py-4 rounded-xl text-gold-400 font-bold racing-subtitle hover:bg-gold-500 hover:text-black transition-all duration-300 min-w-[200px]">
                  <span>LEARN MORE</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-8 mt-8 pt-8 border-t border-gray-800">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white racing-title">10K+</div>
                  <div className="text-xs text-gray-500 racing-subtitle">Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white racing-title">50+</div>
                  <div className="text-xs text-gray-500 racing-subtitle">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white racing-title">24/7</div>
                  <div className="text-xs text-gray-500 racing-subtitle">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}