// app/contact/page.tsx
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <main className=" absolute inset-0 h-full w-full bg-grey bg-[linear-gradient(to_right,#80808024_1px,transparent_1px),linear-gradient(to_bottom,#80808024_1px,transparent_1px)] bg-size-[64px_64px] text-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-400 mb-12">
            I'm always interested in hearing about new projects and opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:your@email.com" className="text-blue-400 hover:text-blue-300">
                your@email.com
              </a>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <a href="https://linkedin.com" className="text-blue-400 hover:text-blue-300">
                linkedin.com/in/yourname
              </a>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2">GitHub</h3>
              <a href="https://github.com" className="text-blue-400 hover:text-blue-300">
                github.com/yourname
              </a>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl mb-4">🐦</div>
              <h3 className="text-xl font-bold mb-2">Twitter</h3>
              <a href="https://twitter.com" className="text-blue-400 hover:text-blue-300">
                @yourhandle
              </a>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={6}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                  placeholder="Your message..."
                />
              </div>
              
              <button 
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg transition w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}