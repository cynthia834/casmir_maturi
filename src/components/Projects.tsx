import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Machine Learning Portfolio",
      description: "Comprehensive collection of machine learning projects including predictive modeling, classification, and deep learning implementations.",
      tags: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "Jupyter"],
      github: "https://github.com/Casmir2001",
      featured: true
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive data visualization dashboard for business intelligence and real-time analytics using modern web technologies.",
      tags: ["Python", "Plotly", "Streamlit", "SQL", "Data Viz"],
      github: "https://github.com/Casmir2001",
      featured: true
    },
    {
      title: "Natural Language Processing",
      description: "NLP projects focusing on text analysis, sentiment analysis, and language model fine-tuning for various applications.",
      tags: ["NLP", "NLTK", "spaCy", "Transformers", "Python"],
      github: "https://github.com/Casmir2001",
      featured: false
    },
    {
      title: "Computer Vision Solutions",
      description: "Deep learning models for image classification, object detection, and computer vision applications.",
      tags: ["OpenCV", "PyTorch", "CNN", "Image Processing", "AI"],
      github: "https://github.com/Casmir2001",
      featured: false
    },
    {
      title: "Time Series Forecasting",
      description: "Advanced time series analysis and forecasting models for business and financial applications.",
      tags: ["Time Series", "ARIMA", "Prophet", "Statistics", "Forecasting"],
      github: "https://github.com/Casmir2001",
      featured: false
    },
    {
      title: "Big Data Processing",
      description: "Scalable data processing pipelines using Apache Spark and cloud technologies for large-scale analytics.",
      tags: ["Spark", "Hadoop", "AWS", "Big Data", "ETL"],
      github: "https://github.com/Casmir2001",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore my latest work in data science and machine learning
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up bg-gradient-to-br from-card to-card/80"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="default" className="ml-2">
                      Featured
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <a 
                href="https://github.com/Casmir2001" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                View All Projects on GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
