import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WriteupCard from '@/components/WriteupCard'

export default function Writeups() {
  const writeups = [
    {
      title: "SQL Injection in Login Form",
      ctfName: "PicoCTF 2024",
      category: "Web",
      difficulty: "Easy",
      date: "Nov 2024",
      slug: "sql-injection-login"
    },
    {
      title: "Buffer Overflow Exploitation",
      ctfName: "HackTheBox",
      category: "Binary",
      difficulty: "Medium",
      date: "Oct 2024",
      slug: "buffer-overflow-exploit"
    },
    {
      title: "RSA Weak Key Attack",
      ctfName: "CTFtime Challenge",
      category: "Crypto",
      difficulty: "Hard",
      date: "Oct 2024",
      slug: "rsa-weak-key"
    },
    {
      title: "Command Injection via API",
      ctfName: "TryHackMe",
      category: "Web",
      difficulty: "Medium",
      date: "Sep 2024",
      slug: "command-injection-api"
    },
    {
      title: "Reverse Engineering Android App",
      ctfName: "Google CTF 2024",
      category: "Reverse",
      difficulty: "Hard",
      date: "Sep 2024",
      slug: "android-reversing"
    },
    {
      title: "XSS to Account Takeover",
      ctfName: "BugBounty POC",
      category: "Web",
      difficulty: "Medium",
      date: "Aug 2024",
      slug: "xss-account-takeover"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
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