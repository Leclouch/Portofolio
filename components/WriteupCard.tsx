import Link from 'next/link'

interface WriteupCardProps {
  title: string
  ctfName: string
  category: string
  difficulty: string
  date: string
  slug: string
}

export default function WriteupCard({ title, ctfName, category, difficulty, date, slug }: WriteupCardProps) {
  const difficultyColors = {
    Easy: 'bg-green-500/20 text-green-400',
    Medium: 'bg-yellow-500/20 text-yellow-400',
    Hard: 'bg-red-500/20 text-red-400'
  }

  return (
    <Link href={`${slug}`}>
      <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 hover:transform hover:scale-105 transition cursor-pointer">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-blue-400">{title}</h3>
          <span className={`px-3 py-1 rounded text-sm ${difficultyColors[difficulty as keyof typeof difficultyColors]}`}>
            {difficulty}
          </span>
        </div>
        <p className="text-gray-300 mb-2">{ctfName}</p>
        <div className="flex gap-3 text-sm text-gray-400">
          <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded">{category}</span>
          <span>{date}</span>
        </div>
      </div>
    </Link>
  )
}