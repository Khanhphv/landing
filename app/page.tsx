export default async function Page() {
  return (
    <>
      <div className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="bg-blue-600 px-5 py-20 text-center text-white">
          <div className="container mx-auto">
            <h1 className="mb-4 text-4xl font-bold">
              Take Control of Your Child’s Digital Journey Safely
            </h1>
            <p className="mb-6 text-lg">
              Monitor, manage, and guide your child’s screen time with ease.
            </p>
            <div className="flex justify-center gap-4">
              <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-gray-100">
                Download Now
              </button>
              <button className="rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-800">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-5 py-20">
          <div className="container mx-auto text-center">
            <h2 className="mb-10 text-3xl font-bold">Key Features</h2>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Activity Monitoring', desc: 'Track app usage and online activities.' },
                { title: 'Screen Time Control', desc: 'Set daily limits with just a tap.' },
                { title: 'Geolocation', desc: 'Know where your kids are at all times.' },
                { title: 'Content Filtering', desc: 'Block inappropriate content effortlessly.' },
              ].map((feature, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-lg">
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gray-100 px-5 py-20">
          <div className="container mx-auto text-center">
            <h2 className="mb-10 text-3xl font-bold">How It Works</h2>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
              {['Download the app', 'Set up child profiles', 'Enjoy peace of mind'].map(
                (step, index) => (
                  <div key={index} className="rounded-lg bg-white p-6 shadow-lg">
                    <div className="mb-4 text-4xl font-bold text-blue-600">{index + 1}</div>
                    <p>{step}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-5 py-20">
          <div className="container mx-auto text-center">
            <h2 className="mb-10 text-3xl font-bold">What Parents Are Saying</h2>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'This app has transformed how I manage my kids’ screen time.',
                'The geolocation feature gives me so much peace of mind.',
                'I love the content filtering options—it’s exactly what I needed.',
              ].map((testimonial, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-lg">
                  <p className="italic">"{testimonial}"</p>
                  <div className="mt-4 font-bold">- Parent {index + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-600 px-5 py-10 text-white">
          <div className="container mx-auto text-center">
            <p>© 2024 Parental Control App. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
