
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certifications = () => {
  const certificationsData = [
    {
      title: "Amazon Aurora MySQL and Amazon RDS MySQL",
      description: "Fully managed relational database service by AWS, designed for high performance, availability, and reliability. Amazon Aurora MySQL offers up to five times the throughput of standard MySQL with features like multi-region replication and serverless options."
    },
    {
      title: "Hack the Mountains 5.0",
      description: "Active participation in Hack With Mountains 5.0, a 30-hour hybrid hackathon, a premier hackathon fostering innovation and collaboration."
    },
    {
      title: "Data Visualisation using PowerBI and Tableau",
      description: "Certified in Data Visualization using PowerBI and Tableau, showcasing proficiency in creating interactive dashboards and reports. Enabling data-driven decision-making and delivering visually compelling analytics solutions."
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">Certifications & Assessments</h2>
          
          <div className="space-y-8">
            {certificationsData.map((cert, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-portfolio-primary h-12 w-12 rounded-full flex items-center justify-center text-white">
                    <Award />
                  </div>
                  <CardTitle>{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
