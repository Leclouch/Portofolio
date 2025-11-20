// app/projects/page.tsx
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with payment integration and admin dashboard.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates and team features.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Security Scanner",
      description: "Automated security scanning tool for web applications with vulnerability detection.",
      tags: ["Python", "Flask", "SQLite"],
      githubUrl: "#"
    },
    {
      title: "Portfolio CMS",
      description: "Custom content management system built for portfolio websites.",
      tags: ["Next.js", "Sanity.io", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  return (
    <main className=" absolute inset-0 h-full w-full bg-grey bg-[linear-gradient(to_right,#80808024_1px,transparent_1px),linear-gradient(to_bottom,#80808024_1px,transparent_1px)] bg-size-[64px_64px] text-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-gray-400 mb-12">
            A collection of my development work and open source contributions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}