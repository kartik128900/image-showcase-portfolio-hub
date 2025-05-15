
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">About Me</h2>
          
          <Card className="mb-8 shadow-lg border-none">
            <CardContent className="pt-6">
              <p className="text-lg text-gray-700 mb-6">
                I am a software engineer with a passion for building innovative software products. My expertise in full-stack engineering enables teams to champion end-to-end software development life cycle (SDLC) & deliver compelling business value to stakeholders.
              </p>
              <p className="text-lg text-gray-700">
                I bring tremendous success to organizations with my technical expertise, analytical & strategic thinking. Leadership, and innovation-driven problem-solving.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">Contact Information</h3>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-medium">Email:</span> kartikjain366@gmail.com</p>
                <p><span className="font-medium">Phone:</span> 7297993368</p>
                <p><span className="font-medium">Location:</span> Pune, Maharashtra, India</p>
                <p>
                  <span className="font-medium">LinkedIn:</span>{" "}
                  <a href="https://www.linkedin.com/in/kartik-jain-b6213-2b900" className="text-portfolio-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    kartik-jain-b6213-2b900
                  </a>
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">Personal Information</h3>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-medium">Current Role:</span> Software Development Engineer</p>
                <p><span className="font-medium">Experience:</span> Full-stack Development</p>
                <p><span className="font-medium">Strengths:</span> Technical expertise, Analytical thinking, Leadership</p>
                <p><span className="font-medium">GitHub:</span>{" "}
                  <a href="https://github.com/kartik128900" className="text-portfolio-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    kartik128900
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
