export default function Technologies() {
  const techCategories = [
    {
      title: 'Languages',
      items: ['C#', 'JavaScript', 'TypeScript', 'Python', 'Dart (Flutter)', 'SQL'],
    },
    {
      title: 'Frameworks & Libraries',
      items: [
        '.NET 8',
        'ASP.NET Core',
        'Angular',
        'Tailwind CSS',
        'Flutter',
        'GPT-4 and OpenAI API',
        'TensorFlow',
        'PyTorch',
        'scikit-learn',
        'xUnit',
        'Quartz.NET',
        'Polly',
        'Selenium',
        'Entity Framework Core',
        'Dapper',
        'SQLite CodeFirst',
      ],
    },
    {
      title: 'Integration & APIs',
      items: ['RESTful APIs', 'WebSockets', 'gRPC', 'Server-side pagination & stored procedures'],
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
      title: 'Tools & Platforms',
      items: ['Visual Studio', 'VS Code', 'Xcode', 'Postman', 'Azure DevOps'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Technologies</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our expertise spans a wide range of technologies to ensure we select the right tools for your project.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b-2 border-primary-600">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Tech Stack */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Our Tech Stack?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We carefully select technologies based on your project requirements, ensuring optimal 
              performance, scalability, and maintainability. Our team stays current with the latest 
              industry trends and best practices to deliver cutting-edge solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
                <p className="text-gray-600">Optimized for speed and efficiency</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalability</h3>
                <p className="text-gray-600">Built to grow with your business</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security</h3>
                <p className="text-gray-600">Enterprise-grade security standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

