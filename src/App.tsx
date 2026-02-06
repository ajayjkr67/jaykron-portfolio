import Header from './components/Header';
import Hero from './components/Hero';
// import profile from "./assets/ajay-jaykar.png";
import profile from "./assets/1.jpeg";

import { experience } from "./data/portfolio.ts";
import { projects } from "./data/portfolio";




function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />

        {/* About Section */}
        <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Get to know more about my journey, passion, and what drives me as a developer
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  My Journey as a <span className="gradient-text">Frontend Developer</span>
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    Hello! I'm <strong className="text-primary-600 dark:text-primary-400">Ajay Jaykar</strong>,
                    a passionate Frontend UI Developer with over 2 years of experience in creating
                    beautiful, responsive, and user-friendly web applications.
                  </p>
                  <p>
                    My journey began with a curiosity about how websites work, which quickly evolved
                    into a deep passion for crafting exceptional user experiences. I specialize in
                    modern web technologies like React.js, Tailwind CSS, and cutting-edge CSS frameworks.
                  </p>
                  <p>
                    What sets me apart is my attention to detail, love for clean code, and commitment
                    to delivering pixel-perfect designs that not only look great but also perform
                    exceptionally well across all devices.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={profile}
                  alt="Ajay Jaykar"
                  className="w-80 h-80 object-cover rounded-2xl shadow-2xl cursor-pointer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-padding bg-white dark:bg-gray-900">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                My <span className="gradient-text">Skills</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Bootstrap', 'Git'].map((skill) => (
                <div key={skill} className="card p-6 text-center group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    {skill.charAt(0)}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {skill}
                  </h4>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A showcase of my recent work and creative solutions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map(project => (
                <a key={project.id} href={project.liveUrl}>
                  <div className="card overflow-hidden cursor-pointer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-72 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map(tech => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>


        {/* Experience Section */}
        <section id="experience" className="section-padding bg-white dark:bg-gray-900">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Work <span className="gradient-text">Experience</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                My professional journey and the experiences that shaped my skills
              </p>
            </div>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.id} className="card p-6 cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">{exp.period} • {exp.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Get In <span className="gradient-text">Touch</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Ready to start your next project? Let's work together to create something amazing!
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Let's Connect
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg cursor-pointer">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center">
                        📧
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                        <p className="text-gray-600 dark:text-gray-300">jaykron.dev@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg cursor-pointer">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center">
                        📍
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                        <p className="text-gray-600 dark:text-gray-300">Mumbai, India</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card p-8 cursor-pointer">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Send Message
                  </h3>
                  <form className="space-y-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <textarea
                        rows={5}
                        placeholder="Tell me about your project..."
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                      />
                    </div>
                    <button className="btn-primary w-full">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12">
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4 cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <span className="text-2xl font-bold gradient-text">JayKron</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Ajay Jaykar - Frontend UI Developer. Creating beautiful, responsive, and user-friendly web experiences.
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://github.com/ajayjkr67" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/ajay-jaykar61" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                LinkedIn
              </a>
              <a href="mailto:jaykron.dev@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                Email
              </a>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              © 2025 JayKron. Made with ❤️ by Ajay Jaykar
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
