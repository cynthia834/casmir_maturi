import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/casmir-profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Casmir
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                Data Scientist | AI & Machine Learning Enthusiast
              </p>
              <p className="text-lg text-muted-foreground max-w-lg">
                Transforming complex data into actionable insights through advanced analytics, 
                machine learning, and AI solutions that drive business growth.
              </p>
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
                <a href="#contact">
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