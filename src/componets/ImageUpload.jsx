import React from 'react';

const ImageUpload = (props) => {
  const showImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      props.UploadImageHandler(file);
    }
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Outer glow container */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 animate-pulse"></div>
      
      {/* Main container */}
      <div className="relative rounded-2xl p-5 w-full"
           style={{
             background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(26, 10, 46, 0.8) 50%, rgba(15, 52, 96, 0.7) 100%)',
             backdropFilter: 'blur(10px)',
             border: '1px solid rgba(0, 255, 255, 0.3)',
             boxShadow: '0 0 30px rgba(0, 255, 255, 0.2), inset 0 0 20px rgba(0, 255, 255, 0.05)'
           }}>
        
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none rounded-2xl overflow-hidden">
          <div className="absolute inset-0"
               style={{
                 backgroundImage: `
                   radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                   radial-gradient(circle at 80% 80%, rgba(255, 0, 255, 0.3) 1px, transparent 1px),
                   linear-gradient(45deg, transparent 40%, rgba(0, 255, 255, 0.1) 50%, transparent 60%)
                 `,
                 backgroundSize: '30px 30px, 30px 30px, 100px 100px'
               }}>
          </div>
        </div>

        <label
          htmlFor="fileInput"
          className="relative block w-full cursor-pointer rounded-lg p-10 text-center transition-all duration-300 group"
          style={{
            border: '2px dashed rgba(0, 255, 255, 0.4)',
            background: 'linear-gradient(45deg, rgba(0, 255, 255, 0.05), rgba(255, 0, 255, 0.05))',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.border = '2px dashed rgba(0, 255, 255, 0.8)';
            e.target.style.background = 'linear-gradient(45deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))';
            e.target.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.border = '2px dashed rgba(0, 255, 255, 0.4)';
            e.target.style.background = 'linear-gradient(45deg, rgba(0, 255, 255, 0.05), rgba(255, 0, 255, 0.05))';
            e.target.style.boxShadow = 'none';
          }}
        >
          
          {/* Scanning animation overlay */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
            <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
                 style={{
                   animation: 'uploadScan 4s linear infinite'
                 }}>
            </div>
          </div>

          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={showImageHandler}
          />

          <div className="relative flex flex-col items-center justify-center">
            {/* Upload icon with glow */}
            <div className="mb-4 relative">
              <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-30 animate-pulse"></div>
              <div className="relative w-16 h-16 border-2 border-cyan-400 rounded-full flex items-center justify-center"
                   style={{
                     background: 'radial-gradient(circle, rgba(0, 255, 255, 0.1), transparent)',
                     boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
                   }}>
                <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
            </div>

            {/* Text with terminal styling */}
            <p className="text-lg font-medium font-mono tracking-wider"
               style={{
                 background: 'linear-gradient(90deg, #00ffff, #ff00ff, #ffff00, #00ffff)',
                 WebkitBackgroundClip: 'text',
                 WebkitTextFillColor: 'transparent',
                 backgroundSize: '200% 100%',
                 animation: 'textShimmer 3s ease-in-out infinite',
                 textShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
               }}>
              &gt; CLICK OR DRAG TO UPLOAD YOUR IMAGE &lt;
            </p>

            {/* Animated dots */}
            <div className="flex space-x-1 mt-3">
              {[0, 1, 2].map(i => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
                  style={{
                    animation: `dotPulse 1.5s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-cyan-400 opacity-60"></div>
          <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-cyan-400 opacity-60"></div>
          <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-cyan-400 opacity-60"></div>
          <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-cyan-400 opacity-60"></div>
        </label>
      </div>

      <style jsx>{`
        @keyframes uploadScan {
          0% { top: 0%; opacity: 1; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        
        @keyframes textShimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes dotPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
};

export default ImageUpload;