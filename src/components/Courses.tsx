export const Courses = () => {
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl">
          <h1 className="text-2xl font-bold sm:text-3xl text-center">
            Build Resilient Apps and Unleash GenAI Magic with{" "}
            <strong className="font-bold italic">TechWithShubh</strong> Courses
          </h1>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="relative col-span-2 sm:col-span-1 w-full h-72 bg-babypurple rounded-3xl p-4">
              <h1 className="font-semibold">Generative AI Course</h1>
              <br />
              <p className="text-sm">
                Embark on a journey into the realm of Artificial Intelligence
                with our GenAI course. Learn to harness the capabilities of
                Llama Index to create intelligent applications that not only
                meet today's standards but set new benchmarks for the future.
              </p>
              <button className="absolute bottom-0 left-0 m-4 bg-primary text-white text-sm py-2 px-4 rounded-md">Coming Soon</button>
            </div>
            <div className="relative col-span-2 sm:col-span-1 w-full h-72 bg-pastalblue rounded-3xl p-4">
              <h1 className="font-semibold">Observability in Web App</h1>
              <br />
              <p className="text-sm">
                Discover the art of building robust and easily maintainable
                applications through our Observability course. Dive into the
                world of OpenTelemetry, where you'll learn to instrument your
                code effectively, trace transactions seamlessly, and gain
                invaluable insights into your fullstack projects.
              </p>
              <button className="absolute bottom-0 left-0 m-4 bg-primary text-white text-sm py-2 px-4 rounded-md">Coming Soon</button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  