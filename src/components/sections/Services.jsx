import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            We Offer creative working
            <br />
            environments
          </h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            We bring you workspaces innovated concept for creating offices that
            bring out the best in your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-accent rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop"
              alt="Meeting Office"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-secondary mb-2">
                Meeting Office
              </h3>
              <p className="text-secondary-600 mb-4">
                Our meeting spaces are designed for productivity and
                collaboration with state-of-the-art facilities
              </p>
              <a
                href="#"
                className="text-primary hover:text-primary-600 font-medium transition-colors"
              >
                Learn More →
              </a>
            </div>
          </div>

          <div className="bg-accent rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
              alt="Coffee Shop"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-secondary mb-2">
                Coffee Shop
              </h3>
              <p className="text-secondary-600 mb-4">
                Relax and recharge in our artisan coffee shop designed for
                informal meetings and breaks
              </p>
              <a
                href="#"
                className="text-primary hover:text-primary-600 font-medium transition-colors"
              >
                Learn More →
              </a>
            </div>
          </div>

          <div className="bg-accent rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
              alt="Private event Space"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-secondary mb-2">
                Private event Space
              </h3>
              <p className="text-secondary-600 mb-4">
                Host your corporate events in our versatile spaces designed to
                impress and inspire
              </p>
              <a
                href="#"
                className="text-primary hover:text-primary-600 font-medium transition-colors"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-accent rounded-md p-8 shadow-md border border-sm border-secondary-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                We offer creative working environments that suit your business
              </h3>
              <p className="text-secondary-600">
                Whether you're looking for a dedicated office, a creative space,
                or a relaxed environment, we have everything your team needs to
                thrive. Our workspaces adapt to your changing business needs.
              </p>
            </div>
            <button className="bg-primary hover:bg-primary-600 text-accent px-8 py-3 rounded-md font-medium transition-all shadow-md hover:shadow-lg whitespace-nowrap">
              See Service
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
