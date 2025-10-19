import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Database, BarChart3, Code, Brain } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: any;
  color: string;
  skills: Skill[];
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: "Data Visualization & BI",
      icon: BarChart3,
      color: "text-primary",
      skills: [
        { name: "Power BI", level: 95 },
        { name: "Excel (Advanced)", level: 90 },
        { name: "DAX", level: 88 },
        { name: "Power Query", level: 90 },
      ],
    },
    {
      title: "Programming & ML",
      icon: Code,
      color: "text-secondary",
      skills: [
        { name: "Python", level: 85 },
        { name: "Scikit-learn", level: 80 },
        { name: "SQL", level: 85 },
        { name: "Data Modeling", level: 82 },
      ],
    },
    {
      title: "Core Competencies",
      icon: Database,
      color: "text-accent",
      skills: [
        { name: "Data Cleaning", level: 92 },
        { name: "Data Transformation", level: 90 },
        { name: "KPI Development", level: 88 },
        { name: "Dashboard Design", level: 95 },
      ],
    },
    {
      title: "Analytics & Problem Solving",
      icon: Brain,
      color: "text-primary",
      skills: [
        { name: "Trend Analysis", level: 90 },
        { name: "Insights Generation", level: 88 },
        { name: "Feature Engineering", level: 82 },
        { name: "Business Intelligence", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="p-8 card-hover bg-card border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${skillIdx * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
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
