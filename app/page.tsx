import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ButtonRainbow from '@/components/ButtonRainbow'
import Link from 'next/link'

export default function Home() {
  return (
    <main className=" absolute inset-0 h-full w-full bg-grey bg-[linear-gradient(to_right,#80808024_1px,transparent_1px),linear-gradient(to_bottom,#80808024_1px,transparent_1px)] bg-size-[64px_64px]  text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                Muhammad <span className="text-blue-400">Wafdan</span> Taqiyya
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Full Stack Developer | Robotic Enthusiast | CTF Player 
              </p>
              <p className="text-gray-400 mb-8">
                I am an Information Engineering student at Universitas Gadjah Mada. Interested in cybersecurity, website development, and microcontroller.
              </p>
              <div className="flex gap-4">
                
                <Link href="/contacts">
                  <ButtonRainbow text="Get in Touch"/>
                </Link>
                <Link href="/projects" className="border border-gray-600 hover:border-blue-400 px-6 py-3 rounded-lg transition">
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">What I am insterested in:</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3">Website Development</h3>
              <p className="text-gray-400">Building modern web applications with React, Next.js, and Node.js.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">CTF Competition</h3>
              <p className="text-gray-400">Finding vulnerabilities and solving CTF challenges in various categories.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Robotics/IoT</h3>
              <p className="text-gray-400">Documenting CTF solutions and sharing security knowledge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/projects" className="bg-gray-800 p-8 rounded-lg hover:bg-gray-750 transition group">
              <h3 className="text-3xl font-bold mb-3 group-hover:text-blue-400">Projects →</h3>
              <p className="text-gray-400">Check out my development projects and open source contributions.</p>
            </Link>
            <Link href="/writeups" className="bg-gray-800 p-8 rounded-lg hover:bg-gray-750 transition group">
              <h3 className="text-3xl font-bold mb-3 group-hover:text-blue-400">CTF Writeups →</h3>
              <p className="text-gray-400">Read my solutions and approaches to various CTF challenges.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
