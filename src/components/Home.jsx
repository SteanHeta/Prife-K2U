export default function Home() {
    return (
      <div className="max-w-7xl mx-auto">
        <section className="relative bg-prifeBlue text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Health, Our Priority</h1>
                <p className="text-xl mb-6">Access premium health products and services from home.</p>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Healthy lifestyle"
                  className="max-w-md w-full rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }