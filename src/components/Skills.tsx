import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML/CSS", "JavaScript", "React.js", "Bootstrap"],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Programming",
      skills: ["python", "C", "Javascript"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "AI & Tools",
      skills: ["Github", "VScode", "Netlify"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Soft Skills",
      skills: ["Teamwork", "Time Management", "Adaptability", "Decision Making", "Learning Agility"],
      gradient: "from-green-500 to-cyan-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set combining technical proficiency with essential soft skills
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-glow transition-all duration-300 animate-fade-in-up border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.gradient} mr-3`} />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
