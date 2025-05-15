
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Javascript", "Java", "C"]
    },
    {
      category: "Web Development",
      skills: ["CSS", "HTML5", "Git", "GitHub"]
    },
    {
      category: "Database Technologies",
      skills: ["MySQL", "MongoDB", "PL/SQL", "NoSQL"]
    },
    {
      category: "Software Development Tools",
      skills: ["IntelliJ IDEA", "Visual Studio"]
    },
    {
      category: "Data Visualization",
      skills: ["Power BI", "Tableau"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-blue-100 hover:bg-blue-200 text-portfolio-dark">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
