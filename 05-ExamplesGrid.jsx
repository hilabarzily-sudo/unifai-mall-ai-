import React from "react";

// EXAMPLES GRID – Pinterest-style Asymmetric Layout
// Visual outputs from AI tools
// Fade + slide animations
// Click to open Example Viewer (Sora-style)

export default function ExamplesGrid({ examples, onSelectExample }) {
  // Mock data if not provided
  const examplesList = examples || [
    { id: 1, image: "🖼️", prompt: "Cyberpunk cityscape at golden hour with neon lights", tool: "Midjourney", type: "image", size: "large" },
    { id: 2, image: "🌅", prompt: "Mountain landscape with aurora borealis", tool: "DALL-E", type: "image", size: "medium" },
    { id: 3, image: "🎭", prompt: "Portrait of a futuristic warrior", tool: "Midjourney", type: "image", size: "medium" },
    { id: 4, image: "🏛️", prompt: "Ancient temple covered in jungle vines", tool: "Stable Diffusion", type: "image", size: "large" },
    { id: 5, image: "🚀", prompt: "Space station orbiting a gas giant", tool: "Midjourney", type: "image", size: "medium" },
    { id: 6, image: "🦄", prompt: "Magical creature in enchanted forest", tool: "Leonardo AI", type: "image", size: "small" },
    { id: 7, image: "🌊", prompt: "Underwater coral reef with bioluminescent fish", tool: "Midjourney", type: "image", size: "medium" },
    { id: 8, image: "🏙️", prompt: "Futuristic megacity with flying cars", tool: "Runway", type: "video", size: "large" },
    { id: 9, image: "🎨", prompt: "Abstract art with vibrant geometric patterns", tool: "DALL-E", type: "image", size: "small" },
    { id: 10, image: "🌌", prompt: "Galaxy with swirling nebula clouds", tool: "Midjourney", type: "image", size: "medium" },
  ];

  // Calculate grid column span based on size
  const getGridClass = (size) => {
    switch(size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-1 md:row-span-1";
      case "small":
        return "md:col-span-1";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f7fb] to-[#eef1f8] text-gray-900 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/60 border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-xl font-semibold">גלריית דוגמאות</h1>
          <p className="text-sm text-gray-600 mt-1">תוצרים מכלי AI שונים</p>
        </div>
      </header>

      {/* Pinterest Grid */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {examplesList.map((example, idx) => (
            <article
              key={example.id}
              onClick={() => onSelectExample(example)}
              className={`group rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer ${getGridClass(example.size)} animate-fade-in-up`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Image Preview */}
              <div className="relative h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                <div className="text-6xl md:text-8xl">{example.image}</div>
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                  <div className="w-full">
                    <p className="text-white text-sm font-medium mb-1 line-clamp-2">
                      {example.prompt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/80">{example.tool}</span>
                      {example.type === "video" && (
                        <span className="px-2 py-0.5 rounded-md bg-white/20 text-white text-xs">
                          🎬 Video
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Type Badge */}
                {example.type === "video" && (
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs">
                    ▶ Video
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 flex justify-center">
          <button className="px-6 py-3 rounded-xl bg-white/60 backdrop-blur-xl border border-white/30 hover:bg-white hover:shadow-lg transition-all text-sm font-medium">
            טען עוד דוגמאות
          </button>
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

