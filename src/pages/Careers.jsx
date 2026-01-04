export default function Careers() {
  const opportunities = [
    {
      title: 'Trainee & Associate Software Engineers',
      description: 'Start your career with us and learn from industry experts.',
    },
    {
      title: 'Software Engineers (Web, Mobile, AI/ML)',
      description: 'Build cutting-edge applications using modern technologies.',
    },
    {
      title: 'Senior Software Engineers',
      description: 'Lead projects and mentor junior developers.',
    },
    {
      title: 'Quality Assurance Engineers',
      description: 'Ensure the highest quality standards for our products.',
    },
    {
      title: 'Data Scientists & ML Engineers',
      description: 'Develop intelligent solutions using AI and machine learning.',
    },
  ];

  const benefits = [
    {
      title: 'Learn and Grow',
      description: 'Work alongside experts in AI, machine learning, cloud computing and software engineering. We invest in continuous learning and professional development.',
      icon: '📚',
    },
    {
      title: 'Collaborative Culture',
      description: 'Enjoy a supportive environment where your ideas are valued and teamwork drives success.',
      icon: '🤝',
    },
    {
      title: 'Global Exposure',
      description: 'Collaborate with clients and colleagues around the world from our offices in London and Jaffna.',
      icon: '🌍',
    },
  ];

  const regions = [
    'United Kingdom',
    'Ireland',
    'Canada',
    'Australia',
    'New Zealand',
    'Malaysia',
    'Singapore',
    'Middle East',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Join Our Innovative Team</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              At Unicorn Connected Apps, people are our greatest asset. We're seeking passionate 
              individuals who want to build the future using AI, ML and tailored software solutions. 
              If you are excited by integration monitoring, intelligent applications and cutting-edge 
              technology, we want to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Work With Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Work With Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Current Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{opportunity.title}</h3>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                <a
                  href="mailto:careers@unicornconnectedapps.com"
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Apply Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Global Reach</h2>
          <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            We proudly serve clients around the world. Our tailored software and AI solutions are 
            trusted in the following regions:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {regions.map((region, index) => (
              <div
                key={index}
                className="bg-primary-50 p-4 rounded-lg text-center font-semibold text-gray-900"
              >
                {region}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 max-w-3xl mx-auto">
            Whether you're based in Europe, North America, Asia-Pacific or the Middle East, our 
            team has the experience and infrastructure to deliver solutions tailored to your local market.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Send your resume to{' '}
            <a
              href="mailto:careers@unicornconnectedapps.com"
              className="underline hover:text-primary-200 transition-colors"
            >
              careers@unicornconnectedapps.com
            </a>{' '}
            or apply through our careers portal.
          </p>
          <a
            href="mailto:careers@unicornconnectedapps.com"
            className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-block"
          >
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
}

