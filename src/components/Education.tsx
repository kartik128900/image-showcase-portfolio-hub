
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "Dr. D. Y. Patil Institute of Technology",
      degree: "BE in Computer Science And Engineering",
      period: "2021 - 2025",
      grade: "CGPA: 9.5/10"
    },
    {
      institution: "Sophia Senior Secondary School, Kota",
      degree: "HSC in CBSE",
      period: "2020",
      grade: "Percentage: 75/100"
    },
    {
      institution: "Sophia Senior Secondary School, Kota",
      degree: "SSC in CBSE",
      period: "2018",
      grade: "Percentage: 75/100"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">Education</h2>
          
          <div className="space-y-8">
            {educationData.map((item, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row">
                  <CardHeader className="bg-portfolio-primary text-white md:w-1/3 flex items-center justify-center">
                    <BookOpen className="h-10 w-10 mb-2" />
                    <CardTitle className="text-center">{item.period}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">{item.institution}</h3>
                    <p className="text-gray-600 mb-4">{item.degree}</p>
                    <p className="text-sm font-medium text-portfolio-primary">{item.grade}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
