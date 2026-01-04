export default function CareersSection() {
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
      description: 'Work alongside experts in AI, machine learning, cloud computing and software engineering.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Collaborative Culture',
      description: 'A supportive environment where your ideas are valued and teamwork drives success.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Global Exposure',
      description: 'Collaborate with clients and colleagues around the world from our offices in London and Jaffna.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const topRowRegions = [
    { code: 'GB', name: 'United Kingdom' },
    { code: 'IE', name: 'Ireland' },
    { code: 'CA', name: 'Canada' },
    { code: 'AU', name: 'Australia' },
    { code: 'NZ', name: 'New Zealand' },
    { code: 'MY', name: 'Malaysia' },
  ];

  const bottomRowRegions = [
    { code: 'SG', name: 'Singapore' },
    { name: 'Middle East' },
  ];

  return (
    <section id="careers" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Section - Main Content */}
          <div className="lg:col-span-2">
            <p className="text-primary-500 uppercase text-sm font-semibold mb-2">CAREERS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Innovative Team</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At Unicorn Connected Apps, people are our greatest asset. We're seeking passionate 
              individuals who want to build the future using AI, ML and tailored software solutions.
            </p>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="mailto:careers@unicornconnectedapps.com"
              className="inline-flex items-center bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
            >
              Apply Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right Section - Opportunities */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Opportunities</h3>
            <div className="space-y-3 mb-6">
              {opportunities.map((opportunity, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <h4 className="font-semibold text-gray-900 mb-1">{opportunity.title}</h4>
                  <p className="text-sm text-gray-600">{opportunity.description}</p>
                </div>
              ))}
            </div>
            <div className="bg-primary-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700 mb-2">Send your resume to</p>
              <a
                href="mailto:careers@unicornconnectedapps.com"
                className="text-primary-600 font-semibold hover:underline"
              >
                careers@unicornconnectedapps.com
              </a>
            </div>
          </div>
        </div>

        {/* Global Reach */}
        <div className="mt-16 pt-12">
          <div className="bg-primary-50 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              {/* Left Side - Icon and Text */}
              <div className="flex items-center space-x-4 flex-shrink-0">
                <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Global Reach</h3>
                  <p className="text-gray-600">Serving clients worldwide</p>
                </div>
              </div>

              {/* Right Side - Country Buttons in Two Rows */}
              <div className="flex-1">
                {/* Top Row */}
                <div className="flex flex-wrap gap-3 mb-3">
                  {topRowRegions.map((region, index) => (
                    <div
                      key={index}
                      className="bg-white px-4 py-2.5 rounded-lg text-sm font-medium text-gray-900"
                    >
                      {region.code} {region.name}
                    </div>
                  ))}
                </div>
                {/* Bottom Row */}
                <div className="flex flex-wrap gap-3">
                  {bottomRowRegions.map((region, index) => (
                    <div
                      key={index}
                      className="bg-white px-4 py-2.5 rounded-lg text-sm font-medium text-gray-900 flex items-center"
                    >
                      {region.name === 'Middle East' ? (
                        <>
                          <svg className="w-4 h-4 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{region.name}</span>
                        </>
                      ) : (
                        <span>
                          {region.code} {region.name}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

