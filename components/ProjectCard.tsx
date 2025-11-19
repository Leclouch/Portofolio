import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

export default function ProjectCard({ title, description, tags, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition">
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl">
        🎯
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex gap-2 mb-4 flex-wrap">
          {tags.map((tag) => (
            <span key={tag} className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {liveUrl && (
            <a href={liveUrl} className="text-blue-400 hover:text-blue-300">
              Live Demo →
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} className="text-gray-400 hover:text-gray-300">
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}