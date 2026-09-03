export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-900/50 border-t border-primary-600/10">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-8">About Me</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Hi, I'm Timothy, a passionate full-stack web developer with a keen interest in crafting
              interactive and responsive websites. I specialize in front-end development with expertise
              in HTML, CSS, JavaScript, and React, while also comfortable with backend technologies.
            </p>
            <p>
              With a strong background in problem-solving and a continuous desire to learn new
              technologies, I aim to deliver high-quality web experiences. Whether it's building
              engaging user interfaces or optimizing website performance, I'm committed to delivering
              results that exceed expectations.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source
              projects, and sharing knowledge with the developer community.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            {[
              { label: 'Projects', value: '10+' },
              { label: 'Experience', value: '3+ yrs' },
              { label: 'Clients', value: '15+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-primary-600/10 rounded-lg border border-primary-600/20">
                <div className="text-2xl font-bold text-primary-400">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
