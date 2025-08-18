import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Brain,
      title: "Data-Driven Insights",
      description: "Leveraging advanced analytics and machine learning to uncover hidden patterns and drive strategic decisions."
    },
    {
      icon: Target,
      title: "Precision & Accuracy",
      description: "Committed to delivering precise models and reliable solutions that meet real-world business challenges."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly exploring cutting-edge AI technologies and methodologies to solve complex problems."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a passionate data scientist with expertise in machine learning, artificial intelligence, 
              and statistical analysis. My mission is to transform raw data into meaningful insights that 
              drive innovation and create tangible business value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="animate-fade-in bg-gradient-to-r from-card to-card/80">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With a strong foundation in mathematics and computer science, I have developed 
                expertise across the full data science pipeline - from data collection and 
                preprocessing to model deployment and monitoring. I specialize in Python, R, 
                machine learning frameworks, and cloud technologies, with a particular focus 
                on developing scalable AI solutions that solve real-world problems.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;