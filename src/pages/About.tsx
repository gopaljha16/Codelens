import { GitBranch, Linkedin, Twitter, Code2, Zap, BookOpen, Users, Target, Lightbulb, Rocket, Palette, TrendingUp, Mail, Heart, Star, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 px-4 py-2 text-sm font-medium text-white mb-6 shadow-lg">
              <Heart className="h-4 w-4" />
              Made with passion for learning
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
              About{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
                CodeLens
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              An interactive learning platform that transforms the way you understand Data Structures & Algorithms through beautiful visualizations and hands-on experience.
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border border-slate-200/50 dark:border-slate-700/50 shadow-xl mb-12">
            <CardContent className="p-8">
              <div className="text-center">
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  To make algorithm learning accessible, engaging, and fun for everyone - from beginners taking their first steps to experienced developers sharpening their skills.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* Key Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Why Choose DSA Visualizer?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white">Race Mode</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Compare multiple algorithms side-by-side in real-time. See which performs better and understand why.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white">Step-by-Step Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Watch algorithms execute one step at a time with detailed explanations and complexity analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-xl flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white">Interactive Code</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  View actual implementations alongside visualizations. Copy, modify, and experiment with the code.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-yellow-500 rounded-xl flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white">Beautiful Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Modern, responsive interface with smooth animations and dark mode support for comfortable learning.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Real-time performance tracking with comparisons, swaps, and time complexity analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white">For Everyone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Perfect for students, developers, and educators. From beginners to advanced programmers.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">Algorithms</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">4+</div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">Data Structures</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">100%</div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">Open Source</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">∞</div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">Learning</div>
            </div>
          </div>
        </section>

        {/* Future Roadmap */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 border border-purple-200 dark:border-purple-800">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="h-8 w-8 text-purple-600" />
                <CardTitle className="text-3xl text-slate-900 dark:text-white">What's Coming Next</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300">Graph algorithms (Dijkstra, BFS, DFS)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300">Dynamic Programming visualizations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300">Tree data structures (AVL, Red-Black)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300">Advanced sorting algorithms</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300">Mobile app version</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300">Multi-language support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300">Learning paths & achievements</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300">Community features</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Developer Section */}
        <section>
          <Card className="bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl border border-violet-400/20">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <div>
                  <CardTitle className="text-2xl text-slate-900 dark:text-white">Meet the Developer</CardTitle>
                  <p className="text-slate-600 dark:text-slate-400">Passionate about algorithms and education</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Gopal Jha</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Full Stack Developer with a passion for creating educational tools that make complex concepts accessible.
                    Experienced in React, TypeScript, and modern web technologies. Believes in the power of visualization
                    to transform learning experiences through CodeLens.
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <span className="text-slate-700 dark:text-slate-300">Open Source Contributor</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-slate-700 dark:text-slate-300">Algorithm Enthusiast</span>
                  </div>
                  <div className="flex items-center gap-2 mb-6">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    <span className="text-slate-700 dark:text-slate-300">Education Technology Advocate</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Connect & Collaborate</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" asChild className="justify-start h-12">
                      <a href="mailto:gopaljha16@gmail.com" className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-red-500" />
                        <span>Email</span>
                      </a>
                    </Button>

                    <Button variant="outline" asChild className="justify-start h-12">
                      <a href="https://github.com/gopaljha16" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                        <GitBranch className="h-5 w-5 text-slate-800 dark:text-white" />
                        <span>GitHub</span>
                      </a>
                    </Button>

                    <Button variant="outline" asChild className="justify-start h-12">
                      <a href="https://www.linkedin.com/in/gopal-jha-229a2b243/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                        <Linkedin className="h-5 w-5 text-blue-600" />
                        <span>LinkedIn</span>
                      </a>
                    </Button>

                    <Button variant="outline" asChild className="justify-start h-12">
                      <a href="https://x.com/gopaljha_dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                        <Twitter className="h-5 w-5 text-blue-400" />
                        <span>Twitter</span>
                      </a>
                    </Button>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                    <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                      "Learning algorithms should be visual, interactive, and fun. That's the philosophy behind DSA Visualizer."
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;