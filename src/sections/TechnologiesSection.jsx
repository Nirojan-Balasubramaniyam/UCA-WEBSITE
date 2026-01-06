// Import code image
import codeImage from '../assets/code.jpg';

export default function TechnologiesSection() {
  const techCategories = [
    {
      title: 'Languages',
      items: ['C#', 'JavaScript', 'TypeScript', 'Python', 'Dart', 'SQL'],
    },
    {
      title: 'Frameworks & Libraries',
      items: [
        '.NET 8',
        'ASP.NET Core',
        'Angular',
        'React',
        'Tailwind CSS',
        'Flutter',
      ],
    },
    {
      title: 'AI & Machine Learning',
      items: ['GPT-4', 'OpenAI API', 'TensorFlow', 'PyTorch', 'scikit-learn'],
    },
    {
      title: 'Cloud & DevOps',
      items: ['Microsoft Azure', 'Docker', 'Kubernetes', 'GitHub Actions'],
    },
    {
      title: 'Databases',
      items: ['SQL Server', 'PostgreSQL', 'SQLite', 'Redis'],
    },
    {
      title: 'Integration & APIs',
      items: ['RESTful APIs', 'WebSockets', 'gRPC', 'GraphQL'],
    },
  ];

  return (
    <section id="technologies" className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <div className="mb-12">
          <p className="text-primary-400 uppercase text-sm font-semibold mb-2">TECHNOLOGies</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Powered by Modern Technologies</h2>
          <p className="text-xl text-gray-300 max-w-3xl">
            Our expertise spans a wide range of technologies to ensure we select the right tools for your project.
          </p>
        </div>

        {/* Code Image - Modern Overlapping Design */}
        <div className="relative mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Glassmorphism Card */}
            <div className="relative z-10 order-2 lg:order-1">
              <div className="bg-white/10 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 transform hover:scale-[1.02] transition-transform duration-300">
                <div className="inline-block mb-4">
                  <span className="bg-primary-500/30 backdrop-blur-sm text-primary-300 px-4 py-2 rounded-full text-sm font-semibold border border-primary-400/30">
                    TECHNOLOGY
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Cutting-Edge Technology Stack</h3>
                <p className="text-lg text-gray-200 leading-relaxed mb-4">
                  We leverage the latest technologies and frameworks to build robust, scalable, and 
                  maintainable solutions. Our team stays current with industry trends and best practices 
                  to ensure your project uses the most appropriate tools.
                </p>
                <p className="text-lg text-gray-200 leading-relaxed">
                  From modern programming languages to cloud platforms and AI frameworks, we have the 
                  expertise to bring your vision to life.
                </p>
              </div>
            </div>
            
            {/* Image - Modern Styling */}
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src={codeImage} 
                  alt="Code Development" 
                  className="w-full h-[500px] md:h-[600px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                {/* Code Badge */}
               
              </div>
              {/* Glow Effect */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20 hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-primary-500 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="bg-gray-700/80 backdrop-blur-sm text-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-500 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


