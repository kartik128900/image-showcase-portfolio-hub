
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Engineer",
      company: "Prodigy Infotech",
      period: "Dec '23 - Jan '24",
      description: [
        "Prodigy InfoTech is a digital consultancy firm focused on crafting inventive solutions for businesses.",
        "Through their internship program, they offer hands-on learning via live projects and real-world experiences to assist students in developing potential tech skills."
      ]
    },
    {
      title: "Java Developer",
      company: "Techno Hacks",
      period: "May '23 - Jun '23",
      description: [
        "The main goals of Techno Hacks are to provide chances for leadership growth, academic achievement, and student engagement in awesome interests.",
        "Each level has a different set of tasks and a different level. We created challenging opportunities and real-world projects through this internship."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">Professional Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg">
                <CardHeader className="bg-portfolio-primary text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                      <CardDescription className="text-gray-100 mt-1">{exp.company}</CardDescription>
                    </div>
                    <div className="px-3 py-1 bg-white text-portfolio-primary rounded-full text-sm font-medium">
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {exp.description.map((item, idx) => (
                      <p key={idx} className="text-gray-700">
                        {item}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center">
              <Briefcase className="w-5 h-5 mr-2 text-portfolio-primary" />
              <span className="text-gray-600">Looking for new opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
