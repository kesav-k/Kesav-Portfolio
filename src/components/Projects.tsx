import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SmartSpec - AI Test Case Generator",
      description: "An offline AI system that automatically generates software test cases from SRS documents using a custom Transformer encoder-decoder model and FAISS-based retrieval.",
      technologies: ["AI/ML", "Transformers", "FAISS", "Python", "NLP"],
      features: [
        "Custom Transformer model for test case generation",
        "FAISS-based retrieval for context-aware generation",
        "Offline functionality for data security",
        "Defense-grade application standards"
      ],
      github: "https://github.com/kesav-k/SmartSpec-AI.git",
      impact: "Enhances software testing efficiency with accurate, context-aware test cases"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions in AI and web development
          </p>
        </div>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 md:p-8 hover:shadow-glow transition-all duration-300 animate-fade-in-up border-border/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-primary mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {project.impact && (
                    <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-primary">Impact:</span> {project.impact}
                      </p>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
