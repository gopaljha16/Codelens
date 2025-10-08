import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap, Sparkles, Play, Eye, Layers } from "lucide-react";

export default function Hero() {
  const scrollToSection = () => {
    const target = document.getElementById("algorithms");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-violet-50 dark:from-slate-950 dark:via-slate-900 dark:to-violet-950/50">
      {/* Professional animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-violet-400/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Professional badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 px-6 py-3 text-sm font-medium text-white mb-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-violet-400/20">
            <Eye className="h-4 w-4" />
            Professional Algorithm Visualization Platform
            <Sparkles className="h-4 w-4" />
          </div>
          
          {/* Main heading with CodeLens branding */}
          <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400 animate-gradient-x">
              CodeLens
            </span>
            <br />
            <span className="text-3xl md:text-5xl text-slate-700 dark:text-slate-300 font-semibold">
              Visualize Code Like Never Before
            </span>
          </h1>
          
          {/* Professional description */}
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-5xl mb-12 leading-relaxed">
            Experience the future of algorithm learning with 
            <span className="text-violet-600 dark:text-violet-400 font-semibold"> cutting-edge visualizations</span>, 
            real-time performance analysis, and 
            <span className="text-purple-600 dark:text-purple-400 font-semibold"> interactive code exploration</span>.
          </p>
          
          {/* Professional feature highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-violet-200/50 dark:border-violet-800/50 hover:shadow-xl transition-all duration-300">
              <Play className="h-5 w-5 text-emerald-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Real-time Execution</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-violet-200/50 dark:border-violet-800/50 hover:shadow-xl transition-all duration-300">
              <Zap className="h-5 w-5 text-amber-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Performance Racing</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-violet-200/50 dark:border-violet-800/50 hover:shadow-xl transition-all duration-300">
              <Layers className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Multi-layer Analysis</span>
            </div>
          </div>
          
          {/* Professional action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white font-semibold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform border border-violet-400/20"
            >
              <Link to="/race" className="flex items-center gap-3">
                <Zap className="h-5 w-5" />
                Launch Race Mode
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-violet-300 dark:border-violet-700 text-slate-900 dark:text-white hover:bg-violet-50 dark:hover:bg-violet-950/50 font-semibold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform backdrop-blur-sm"
            >
              <div onClick={scrollToSection} className="flex items-center gap-3">
                <Code2 className="h-5 w-5" />
                Explore Algorithms
                <ArrowRight className="h-4 w-4" />
              </div>
            </Button>
          </div>
          
          {/* Professional stats section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
            <div className="text-center p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-xl border border-violet-200/50 dark:border-violet-800/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-3">15+</div>
              <div className="text-slate-600 dark:text-slate-400 font-semibold">Algorithms</div>
            </div>
            <div className="text-center p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-xl border border-violet-200/50 dark:border-violet-800/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-3">8+</div>
              <div className="text-slate-600 dark:text-slate-400 font-semibold">Data Structures</div>
            </div>
            <div className="text-center p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-xl border border-violet-200/50 dark:border-violet-800/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">∞</div>
              <div className="text-slate-600 dark:text-slate-400 font-semibold">Possibilities</div>
            </div>
            <div className="text-center p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-xl border border-violet-200/50 dark:border-violet-800/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">100%</div>
              <div className="text-slate-600 dark:text-slate-400 font-semibold">Interactive</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
