const CallToAction = () => {
  return (
    <section id="call-to-action" className="bg-brightRed mt-12">
      <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto md:py-12 md:flex-row space-y-12 md:space-y-0">
        <h2 className="text-5xl font-bold text-center md:text-4xl md:text-left md:max-w-xl text-brightRedSupLight">
          Simplify how your team works today.
        </h2>
        <div>
          <a
            href="/"
            className="bg-veryLightGray rounded-full p-3 pt-2 px-6 text-brightRed hover:text-brightRedLight shadow-2xl"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
