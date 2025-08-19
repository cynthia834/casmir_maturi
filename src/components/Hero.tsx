import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, ArrowRight, Brain, Code, Database, Lightbulb } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/casmir-profile.jpg";

const  Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Tech-oriented Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/10" />
      
      {/* Animated Tech Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse" />
        <div className="grid grid-cols-12 gap-4 h-full p-8 transform rotate-12 scale-150">
          {Array.from({ length: 48 }).map((_, i) => (
            <div 
              key={i} 
              className={`bg-accent/20 rounded-sm ${i % 3 === 0 ? 'animate-glow-pulse' : ''}`}
              style={{ 
                height: `${Math.random() * 40 + 10}px`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Brain className="absolute top-20 left-20 text-accent/30 w-8 h-8 animate-float" style={{ animationDelay: '0s' }} />
        <Code className="absolute top-32 right-32 text-primary/30 w-6 h-6 animate-float" style={{ animationDelay: '1s' }} />
        <Database className="absolute bottom-32 left-32 text-accent/30 w-7 h-7 animate-float" style={{ animationDelay: '2s' }} />
        <Lightbulb className="absolute bottom-20 right-20 text-primary/30 w-6 h-6 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-accent text-sm font-medium tracking-wider uppercase">
                  Welcome to my digital portfolio
                </div>
                <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                  <span className="block text-foreground">Hi, I'm</span>
                  <span className="block bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-gradient-x bg-300% font-black tracking-tight">
                    Casmir Muturi
                  </span>
                </h1>
              </div>
              
              <div className="space-y-3">
                <p className="text-xl lg:text-2xl font-semibold text-primary">
                  Data Scientist | AI & Machine Learning Enthusiast
                </p>
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Transforming complex data into actionable insights through advanced analytics, 
                  machine learning, and AI solutions that drive measurable business growth and innovation.
                </p>
              </div>

              {/* Soft Skills Pills */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20">
                  Problem Solving
                </div>
                <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                  Critical Thinking
                </div>
                <div className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20">
                  Team Leadership
                </div>
                <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                  Communication
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a 
                  href="https://github.com/Casmir2001" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              
              <Button variant="glow" size="lg" asChild>
                <a href="/resume.pdf">
                   {/*download="Casmir_Maturi_Resume.pdf"*/}
                   {/*target="_blank"*/}
                   {/*rel="noopener noreferrer"*/}
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                <a 
                  href="https://github.com/Casmir2001" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                <a 
                  href="https://www.linkedin.com/in/casmir-maturi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-full blur-2xl opacity-30 animate-glow-pulse"></div>
              <img
                src={profileImage}
                alt="Casmir Muturi - Data Scientist"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl ring-4 ring-accent/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;