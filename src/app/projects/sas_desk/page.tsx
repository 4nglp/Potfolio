const SAS = () => {
  return (
    <div className="bg-black text-white px-6">
      {/* Main Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center max-w-4xl mx-auto py-16">
        <h1 className="font-bold text-4xl sm:text-5xl mb-6">
          SAS Desktop Version
        </h1>
        <p className="font-light tracking-widest text-base sm:text-lg leading-relaxed text-left">
          SAS is a desktop application developed using Electron.js during my
          internship at ISTA Ben M’Sik. It was built to streamline the
          management of intern absences. This project was a fantastic team
          experience, developed by a group of three using the Scrum methodology
          in an agile environment.
          <br />
          <br />
          We held weekly meetings with the director every Tuesday to evaluate
          progress, gather feedback, and plan upcoming features or changes.
          Although I cannot publicly share the full application details at this
          time, I hope to release a version in the future.
        </p>
      </section>
      <section className="min-h-[40vh] flex flex-col justify-center items-center text-center max-w-4xl mx-auto py-16">
        <h2 className="font-bold text-3xl sm:text-4xl mb-4">Coming Soon</h2>
        <p className="font-light tracking-widest text-base sm:text-lg leading-relaxed text-left">
          A public showcase of the SAS app with live previews, screenshots, and
          feature breakdowns is in the works and will be available soon. Stay
          tuned!
        </p>
      </section>
    </div>
  );
};

export default SAS;
