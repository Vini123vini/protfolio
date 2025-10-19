import { Award, Briefcase, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpeg";

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "Internship Experience",
      description: "Data Science & Data Analyst roles",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.E. Computer Science | CGPA: 8.52",
    },
    {
      icon: Award,
      title: "Projects",
      description: "Power BI Dashboards & ML Models",
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a results-driven Data Analyst skilled in turning complex data into actionable insights. 
              With expertise in Power BI, Excel, DAX, and Power Query, I create interactive dashboards 
              and visualizations that drive business decisions.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Currently pursuing B.E. Computer Science and Engineering at PPG Institute of Technology, 
              Anna University (CGPA: 8.52). I've completed internships as a Data Science Intern at Saiquest 
              Cognitiva and Data Analyst Intern at Hackify Infotech, where I built ML pipelines and interactive dashboards.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm adept at identifying trends, optimizing workflows, and solving complex problems through data. 
              My passion lies in data visualization, storytelling, and delivering insights with accuracy and efficiency. 
              Based in Coimbatore, I'm excited to contribute to innovative data-driven projects.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src={profilePhoto} 
                  alt="Vinishyamala P - Data Analyst" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 text-center card-hover bg-card border-border"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
