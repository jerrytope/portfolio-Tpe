import { Code2, Database, Server } from "lucide-react";

function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-8">
            I am a versatile software engineer with expertise in Django
            development, machine learning, and data analysis. Proficient in
            Python, SQL, Database management and R I enjoy building practical
            solutions that leverage analytical insights. I have successfully
            contributed to projects in education and business domains, creating
            scalable and efficient systems. My experience includes working with
            large datasets, implementing algorithms, and developing user-centric
            applications that enhance productivity and user experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-gray-50 rounded-lg">
              <Code2 className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold mb-2">Clean Code</h3>
              <p className="text-gray-600 text-sm">
                Writing maintainable and efficient code is my priority
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Database className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold mb-2">Database Design</h3>
              <p className="text-gray-600 text-sm">
                Expertise in designing optimal database structures
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Server className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold mb-2">API Development</h3>
              <p className="text-gray-600 text-sm">
                Creating robust REST APIs with Django REST Framework
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
