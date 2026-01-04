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
        <div className="text-center mb-12">
          <p className="text-primary-400 uppercase text-sm font-semibold mb-2">TECHNOLOGY STACK</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Powered by Modern Technologies</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our expertise spans a wide range of technologies to ensure we select the right tools for your project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-primary-500 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm"
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

