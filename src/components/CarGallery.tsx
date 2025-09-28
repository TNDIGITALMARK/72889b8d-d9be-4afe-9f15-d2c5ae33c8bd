'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Expand, X, Download, Share2 } from 'lucide-react'
import { RaceCar } from '@/data/cars'

interface CarGalleryProps {
  car: RaceCar
}

export function CarGallery({ car }: CarGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Create gallery images (using placeholders)
  const galleryImages = [
    { id: 1, title: `${car.name} - Front View`, category: 'Exterior' },
    { id: 2, title: `${car.name} - Side Profile`, category: 'Exterior' },
    { id: 3, title: `${car.name} - Racing Action`, category: 'In Action' },
    { id: 4, title: `${car.name} - Cockpit`, category: 'Interior' },
    { id: 5, title: `${car.name} - Engine Bay`, category: 'Technical' },
    { id: 6, title: `${car.name} - Rear View`, category: 'Exterior' }
  ]

  const nextImage = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <div className="space-y-8 speed-slide">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white racing-title mb-4">Photo Gallery</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore stunning high-resolution images showcasing every angle and detail of the legendary {car.name}
        </p>
      </div>

      {/* Featured Image Carousel */}
      <div className="relative">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-gray-900 to-black flex items-center justify-center">
            <div className="text-center text-white p-8">
              <div className="text-8xl mb-6">🏎️</div>
              <h3 className="text-3xl font-bold mb-2">{galleryImages[currentSlide].title}</h3>
              <p className="text-lg text-gray-300">{galleryImages[currentSlide].category}</p>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 racing-glow"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 racing-glow"
          >
            <ChevronRight size={24} />
          </button>

          {/* Expand Button */}
          <button
            onClick={() => openLightbox(currentSlide)}
            className="absolute top-6 right-6 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          >
            <Expand size={20} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm racing-subtitle">
            {currentSlide + 1} / {galleryImages.length}
          </div>

          {/* Category Badge */}
          <div className="absolute top-6 left-6 bg-red-600/90 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm racing-subtitle">
            {galleryImages[currentSlide].category}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'racing-red-gradient racing-glow'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer racing-card"
            onClick={() => openLightbox(index)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-800 via-gray-800 to-black flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <div className="text-white text-3xl">🏎️</div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

            {/* Category Badge */}
            <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm rounded px-2 py-1 text-xs text-white racing-subtitle">
              {image.category}
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Expand className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Categories */}
      <div className="flex flex-wrap gap-3 justify-center">
        {['All', 'Exterior', 'Interior', 'In Action', 'Technical'].map((category) => (
          <button
            key={category}
            className="px-4 py-2 bg-card/80 border border-border rounded-full text-sm racing-subtitle text-gray-300 hover:text-white hover:border-red-500/50 transition-all duration-300"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center">
          <div className="relative max-w-7xl max-h-full p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-2 -right-2 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors duration-300 z-10"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <div className="relative aspect-[16/10] bg-gradient-to-br from-red-900 via-gray-900 to-black rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="text-9xl mb-8">🏎️</div>
                <h3 className="text-4xl font-bold mb-4">{galleryImages[selectedImage].title}</h3>
                <p className="text-xl text-gray-300">{galleryImages[selectedImage].category}</p>
              </div>

              {/* Navigation in Lightbox */}
              {selectedImage > 0 && (
                <button
                  onClick={() => setSelectedImage(selectedImage - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-all duration-300"
                >
                  <ChevronLeft size={20} />
                </button>
              )}
              {selectedImage < galleryImages.length - 1 && (
                <button
                  onClick={() => setSelectedImage(selectedImage + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-all duration-300"
                >
                  <ChevronRight size={20} />
                </button>
              )}
            </div>

            {/* Image Info */}
            <div className="mt-4 flex items-center justify-between text-white">
              <div>
                <h4 className="text-lg font-bold racing-title">{galleryImages[selectedImage].title}</h4>
                <p className="text-gray-400 text-sm">{galleryImages[selectedImage].category}</p>
              </div>
              <div className="flex items-center space-x-3">
                <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300">
                  <Download size={18} />
                </button>
                <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300">
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm racing-subtitle">
              {selectedImage + 1} of {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}