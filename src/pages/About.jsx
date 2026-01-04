export default function About() {
  const coreValues = [
    {
      title: 'Customer First',
      description: 'Your success drives our mission.',
      icon: '👥',
    },
    {
      title: 'Innovation',
      description: 'We continually push boundaries to deliver next-generation solutions.',
      icon: '💡',
    },
    {
      title: 'Integrity',
      description: 'We build lasting trust through transparency and accountability.',
      icon: '🤝',
    },
    {
      title: 'Agility',
      description: 'We respond quickly to evolving business needs, ensuring timely delivery.',
      icon: '⚡',
    },
    {
      title: 'Excellence',
      description: 'We commit to delivering superior, scalable products.',
      icon: '⭐',
    },
  ];

  const teamMembers = [
    {
      name: 'Mayooran',
      role: 'Head of Organisation & Senior Tech Lead',
      image: '👨‍💼',
    },
    {
      name: 'Dr. Neil',
      role: 'Director',
      image: '👨‍🔬',
    },
    {
      name: 'Harihalan',
      role: 'Operational Manager',
      image: '👨‍💻',
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Requirement & Discovery',
      description: 'We listen to your needs, identify challenges and define success criteria.',
    },
    {
      step: '2',
      title: 'Concept & Strategy',
      description: 'Our team designs a solution and defines an AI/ML strategy that aligns with your business goals.',
    },
    {
      step: '3',
      title: 'Technical Evaluation',
      description: 'We select the best technologies—cloud platforms, frameworks and AI models—to bring your concept to life.',
    },
    {
      step: '4',
      title: 'Agile Development',
      description: 'Using iterative development, we build your product with continuous integration, testing and feedback.',
    },
    {
      step: '5',
      title: 'Deployment & Support',
      description: 'After launch, we provide ongoing maintenance, model retraining and support to ensure long-term success.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About Us</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              At Unicorn Connected Apps, we specialize in creating powerful solutions that bridge 
              the gap between businesses and their customers. Our team fosters a culture of 
              collaboration, creativity and excellence, focusing on delivering integration monitoring, 
              AI-driven applications and streamlined business-profile solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To build innovative applications that connect and empower people worldwide by 
                leveraging cutting-edge technology and fostering a culture of trust and excellence.
              </p>
            </div>
            <div className="bg-primary-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be a global leader in connected applications, inspiring positive change through 
                technology and enhancing the lives of millions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Unicorn Connected Apps is a product-focused software company committed to bridging 
              the gap between businesses and their customers through cutting-edge technology. We 
              specialise in integration monitoring, AI-driven applications and advanced 
              business-profile management systems. Our culture is built on collaboration, 
              creativity and excellence, and we believe that technology should empower people 
              and organisations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to create intelligent, adaptable applications that connect and 
              empower people worldwide by leveraging artificial intelligence, machine learning 
              and trusted software engineering practices.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded by a group of passionate technologists and industry veterans, Unicorn 
              Connected Apps has grown from a small team into a global organisation with offices 
              in London, United Kingdom and Jaffna, Sri Lanka. Our leadership team is led by 
              Mayooran – Head of Organisation & Senior Tech Lead, supported by experts in 
              software engineering, AI/ML, design and strategy.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">How We Work</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Our development process combines time-tested methodologies with AI-driven innovation:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary-200 mb-3">{step.step}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/90">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

