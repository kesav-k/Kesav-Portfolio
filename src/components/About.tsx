import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Code2 } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: GraduationCap,
      label: "CGPA",
      value: "7.68/10",
      description: "B.E in Computer Science"
    },
    {
      icon: Award,
      label: "Certifications",
      value: "3+",
      description: "Professional certificates"
    },
    {
      icon: Code2,
      label: "Projects",
      value: "Multiple",
      description: "AI & Web Development"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate learner with a strong foundation in web development and growing expertise in AI technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-glow transition-all duration-300 animate-fade-in-up border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg gradient-primary mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-sm font-medium text-primary mb-1">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 md:p-12 border-border/50 animate-fade-in">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm currently pursuing my Bachelor's degree in Computer Science Engineering at 
              Er.Perumal Manimekalai College of Engineering. My journey in tech has been driven by 
              curiosity and a passion for creating innovative solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With expertise in <span className="text-primary font-medium">HTML, CSS, JavaScript, and React.js</span>, 
              I enjoy building responsive and user-friendly web applications. Recently, I've been diving deep into 
              AI technologies, working on projects that combine machine learning with practical applications.
            </p>
            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-muted-foreground">
                <span className="font-semibold text-primary">Area of Interest:</span> MERN Stack Developer
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
