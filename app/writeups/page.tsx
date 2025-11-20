import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WriteupCard from '@/components/WriteupCard'

export default function Writeups() {
  const writeups = [
    {
      title: "SCHEMATICS CTF",
      ctfName: "by ITS",
      category: "CTF",
      difficulty: "Hard",
      date: "Oct 2025",
      slug: "https://docs.google.com/document/d/e/2PACX-1vR_PEOsJYByUABT_BBQQge7m3MxpEwJfFekjgTu1sCMpq374Z0ruUPSFyYkI5pW1tfffA1cuPSId-je/pub"
    },
    {
      title: "GEMATIK CTF",
      ctfName: "by UTI",
      category: "CTF",
      difficulty: "Medium",
      date: "Nov 2025",
      slug: "https://docs.google.com/document/d/e/2PACX-1vR_PEOsJYByUABT_BBQQge7m3MxpEwJfFekjgTu1sCMpq374Z0ruUPSFyYkI5pW1tfffA1cuPSId-je/pub"
    },
  ]

  return (
    <main className=" absolute inset-0 h-full w-full bg-grey bg-[linear-gradient(to_right,#80808024_1px,transparent_1px),linear-gradient(to_bottom,#80808024_1px,transparent_1px)] bg-size-[64px_64px] text-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">CTF Writeups</h1>
          <p className="text-xl text-gray-400 mb-12">
            Detailed solutions and approaches to capture the flag challenges.
          </p>
          
          <div className="grid gap-6">
            {writeups.map((writeup, index) => (
              <WriteupCard key={index} {...writeup} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}