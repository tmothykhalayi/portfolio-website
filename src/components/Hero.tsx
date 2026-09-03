import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-900 to-primary-900/20"
    >
      <div className="container-max grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold">
            I'm <span className="text-primary-400">Timothy</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary-300 font-semibold">
            Full Stack Developer & Problem Solver
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
            I craft interactive, responsive web experiences using modern technologies.
            Specializing in React, TypeScript, and building scalable applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              View My Work
              <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn-secondary inline-flex items-center justify-center w-full sm:w-auto">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[400px] md:h-[500px] animate-slide-up">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-primary-400/20 rounded-lg blur-3xl" />
          <img
            src="/timo.jpg"
            alt="Timothy"
            className="w-full h-full object-cover rounded-lg border border-primary-600/30"
          />
        </div>
      </div>
    </section>
  );
}
