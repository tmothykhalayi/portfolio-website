import { Code2, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce application with payment integration, inventory management, and user authentication.',
    image: '/project1.jpg',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates, team collaboration, and progress tracking.',
    image: '/project2.jpg',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location-based forecasts, historical data, and interactive maps.',
    image: '/brand.jpg',
    tech: ['React', 'OpenWeather API', 'Mapbox', 'Axios'],
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'Blog Platform',
    description: 'Full-featured blogging platform with markdown support, comments, categories, and user management.',
    image: '/project2.jpg',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth'],
    github: '#',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-dark-900/50 border-t border-primary-600/10">
      <div className="container-max">
        <h2 className="text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-dark-900 rounded-lg border border-primary-600/20 overflow-hidden hover:border-primary-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/20"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-600/20 to-primary-400/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full border border-primary-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600/20 hover:bg-primary-600/40 rounded-lg border border-primary-600/30 transition-colors"
                  >
                    <Code2 size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600/20 hover:bg-primary-600/40 rounded-lg border border-primary-600/30 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
