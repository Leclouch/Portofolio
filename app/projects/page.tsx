// app/projects/page.tsx
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: "Flower Categorization",
      description: "A python code for categorizing images of flowers into 3 RGB folders.",
      tags: ["Python"],
      liveUrl: "#",
      githubUrl: "https://github.com/Leclouch/ColorCategorization-flowers"
    },
    {
      title: "Robot Obstacle Avoidance",
      description: "A robot that automatically avoid obstacles",
      tags: ["C/C++", "ESP32"],
      liveUrl: "#",
      githubUrl: "https://github.com/Leclouch/RobotAvoidancePS4"
    },

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