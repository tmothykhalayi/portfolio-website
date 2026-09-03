const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML5', 'CSS3'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Vite', 'Docker', 'Webpack'] },
  { category: 'Soft Skills', items: ['Problem Solving', 'Communication', 'Teamwork', 'Leadership', 'Agile', 'UI/UX'] },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-dark-900">
      <div className="container-max">
        <h2 className="text-center mb-16">My Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="p-6 bg-gradient-to-br from-primary-600/10 to-primary-400/5 rounded-lg border border-primary-600/20 hover:border-primary-600/50 transition-all duration-300"
            >
              <h3 className="text-primary-400 font-semibold mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-gray-400 hover:text-primary-300 transition-colors">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
