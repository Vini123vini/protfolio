import { ArrowDown, Download, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleDownloadResume = () => {
    // In a real implementation, this would link to an actual PDF file
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6 animate-fade-in-up stagger-1">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Vinishyamala P
          </h1>
          <div className="h-1 w-32 bg-secondary mx-auto rounded-full" />
        </div>

        <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up stagger-2">
          Data Analyst | Turning Data into Actionable Insights
        </p>

        <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in-up stagger-3">
          Results-driven Data Analyst skilled in Power BI, Excel, DAX, and Power Query. 
          Creating interactive dashboards, optimizing workflows, and supporting data-driven business decisions.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-up stagger-4">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold"
            onClick={handleDownloadResume}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm font-semibold"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
          </Button>
        </div>

        <div className="flex gap-4 justify-center animate-fade-in-up stagger-4">
          <Button
            size="icon"
            variant="ghost"
            className="bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm"
            onClick={() => window.open("https://linkedin.com/in/vini-shyamala-2928432a1", "_blank")}
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm"
            onClick={() => window.open("mailto:Vini24sam@gmail.com")}
          >
            <Mail className="h-5 w-5" />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white/80" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
