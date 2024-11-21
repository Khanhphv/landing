import Image from 'next/image'

export default async function Page() {
  return (
    <>
      <div className="text-gray-800" id="home">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center bg-gray-100 px-5 py-40 text-center lg:flex-row">
          <div className="container mx-auto pb-10">
            <h1 className="mb-4 text-4xl font-bold text-blue-800">
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
          <Image
            src="/hero.webp"
            alt="xx"
            width="500"
            height="500"
            style={{
              width: '100%',
            }}
          />
        </section>

        {/* Features Section */}
        <section className="px-5 py-20" id="features">
          <div className="container mx-auto text-center">
            <h2 className="mb-10 text-3xl font-bold">Key Features</h2>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {/* Feature 1 */}
              <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg hover:scale-105">
                <div className="mb-4 rounded-full  p-4 text-white">
                  {/* Replace with an activity tracking icon */}
                  <span className="text-4xl font-bold">📊</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">Activity Monitoring</h3>
                <p className="text-gray-600">
                  Get detailed insights into your child’s online activities. See which apps they use
                  most and track their browsing history for a complete picture.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg hover:scale-105">
                <div className="mb-4 rounded-full  p-4 text-white">
                  {/* Replace with a clock or time icon */}
                  <span className="text-4xl font-bold">⏰</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">Screen Time Control</h3>
                <p className="text-gray-600">
                  Set daily or weekly time limits for app usage to ensure balanced screen time.
                  Easily enforce bedtime or homework rules with one tap.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg hover:scale-105">
                <div className="mb-4 rounded-full  p-4 text-white">
                  {/* Replace with a map or location icon */}
                  <span className="text-4xl font-bold">📍</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">Geolocation</h3>
                <p className="text-gray-600">
                  Always know your child’s location with real-time tracking. Set up geofences and
                  receive alerts when they enter or leave predefined areas.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg hover:scale-105">
                <div className="mb-4 rounded-full  p-4 text-white">
                  {/* Replace with a shield or filter icon */}
                  <span className="text-4xl font-bold">🛡️</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">Content Filtering</h3>
                <p className="text-gray-600">
                  Keep your kids safe from inappropriate content. Block specific websites or apps,
                  and enable safe browsing for peace of mind.
                </p>
              </div>
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

        {/* Demo Section */}
        <section className="bg-white px-5 py-20">
          <div className="container mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold">See the App in Action</h2>
            <p className="mb-8 text-gray-600">
              Watch how our app makes parenting in the digital age simple and effective.
            </p>

            {/* Video Embed */}
            <div className="aspect-w-16 aspect-h-9 mx-auto max-w-4xl rounded-lg shadow-lg">
              <iframe
                className="min-h-[400px] w-full rounded-lg"
                src="https://www.youtube.com/embed/CzZbEkFdw9U"
                title="Hòn Khô Quy Nhơn nè"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-5 py-20" id="about">
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
                  <div className="mt-4 font-bold">- Anonymous</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 px-5 py-20" id="contact">
          <div className="container mx-auto" style={{ width: 'fit-content' }}>
            <h2 className="mb-6 text-3xl font-bold">Get in Touch</h2>
            <p className="mb-8 text-gray-600">
              Reach out to us through any of the channels below. We're here to help!
            </p>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-center  space-x-6">
                <div className="rounded-full bg-blue-600 p-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5V5c0 1.149.15 2.263.43 3.326a13.022 13.022 0 0 0 9.244 9.244c1.063.28 2.177.43 3.326.43h1.5a1.5 1.5 0 0 0 1.5-1.5v-1.148a1.5 1.5 0 0 0-1.175-1.465l-3.223-.716a1.5 1.5 0 0 0-1.767 1.052l-.267.933c-.117.41-.555.643-.95.48a11.542 11.542 0 0 1-6.254-6.254c-.163-.395.07-.833.48-.95l.933-.267a1.5 1.5 0 0 0 1.052-1.767l-.716-3.223A1.5 1.5 0 0 0 4.648 2H3.5ZM16.72 2.22a.75.75 0 1 1 1.06 1.06L14.56 6.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l3.22-3.22Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Call Us</h3>
                  <p className="text-gray-600">+1 234 567 890</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center  space-x-6">
                <div className="rounded-full bg-blue-600 p-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email Us</h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:support@parentalcontrol.com"
                      className="text-blue-600 hover:underline"
                    >
                      support@parentalcontrol.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center  space-x-6">
                <div className="rounded-full bg-blue-600 p-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Parental Lane, <br /> Family City, FC 56789
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        {/* <footer className="bg-blue-600 px-5 py-10 text-white">
          <div className="container mx-auto text-center">
            <p>© 2024 Parental Control App. All rights reserved.</p>
          </div>
        </footer> */}
      </div>
    </>
  )
}
