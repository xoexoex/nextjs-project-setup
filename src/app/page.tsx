"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function PresentationPage() {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleImageError = (imageKey: string) => {
    setImageErrors(prev => ({ ...prev, [imageKey]: true }));
  };

  const fallbackImage = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/712d6924-0b25-4a6e-a119-ba32cc904e90.png";

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-black to-red-950">
      {/* Header */}
      <header className="relative z-20 bg-black/40 backdrop-blur-sm border-b border-yellow-600/30">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-yellow-400 tracking-wider">
              NEWMT2
            </h1>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-yellow-400 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-yellow-400"></div>
                <div className="w-full h-0.5 bg-yellow-400"></div>
                <div className="w-full h-0.5 bg-yellow-400"></div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-white hover:text-yellow-400 transition-colors">
                Home
              </a>
              <a href="#features" className="text-white hover:text-yellow-400 transition-colors">
                Features
              </a>
              <a href="#systems" className="text-white hover:text-yellow-400 transition-colors">
                Systems
              </a>
              <a href="#contact" className="text-white hover:text-yellow-400 transition-colors">
                Contact
              </a>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-yellow-600/30">
              <div className="flex flex-col space-y-3 pt-4">
                <a href="#hero" className="text-white hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </a>
                <a href="#features" className="text-white hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Features
                </a>
                <a href="#systems" className="text-white hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Systems
                </a>
                <a href="#contact" className="text-white hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={imageErrors.hero ? fallbackImage : "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8fea6809-b49e-4318-b5ba-f7eca3b73344.png"}
            alt="Epic medieval fantasy battlefield with warriors and magical creatures in dramatic lighting"
            className="w-full h-full object-cover"
            onError={() => handleImageError('hero')}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-wider leading-tight">
            NEWMT2 SERVER PRESENTATION
          </h2>
          
          {/* Country Flags Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-2 md:gap-4 mb-8 md:mb-12 max-w-2xl mx-auto">
            {[
              { code: "GB", name: "United Kingdom" },
              { code: "PL", name: "Poland" },
              { code: "RO", name: "Romania" },
              { code: "HU", name: "Hungary" },
              { code: "DE", name: "Germany" },
              { code: "CZ", name: "Czech Republic" },
              { code: "TR", name: "Turkey" },
              { code: "GR", name: "Greece" },
              { code: "PT", name: "Portugal" },
              { code: "FR", name: "France" },
              { code: "ES", name: "Spain" },
              { code: "IT", name: "Italy" }
            ].map((country, index) => (
              <div key={index} className="w-10 h-6 md:w-12 md:h-8 bg-white/20 rounded border border-white/30 flex items-center justify-center">
                <span className="text-xs font-semibold">{country.code}</span>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-8 mb-6 md:mb-8 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Welcome to the NEWMT2 international server!</h3>
            <p className="text-sm md:text-lg mb-3 md:mb-4 leading-relaxed">
              Our server builds on the basic atmosphere, which is not full of complicated systems. 
              The necessary systems, such as the <span className="font-bold">offline shop</span> and{' '}
              <span className="font-bold">item finder</span>, are of course also provided by us. In addition, 
              a <span className="font-bold">PvP Battle Arena</span> has been created where Kingdoms, teams and 
              individuals can compete against each other for various rewards.
            </p>
            <p className="text-sm md:text-lg leading-relaxed">
              Our goal is to provide the best gaming experience for all players! Do 
              you want to be part of our community? Join us now and discover the 
              exciting world of NEWMT2!
            </p>
          </div>

          <Button 
            size="lg" 
            className="bg-red-700 hover:bg-red-800 text-yellow-100 border border-yellow-600 px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50"
          >
            Join Server Now
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-16">Server Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-40 md:h-48 overflow-hidden">
                <img
                  src={imageErrors.feature1 ? fallbackImage : "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/933d30e7-b9f5-47f1-9787-f6807cb19d9b.png"}
                  alt="Epic PvP battles in medieval arena with spectators and magical effects"
                  className="w-full h-full object-cover"
                  onError={() => handleImageError('feature1')}
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">PvP Battle Arena</h3>
                <p className="text-sm md:text-base text-gray-300">
                  Compete in intense player vs player battles. Kingdoms, teams, and individuals 
                  can fight for glory and valuable rewards in our dedicated arena system.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-40 md:h-48 overflow-hidden">
                <img
                  src={imageErrors.feature2 ? fallbackImage : "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5edb8cc1-33dc-43a6-8ab6-38828c196c73.png"}
                  alt="Magical marketplace with floating items and mystical merchant stalls"
                  className="w-full h-full object-cover"
                  onError={() => handleImageError('feature2')}
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Offline Shop & Item Finder</h3>
                <p className="text-sm md:text-base text-gray-300">
                  Trade items even when offline with our advanced shop system. Find rare items 
                  easily with our comprehensive item finder tool.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-40 md:h-48 overflow-hidden">
                <img
                  src={imageErrors.feature3 ? fallbackImage : "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/651b15f1-a036-406a-9c23-555f5ab499e4.png"}
                  alt="International gaming community with players from different countries celebrating"
                  className="w-full h-full object-cover"
                  onError={() => handleImageError('feature3')}
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">International Community</h3>
                <p className="text-sm md:text-base text-gray-300">
                  Join players from across Europe and beyond. Our international server 
                  welcomes gamers from all countries to create lasting friendships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Systems Section */}
      <section id="systems" className="py-12 md:py-20 bg-gradient-to-b from-red-950/50 to-black/80">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-8 md:mb-16">Game Systems</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
              {/* System 1 */}
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-red-800/50">
                <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3 md:mb-4">Kingdom Wars</h3>
                <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                  Engage in massive kingdom vs kingdom battles. Build alliances, strategize attacks, 
                  and defend your territory in epic large-scale warfare.
                </p>
                <ul className="text-sm md:text-base text-gray-300 space-y-1 md:space-y-2">
                  <li>• Guild vs Guild combat</li>
                  <li>• Territory control system</li>
                  <li>• Strategic alliance mechanics</li>
                  <li>• Seasonal kingdom rankings</li>
                </ul>
              </div>

              {/* System 2 */}
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-red-800/50">
                <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3 md:mb-4">Character Progression</h3>
                <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                  Develop your character through multiple progression paths. Master different skills, 
                  unlock powerful abilities, and customize your playstyle.
                </p>
                <ul className="text-sm md:text-base text-gray-300 space-y-1 md:space-y-2">
                  <li>• Multiple character classes</li>
                  <li>• Skill tree customization</li>
                  <li>• Equipment enhancement</li>
                  <li>• Achievement system</li>
                </ul>
              </div>

              {/* System 3 */}
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-red-800/50">
                <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3 md:mb-4">Trading Economy</h3>
                <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                  Participate in a player-driven economy. Craft items, trade resources, 
                  and build your merchant empire in our dynamic marketplace.
                </p>
                <ul className="text-sm md:text-base text-gray-300 space-y-1 md:space-y-2">
                  <li>• Player-to-player trading</li>
                  <li>• Crafting and resource gathering</li>
                  <li>• Market price fluctuations</li>
                  <li>• Merchant guild system</li>
                </ul>
              </div>

              {/* System 4 */}
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-red-800/50">
                <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3 md:mb-4">Events & Dungeons</h3>
                <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                  Challenge yourself in special events and dungeons. Face powerful bosses, 
                  solve puzzles, and earn exclusive rewards.
                </p>
                <ul className="text-sm md:text-base text-gray-300 space-y-1 md:space-y-2">
                  <li>• Weekly special events</li>
                  <li>• Challenging dungeon raids</li>
                  <li>• Boss battle mechanics</li>
                  <li>• Exclusive event rewards</li>
                </ul>
              </div>
            </div>

            {/* Server Stats */}
            <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6 text-center border border-yellow-600/50">
              <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4 md:mb-6">Server Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400">5000+</div>
                  <div className="text-sm md:text-base text-gray-300">Active Players</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400">24/7</div>
                  <div className="text-sm md:text-base text-gray-300">Server Uptime</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400">12</div>
                  <div className="text-sm md:text-base text-gray-300">Countries</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400">99.9%</div>
                  <div className="text-sm md:text-base text-gray-300">Stability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black py-8 md:py-12 border-t border-yellow-600/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4 md:mb-6">Ready to Begin Your Adventure?</h2>
          <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Join thousands of players in the ultimate medieval fantasy experience. 
            Create your character, build your kingdom, and forge your legend!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 md:mb-8">
            <Button 
              size="lg" 
              className="bg-red-700 hover:bg-red-800 text-yellow-100 border border-yellow-600 px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50 w-full sm:w-auto"
            >
              Start Playing Today
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="border-yellow-600 text-yellow-400 hover:bg-red-700 hover:text-yellow-100 px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl font-semibold rounded-lg transition-all duration-300 w-full sm:w-auto"
            >
              Download Client
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8 max-w-4xl mx-auto">
            <div className="bg-red-950/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-red-800/50">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">Server Info</h4>
              <p className="text-sm text-gray-300">Server: NEWMT2 International</p>
              <p className="text-sm text-gray-300">Version: Latest Stable</p>
              <p className="text-sm text-gray-300">Language: Multi-language</p>
            </div>
            <div className="bg-red-950/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-red-800/50">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">Community</h4>
              <p className="text-sm text-gray-300">Discord: Join our community</p>
              <p className="text-sm text-gray-300">Forum: Official discussions</p>
              <p className="text-sm text-gray-300">Support: 24/7 assistance</p>
            </div>
            <div className="bg-red-950/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-red-800/50">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">Getting Started</h4>
              <p className="text-sm text-gray-300">1. Download the client</p>
              <p className="text-sm text-gray-300">2. Create your account</p>
              <p className="text-sm text-gray-300">3. Choose your kingdom</p>
            </div>
          </div>
          
          <div className="border-t border-yellow-600/30 pt-6 md:pt-8">
            <p className="text-sm md:text-base text-gray-400">
              © 2024 NEWMT2 International Server. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
