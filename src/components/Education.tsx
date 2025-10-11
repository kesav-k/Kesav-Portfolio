import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.E in Computer Science Engineering",
      institution: "Er.Perumal Manimekalai College of Engineering",
      period: "Nov 2022 - Ongoing",
      score: "7.68/10 CGPA",
      status: "ongoing"
    },
    {
      degree: "Class XII",
      institution: "Government High Sec School, Manavarnapalli",
      period: "May 2022",
      score: "61%",
      status: "completed"
    },
    {
      degree: "Class X",
      institution: "Government High Sec School, Manavarnapalli",
      period: "May 2020",
      score: "86%",
      status: "completed"
    }
  ];

  const certifications = [
    { name: "Frontend Development", provider: "Professional Certification" },
    { name: "Fullstack Development", provider: "Professional Certification" },
    { name: "Artificial Intelligence", provider: "Professional Certification" }
  ];


  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic background and professional development
          </p>
        </div>
        
        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <GraduationCap className="w-6 h-6 mr-2 text-primary" />
            Academic Journey
          </h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300 animate-slide-in border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className="w-1 h-full bg-gradient-primary rounded-full min-h-[60px]" />
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                        <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge className="gradient-primary text-white">
                      {edu.score}
                    </Badge>
                    {edu.status === "ongoing" && (
                      <Badge variant="outline" className="border-accent text-accent">
                        Ongoing
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Award className="w-6 h-6 mr-2 text-primary" />
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-glow transition-all duration-300 animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg gradient-accent mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-1">{cert.name}</h4>
                <p className="text-xs text-muted-foreground">{cert.provider}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
