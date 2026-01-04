export default function AboutSection() {
  const coreValues = [
    {
      title: 'Customer First',
      description: 'Your success drives our mission',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Innovation',
      description: 'We push boundaries for next-gen solutions',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Integrity',
      description: 'Transparency and accountability always',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Excellence',
      description: 'Superior, scalable products delivered',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ];

  const teamMembers = [
    {
      name: 'Shantha Ruban',
      role: 'Founder & Group CEO',
      image: '👨‍💼',
    },
    {
      name: 'NEIL ANTHONY-PILLAI',
      role: 'Director',
      image: '👨‍🔬',
    },
   {
      name: 'MAYORAN',
      role: 'Head of Organisation & Senior Tech Lead',
      image: '👨‍💼',
    },
    {
      name: 'HARIHALAN',
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
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* About Us Overview with Mission/Vision and Core Values */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Text Content, Mission & Vision */}
          <div>
            <p className="text-primary-500 uppercase text-sm font-semibold tracking-wide mb-3">ABOUT US</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bridging Businesses & Customers Through Technology
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Unicorn Connected Apps, we specialize in creating powerful solutions that bridge 
              the gap between businesses and their customers. Our team fosters a culture of 
              collaboration, creativity and excellence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Founded by passionate technologists and industry veterans, we've grown from a small 
              team into a global organisation with offices in <strong>London, United Kingdom</strong> and <strong>Jaffna, Sri Lanka.</strong>
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To build innovative applications that connect and empower people worldwide.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be a global leader in connected applications, inspiring positive change.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Core Values Grid (2x2) */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Core Values</h3>
            <div className="grid grid-cols-2 gap-6">
              {coreValues.map((value, index) => {
                // Innovation (index 1) and Excellence (index 3) should be positioned lower
                const isRightColumn = index === 1 || index === 3;
                return (
                  <div 
                    key={index} 
                    className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow h-full flex flex-col ${
                      isRightColumn ? 'mt-8' : ''
                    }`}
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 text-primary-600 flex-shrink-0">
                      {value.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Leadership Team</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Are - Simplified */}
        <div className="bg-white p-10 rounded-xl shadow-md mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Unicorn Connected Apps is a product-focused software company committed to bridging 
            the gap between businesses and their customers through cutting-edge technology. We 
            specialise in integration monitoring, AI-driven applications and advanced 
            business-profile management systems. Our culture is built on collaboration, 
            creativity and excellence, and we believe that technology should empower people 
            and organisations.
          </p>
        </div>

        {/* Our Story - Simplified */}
        <div className="bg-white p-10 rounded-xl shadow-md mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded by a group of passionate technologists and industry veterans, Unicorn 
            Connected Apps has grown from a small team into a global organisation with offices 
            in London, United Kingdom and Jaffna, Sri Lanka. Our leadership team is led by 
            Mayooran – Head of Organisation & Senior Tech Lead, supported by experts in 
            software engineering, AI/ML, design and strategy.
          </p>
        </div>

        {/* How We Work */}
        <div className="bg-primary-600 text-white p-10 rounded-xl shadow-md">
          <h3 className="text-3xl font-bold mb-4 text-center">How We Work</h3>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Our development process combines time-tested methodologies with AI-driven innovation:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary-200 mb-3">{step.step}</div>
                <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                <p className="text-white/90 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
