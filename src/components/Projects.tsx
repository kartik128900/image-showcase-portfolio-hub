
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projectsData = [
    {
      title: "FreshEery",
      description: "I designed and developed a visually appealing and responsive website for instant food delivery using HTML, CSS, and JavaScript to showcase my proficiency in front-end development. This project demonstrates my ability to create engaging and intuitive UI.",
      tools: ["HTML", "CSS", "JavaScript", "SQL", "SpringBoot"],
      link: "https://kartik128900.github.io/Fresheery"
    },
    {
      title: "MedHelp",
      description: "A web application designed to provide comprehensive healthcare information, including hospital details, blood camp schedules, and registration service. It streamlines access to critical resources, ensuring users can make informed decisions quickly and efficiently.",
      tools: ["HTML", "CSS", "DAMS", "PHP"],
      link: "https://kartik128900.github.io/MedHelp"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <Card key={index} className="overflow-hidden h-full border-none shadow-lg hover:shadow-xl transition-all">
                <CardHeader className="bg-gradient-to-r from-portfolio-primary to-portfolio-secondary text-white">
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardDescription className="text-gray-700 mb-6 text-base">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, idx) => (
                      <Badge key={idx} variant="outline" className="bg-gray-100">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button variant="outline" className="w-full" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <Github className="mr-2 h-4 w-4" />
                      View Project
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
