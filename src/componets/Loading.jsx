import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-full relative'>
      {/* Central Loading Animation */}
      <div className="relative">
        {/* Outer Geometric Ring */}
        <div className='animate-spin border-4 border-black border-t-red-600 border-r-blue-600 border-b-yellow-400 w-16 h-16 absolute'></div>
        
        {/* Inner Geometric Elements */}
        <div className="w-16 h-16 flex items-center justify-center">
          <div className="relative">
            {/* Rotating Squares */}
            <div className="absolute inset-0 animate-pulse">
              <div className="w-3 h-3 bg-red-600 absolute top-0 left-0 animate-bounce"></div>
              <div className="w-3 h-3 bg-blue-600 absolute top-0 right-0 rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-yellow-400 absolute bottom-0 left-0 transform rotate-45 animate-bounce delay-200"></div>
              <div className="w-3 h-3 bg-black absolute bottom-0 right-0 animate-bounce delay-300"></div>
            </div>
            
            {/* Central Element */}
            <div className="w-6 h-6 bg-white border-2 border-black flex items-center justify-center animate-pulse">
              <div className="w-2 h-2 bg-gradient-to-br from-red-600 to-blue-600"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Orbiting Elements */}
      <div className="absolute inset-0 animate-spin" style={{animationDuration: '3s'}}>
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
            <div className="w-2 h-2 bg-red-600"></div>
          </div>
          <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
            <div className="w-2 h-2 bg-yellow-400 transform rotate-45"></div>
          </div>
          <div className="absolute left-0 top-1/2 transform -translate-x-2 -translate-y-1/2">
            <div className="w-2 h-2 bg-black"></div>
          </div>
        </div>
      </div>
      
      {/* Loading Text */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 bg-red-600 animate-pulse"></div>
          <span className="text-xs font-black uppercase tracking-[0.2em] text-black">Processing</span>
          <div className="w-1 h-1 bg-blue-600 animate-pulse delay-100 rounded-full"></div>
        </div>
      </div>
      
      {/* Corner Accent Elements */}
      <div className="absolute -top-4 -left-4 w-2 h-2 bg-red-600 opacity-50 animate-ping"></div>
      <div className="absolute -top-4 -right-4 w-2 h-2 bg-blue-600 opacity-50 animate-ping delay-75 rounded-full"></div>
      <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-yellow-400 opacity-50 animate-ping delay-150 transform rotate-45"></div>
      <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-black opacity-50 animate-ping delay-200"></div>
    </div>
  )
}

export default Loading