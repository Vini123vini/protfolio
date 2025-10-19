import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Vini24sam@gmail.com",
      link: "mailto:Vini24sam@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "vini-shyamala-2928432a1",
      link: "https://linkedin.com/in/vini-shyamala-2928432a1",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Coimbatore, Tamil Nadu",
      link: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations. 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-8 bg-card">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary to-secondary text-white">
              <h3 className="text-2xl font-semibold mb-4">Let's Collaborate</h3>
              <p className="mb-6 text-white/90">
                I'm currently available for freelance work and full-time opportunities. 
                If you have a project in mind or want to discuss data analytics solutions, 
                let's connect!
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="w-full"
                onClick={() => window.open("https://linkedin.com/in/vini-shyamala-2928432a1", "_blank")}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
