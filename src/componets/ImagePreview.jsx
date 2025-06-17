// import Loading from "./Loading";

// const ImagePreview = (props) => {
//     const downloadImage = () => {
//         const link = document.createElement("a");
//         link.href = props.enhanced;
//         link.download = "enhanced-image.jpg"; // You can customize the filename
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     return (
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
//             {/* Original Image */}
//             <div className="bg-white shadow-lg rounded-xl overflow-hidden">
//                 <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
//                     Original Image
//                 </h2>

//                 {props.uploaded ? (
//                     <img
//                         src={props.uploaded}
//                         alt="Original"
//                         className="w-full h-full object-cover"
//                     />
//                 ) : (
//                     <div className="flex items-center justify-center h-80 bg-gray-200">
//                         No Image Selected
//                     </div>
//                 )}
//             </div>

//             {/* Enhanced Image */}
//             <div className="bg-white shadow-lg rounded-xl overflow-hidden">
//                 <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
//                     Enhanced Image
//                 </h2>

//                 {props.enhanced && !props.loading && (
//                     <img
//                         src={props.enhanced}
//                         alt="Enhanced"
//                         className="w-full h-full object-cover"
//                     />
//                 )}

//                 {props.loading ? (
//                     <Loading />
//                 ) : (
//                     !props.enhanced && (
//                         <div className="flex items-center justify-center h-80 bg-gray-200">
//                             No Enhanced Image
//                         </div>
//                     )
//                 )}
//             </div>

//             {/* Download Button */}
//             {props.enhanced && !props.loading && (
//                 <button
//                     onClick={downloadImage}
//                     className="bg-gray-600 text-amber-300 p-5 border-8 border-black hover:bg-gray-900 animate-bounce col-span-1 md:col-span-2 mx-auto"
//                 >
//                     Download Image
//                 </button>
//             )}
//         </div>
//     );
// };

// export default ImagePreview;







import Loading from "./Loading";

const ImagePreview = (props) => {
    const downloadImage = () => {
        const link = document.createElement("a");
        link.href = props.enhanced;
        link.download = "enhanced-image.jpg"; // You can customize the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {/* Original Image */}
            <div className="relative group">
                {/* Outer glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                
                <div className="relative rounded-xl overflow-hidden"
                     style={{
                       background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(26, 10, 46, 0.9) 100%)',
                       border: '1px solid rgba(0, 255, 255, 0.3)',
                       boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)'
                     }}>
                    
                    {/* Header with neon effect */}
                    <h2 className="text-xl font-semibold text-center py-3 relative overflow-hidden"
                        style={{
                          background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.9), rgba(26, 10, 46, 0.9), rgba(0, 0, 0, 0.9))',
                          color: '#00ffff',
                          textShadow: '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.4)',
                          borderBottom: '1px solid rgba(0, 255, 255, 0.3)',
                          fontFamily: 'monospace',
                          letterSpacing: '2px'
                        }}>
                        ORIGINAL IMAGE
                        
                        {/* Animated scan line */}
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                             style={{
                               animation: 'headerScan 3s linear infinite'
                             }}>
                        </div>
                    </h2>

                    {/* Image container with proper aspect ratio */}
                    <div className="relative min-h-80">
                        {props.uploaded ? (
                            <div className="relative">
                                {/* Corner decorations */}
                                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400 opacity-60 z-10"></div>
                                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400 opacity-60 z-10"></div>
                                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400 opacity-60 z-10"></div>
                                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400 opacity-60 z-10"></div>
                                
                                <img
                                    src={props.uploaded}
                                    alt="Original"
                                    className="w-full h-auto object-contain max-h-96"
                                    style={{
                                      filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.3))'
                                    }}
                                />
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-80"
                                 style={{
                                   background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.1), transparent)',
                                 }}>
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 border-2 border-dashed border-cyan-400 rounded-full flex items-center justify-center opacity-50">
                                        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-cyan-400 font-mono opacity-60">NO IMAGE SELECTED</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Enhanced Image */}
            <div className="relative group">
                {/* Outer glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                
                <div className="relative rounded-xl overflow-hidden"
                     style={{
                       background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(46, 10, 26, 0.9) 100%)',
                       border: '1px solid rgba(255, 0, 255, 0.3)',
                       boxShadow: '0 0 20px rgba(255, 0, 255, 0.2)'
                     }}>
                    
                    {/* Header with neon effect */}
                    <h2 className="text-xl font-semibold text-center py-3 relative overflow-hidden"
                        style={{
                          background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.9), rgba(46, 10, 26, 0.9), rgba(0, 0, 0, 0.9))',
                          color: '#ff00ff',
                          textShadow: '0 0 10px rgba(255, 0, 255, 0.8), 0 0 20px rgba(255, 0, 255, 0.4)',
                          borderBottom: '1px solid rgba(255, 0, 255, 0.3)',
                          fontFamily: 'monospace',
                          letterSpacing: '2px'
                        }}>
                        ENHANCED IMAGE
                        
                        {/* Animated scan line */}
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent"
                             style={{
                               animation: 'headerScan 3s linear infinite'
                             }}>
                        </div>
                    </h2>

                    {/* Image container with proper aspect ratio */}
                    <div className="relative min-h-80">
                        {props.enhanced && !props.loading && (
                            <div className="relative">
                                {/* Corner decorations */}
                                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-pink-400 opacity-60 z-10"></div>
                                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-pink-400 opacity-60 z-10"></div>
                                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-pink-400 opacity-60 z-10"></div>
                                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-pink-400 opacity-60 z-10"></div>
                                
                                <img
                                    src={props.enhanced}
                                    alt="Enhanced"
                                    className="w-full h-auto object-contain max-h-96"
                                    style={{
                                      filter: 'drop-shadow(0 0 10px rgba(255, 0, 255, 0.3))'
                                    }}
                                />
                            </div>
                        )}

                        {props.loading ? (
                            <div className="flex items-center justify-center h-80">
                                <Loading />
                            </div>
                        ) : (
                            !props.enhanced && (
                                <div className="flex items-center justify-center h-80"
                                     style={{
                                       background: 'radial-gradient(circle at center, rgba(255, 0, 255, 0.1), transparent)',
                                     }}>
                                    <div className="text-center">
                                        <div className="w-16 h-16 mx-auto mb-4 border-2 border-dashed border-pink-400 rounded-full flex items-center justify-center opacity-50">
                                            <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <p className="text-pink-400 font-mono opacity-60">NO ENHANCED IMAGE</p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>

            {/* Download Button */}
            {props.enhanced && !props.loading && (
                <div className="col-span-1 md:col-span-2 flex justify-center">
                    <div className="relative group">
                        {/* Button glow effect */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                        
                        <button
                            onClick={downloadImage}
                            className="relative px-8 py-4 font-mono font-bold text-lg tracking-wider transition-all duration-300 rounded-lg"
                            style={{
                              background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(51, 51, 0, 0.8))',
                              color: '#ffff00',
                              textShadow: '0 0 10px rgba(255, 255, 0, 0.8)',
                              border: '2px solid rgba(255, 255, 0, 0.5)',
                              boxShadow: '0 0 20px rgba(255, 255, 0, 0.3), inset 0 0 20px rgba(255, 255, 0, 0.1)',
                              animation: 'downloadPulse 2s ease-in-out infinite'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.transform = 'scale(1.05)';
                              e.target.style.boxShadow = '0 0 30px rgba(255, 255, 0, 0.5), inset 0 0 20px rgba(255, 255, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.transform = 'scale(1)';
                              e.target.style.boxShadow = '0 0 20px rgba(255, 255, 0, 0.3), inset 0 0 20px rgba(255, 255, 0, 0.1)';
                            }}
                        >
                            &gt; DOWNLOAD IMAGE &lt;
                            
                            {/* Download icon */}
                            <svg className="inline w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            
        </div>
    );
};

export default ImagePreview;