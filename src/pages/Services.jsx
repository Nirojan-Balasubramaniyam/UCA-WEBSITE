import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'We design and develop tailored software tailored to your exact needs, integrating AI and ML to drive efficiency and insights. From enterprise systems to SaaS products, our solutions are secure, scalable and future-proof.',
      icon: '💻',
    },
    {
      title: 'Web & Mobile App Development',
      description: 'Our engineers build responsive web applications and mobile apps that provide seamless user experiences across devices. We work with modern frameworks (Angular, React, Flutter) and implement cross-platform strategies to reduce time-to-market.',
      icon: '📱',
    },
    {
      title: 'AI & Machine Learning Solutions',
      description: 'Unlock the power of your data with AI and ML. We develop predictive models, recommendation systems and natural language processing solutions using state-of-the-art tools such as GPT-4 and TensorFlow. Whether you need intelligent automation, chatbots or analytics dashboards, we can help.',
      icon: '🤖',
    },
    {
      title: 'UI/UX Design',
      description: 'Our design team creates intuitive user interfaces and engaging experiences. Through user research, wireframing and prototyping, we ensure your product is not only beautiful but also drives conversions and customer satisfaction.',
      icon: '🎨',
    },
    {
      title: 'System Integration',
      description: 'Connect disparate systems with robust integration solutions. We specialise in RESTful APIs, WebSockets, GraphQL and other integration technologies to ensure data flows smoothly across your organisation.',
      icon: '🔗',
    },
    {
      title: 'Cloud Solutions',
      description: 'Leverage the scalability and reliability of the cloud. We architect and deploy solutions on Microsoft Azure, implement DevOps pipelines and provide migration services to modernise legacy applications.',
      icon: '☁️',
    },
    {
      title: 'QA & Testing',
      description: 'Quality is at the core of everything we build. Our QA team conducts functional, performance and security testing using automated tools (xUnit, Selenium) to deliver bug-free products.',
      icon: '✅',
    },
    {
      title: 'Dedicated Teams & Staff Augmentation',
      description: 'Scale your development capacity with our dedicated teams. Choose from our pool of software engineers, data scientists and designers who will work exclusively on your project. We offer flexible outstaffing and managed team solutions.',
      icon: '👥',
    },
    {
      title: 'Consultation & Strategy',
      description: 'Gain insights from our experts. We provide IT strategy consulting, AI/ML advisory, digital transformation planning and product roadmapping to guide your business in the right direction.',
      icon: '💼',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Explore our comprehensive suite of services designed to solve modern business challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business.
          </p>
          <Link
            to="/contact"
            className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

