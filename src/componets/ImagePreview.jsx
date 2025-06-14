import React from 'react'
import Loading from './Loading'

const ImagePreview = (props) => {
  return (
    <div className='mt-12 w-full max-w-5xl relative'>
      {/* Background Geometric Elements */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        <div className="w-4 h-4 bg-red-600 transform rotate-45"></div>
        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
        <div className="w-4 h-4 bg-yellow-400"></div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Original Image Container */}
        <div className='relative'>
          {/* Corner Decorative Elements */}
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-red-600 transform rotate-45 z-10"></div>
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-yellow-400 z-10"></div>
          
          <div className='bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(220,38,38,0.3)] relative overflow-hidden'>
            {/* Header with Geometric Design */}
            <div className='relative bg-black text-white'>
              <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-red-600 to-yellow-400"></div>
              <div className="flex items-center justify-center py-4 relative">
                <div className="absolute left-4 w-3 h-3 bg-red-600"></div>
                <h2 className='text-lg font-black uppercase tracking-[0.2em]'>Original</h2>
                <div className="absolute right-4 w-3 h-3 bg-yellow-400 transform rotate-45"></div>
              </div>
              <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-red-600"></div>
            </div>
            
            {/* Image Content */}
            <div className="relative">
              {props.uploaded ? (
                <div className="relative">
                  <img src={props.uploaded} alt="Original" className='w-full h-80 object-cover'/>
                  {/* Image Overlay Decorations */}
                  <div className="absolute top-2 left-2 w-2 h-2 bg-white opacity-80"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-white opacity-80 rounded-full"></div>
                </div>
              ) : (
                <div className='flex items-center justify-center h-80 bg-zinc-100 relative'>
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-dashed border-black bg-white mx-auto mb-4 flex items-center justify-center">
                      <div className="w-6 h-6 bg-red-600 transform rotate-45"></div>
                    </div>
                    <p className="text-black font-bold uppercase tracking-wide text-sm">No Image Selected</p>
                  </div>
                  {/* Corner accents for empty state */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-red-600 opacity-30"></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-red-600 opacity-30 transform rotate-45"></div>
                </div>
              )}
            </div>
            
            {/* Bottom Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-red-600 via-black to-red-600"></div>
          </div>
        </div>

        {/* Enhanced Image Container */}
        <div className='relative'>
          {/* Corner Decorative Elements */}
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-blue-600 rounded-full z-10"></div>
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-black z-10"></div>
          
          <div className='bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(37,99,235,0.3)] relative overflow-hidden'>
            {/* Header with Geometric Design */}
            <div className='relative bg-black text-white'>
              <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-blue-600 to-black"></div>
              <div className="flex items-center justify-center py-4 relative">
                <div className="absolute left-4 w-3 h-3 bg-blue-600 rounded-full"></div>
                <h2 className='text-lg font-black uppercase tracking-[0.2em]'>Enhanced</h2>
                <div className="absolute right-4 w-3 h-3 bg-blue-600"></div>
              </div>
              <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-black to-blue-600"></div>
            </div>
            
            {/* Image Content */}
            <div className="relative">
              {props.enhanced && !props.loading ? (
                <div className="relative">
                  <img src={props.enhanced} alt="Enhanced" className='w-full h-80 object-cover'/>
                  {/* Image Overlay Decorations */}
                  <div className="absolute top-2 left-2 w-2 h-2 bg-white opacity-80 rounded-full"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-white opacity-80"></div>
                  {/* Success indicator */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white"></div>
                </div>
              ) : props.loading ? (
                <div className="h-80 flex items-center justify-center bg-zinc-100 relative">
                  <Loading/>
                  {/* Loading state decorations */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-blue-600 opacity-30 animate-pulse"></div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-blue-600 opacity-30 animate-pulse delay-100 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-3 h-3 bg-blue-600 opacity-30 animate-pulse delay-200"></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-blue-600 opacity-30 animate-pulse delay-300 transform rotate-45"></div>
                </div>
              ) : (
                <div className='flex items-center justify-center h-80 bg-zinc-100 relative'>
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-dashed border-black bg-white mx-auto mb-4 flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                    </div>
                    <p className="text-black font-bold uppercase tracking-wide text-sm">Awaiting Enhancement</p>
                  </div>
                  {/* Corner accents for empty state */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-blue-600 opacity-30 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-blue-600 opacity-30"></div>
                </div>
              )}
            </div>
            
            {/* Bottom Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-blue-600 via-black to-blue-600"></div>
          </div>
        </div>
      </div>

      {/* Central Connecting Element */}
      <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="bg-white border-4 border-black w-12 h-12 flex items-center justify-center shadow-lg">
          <div className="text-black font-black text-xl">→</div>
        </div>
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 transform rotate-45"></div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="flex justify-center mt-8">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-600"></div>
          <div className="w-8 h-1 bg-black mt-1"></div>
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <div className="w-8 h-1 bg-black mt-1"></div>
          <div className="w-3 h-3 bg-yellow-400 transform rotate-45"></div>
        </div>
      </div>
    </div>
  )
}

export default ImagePreview