import { Info, Mail, Github, Linkedin, Twitter, Instagram, Heart, Code, ExternalLink, Eye, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const showComingSoonToast = (event: React.MouseEvent) => {
    event.preventDefault();
    toast.success("Coming Soon!", {
      icon: <Info className="h-5 w-5 text-violet-500" />,
      duration: 2500,
      style: {
        borderRadius: "16px",
        border: "1px solid rgba(139, 92, 246, 0.3)",
        background: "white",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        padding: "16px",
        fontWeight: "500",
      },
    });
  };

  return (
    <>
      <footer className="bg-gradient-to-br from-slate-50 via-white to-violet-50 dark:from-slate-950 dark:via-slate-900 dark:to-violet-950/50 border-t border-violet-200/30 dark:border-violet-800/30">
        <div className="container mx-auto px-4 py-16">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand section */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl border border-violet-400/20">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
                  CodeLens
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md text-lg leading-relaxed">
                Professional algorithm visualization platform that transforms how developers understand and learn Data Structures & Algorithms.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500">
                <span>Crafted with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
                <span>by</span>
                <span className="font-bold text-violet-600 dark:text-violet-400">Gopal Jha</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-6 text-lg">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/race" className="text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium flex items-center gap-2 group">
                    <Eye className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    Race Mode
                  </a>
                </li>
                <li>
                  <a href="/algorithms/sorting" className="text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium flex items-center gap-2 group">
                    <Sparkles className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    Sorting Algorithms
                  </a>
                </li>
                <li>
                  <a href="/algorithms/searching" className="text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium flex items-center gap-2 group">
                    <Code className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    Search Algorithms
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium flex items-center gap-2 group">
                    <Info className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-6 text-lg">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://github.com/gopaljha16" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors flex items-center gap-2 font-medium group"
                  >
                    <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    Source Code
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                </li>
                <li>
                  <a 
                    onClick={(event) => showComingSoonToast(event)} 
                    className="cursor-pointer text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors flex items-center gap-2 font-medium group"
                  >
                    <Code className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    Documentation
                  </a>
                </li>
                <li>
                  <Dialog>
                    <DialogTrigger asChild>
                      <span className="cursor-pointer text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors flex items-center gap-2 font-medium group">
                        <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        Contact
                      </span>
                    </DialogTrigger>
                    <DialogContent className="max-w-md p-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl rounded-3xl border border-violet-200/50 dark:border-violet-800/50">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-lg">G</span>
                          </div>
                          Connect with Gopal
                        </DialogTitle>
                        <DialogDescription className="text-slate-600 dark:text-slate-400 text-base">
                          I'm the developer behind CodeLens. Let's connect and discuss algorithms, coding, or anything tech!
                        </DialogDescription>
                      </DialogHeader>

                      <div className="grid grid-cols-1 gap-4 mt-8">
                        <Button variant="outline" asChild className="justify-start h-14 rounded-2xl border-2 hover:border-violet-300 hover:bg-violet-50 dark:hover:bg-violet-950/30">
                          <a href="mailto:gopaljha16@gmail.com" className="flex items-center gap-4">
                            <Mail className="h-6 w-6 text-red-500" />
                            <div className="text-left">
                              <div className="font-semibold text-base">Email</div>
                              <div className="text-sm text-slate-500">gopaljha16@gmail.com</div>
                            </div>
                          </a>
                        </Button>
                        
                        <Button variant="outline" asChild className="justify-start h-14 rounded-2xl border-2 hover:border-violet-300 hover:bg-violet-50 dark:hover:bg-violet-950/30">
                          <a href="https://github.com/gopaljha16" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                            <Github className="h-6 w-6 text-slate-800 dark:text-white" />
                            <div className="text-left">
                              <div className="font-semibold text-base">GitHub</div>
                              <div className="text-sm text-slate-500">@gopaljha16</div>
                            </div>
                          </a>
                        </Button>
                        
                        <Button variant="outline" asChild className="justify-start h-14 rounded-2xl border-2 hover:border-violet-300 hover:bg-violet-50 dark:hover:bg-violet-950/30">
                          <a href="https://www.linkedin.com/in/gopal-jha-229a2b243/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                            <Linkedin className="h-6 w-6 text-blue-600" />
                            <div className="text-left">
                              <div className="font-semibold text-base">LinkedIn</div>
                              <div className="text-sm text-slate-500">Professional Profile</div>
                            </div>
                          </a>
                        </Button>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <Button variant="outline" asChild className="justify-center h-14 rounded-2xl border-2 hover:border-violet-300 hover:bg-violet-50 dark:hover:bg-violet-950/30">
                            <a href="https://x.com/gopaljha_dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                              <Twitter className="h-5 w-5 text-blue-400" />
                              <span className="font-semibold">Twitter</span>
                            </a>
                          </Button>
                          
                          <Button variant="outline" asChild className="justify-center h-14 rounded-2xl border-2 hover:border-violet-300 hover:bg-violet-50 dark:hover:bg-violet-950/30">
                            <a href="https://www.instagram.com/gopal_jha_dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                              <Instagram className="h-5 w-5 text-pink-500" />
                              <span className="font-semibold">Instagram</span>
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-violet-200/50 dark:border-violet-800/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                <span>© {new Date().getFullYear()} CodeLens. All rights reserved.</span>
              </div>
              
              {/* Professional social media icons */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/gopaljha16" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-violet-100 dark:hover:bg-violet-900/50 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 hover:scale-110 shadow-lg border border-violet-200/30 dark:border-violet-800/30"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/gopal-jha-229a2b243/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 shadow-lg border border-violet-200/30 dark:border-violet-800/30"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://x.com/gopaljha_dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-400 dark:hover:text-blue-300 transition-all duration-300 hover:scale-110 shadow-lg border border-violet-200/30 dark:border-violet-800/30"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.instagram.com/gopal_jha_dev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-pink-100 dark:hover:bg-pink-900/50 hover:text-pink-500 dark:hover:text-pink-400 transition-all duration-300 hover:scale-110 shadow-lg border border-violet-200/30 dark:border-violet-800/30"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}