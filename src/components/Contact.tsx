import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kesavak345@gmail.com",
      link: "mailto:kesavak345@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8248332278",
      link: "tel:+918248332278"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Kesavamoorthy K",
      link: "https://www.linkedin.com/in/kesavamoorthy-k-b89b56320"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "kesav-k",
      link: "https://github.com/kesav-k"
    }
  ];


  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's connect! Feel free to reach out for collaborations or opportunities
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300 animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a 
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : undefined}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">{contact.value}</p>
                  </div>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
