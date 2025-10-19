import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  image: string;
  liveLink?: string;
  githubLink?: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects: Project[] = [
    {
      title: "Global Health Analysis Dashboard",
      description: "Interactive Power BI dashboard analyzing global health metrics and trends.",
      longDescription: "Built an interactive Power BI dashboard for comprehensive global health metrics analysis. Utilized DAX for creating sophisticated KPIs and percentage-based insights. Visualized health trends across countries to support data-driven policy decisions. The dashboard enables stakeholders to track and analyze key health indicators effectively.",
      technologies: ["Power BI", "Excel", "DAX"],
      category: "Healthcare",
      image: "🌍",
    },
    {
      title: "HR Analytics Dashboard",
      description: "Power BI solution for employee performance tracking and attrition analysis.",
      longDescription: "Developed a comprehensive Power BI dashboard tracking employee performance metrics and attrition patterns. Automated data cleaning and transformation workflows using Power Query, significantly reducing manual effort. Delivered actionable insights to improve HR decision-making and workforce planning strategies.",
      technologies: ["Power BI", "Power Query", "Excel"],
      category: "Business Intelligence",
      image: "👥",
    },
    {
      title: "Machine Learning Pipeline Suite",
      description: "End-to-end ML pipelines for predictive analytics across multiple domains.",
      longDescription: "Built complete Machine Learning pipelines for four diverse datasets: Customer Churn Prediction, Housing Price Prediction, Titanic Survival Prediction, and Retail Sales Forecasting. Conducted comprehensive data cleaning, feature engineering, model training, and evaluation using Python and Scikit-learn.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Data Analysis"],
      category: "Machine Learning",
      image: "🤖",
    },
    {
      title: "Sales Performance Dashboard",
      description: "Excel and Power BI dashboard for comprehensive sales analytics.",
      longDescription: "Analyzed sales data to track critical KPIs including revenue, profitability, and regional performance. Created automated dashboards and reports in Power BI and Excel, enabling faster business decision-making. Provided insights that helped identify top-performing products and sales trends.",
      technologies: ["Power BI", "Excel", "Data Visualization"],
      category: "Business Intelligence",
      image: "📊",
    },
  ];

  const categories = ["All", "Healthcare", "Business Intelligence", "Machine Learning"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className="transition-all"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <Card
              key={idx}
              className="overflow-hidden card-hover bg-card border-border group"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-8xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <span className="relative z-10">{project.image}</span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <Badge variant="secondary" className="mb-2">
                    {project.category}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIdx) => (
                    <Badge key={techIdx} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Technologies showcase - no external links needed */}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
