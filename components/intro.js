import Image from 'next/image'


export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="md:pr-8">
        <h1 className="text-6xl md:text-7xl font-bold leading-tight">
          Hi, I'm Annie Apple,<br />Product Leader
        </h1>
        <p className="text-lg block text-slate-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. 
          Exercitation veniam consequat sunt nostrud amet.</p>
        <a href="/assets/resume/Resume.pdf"
          className="bg-accent-1 hover:bg-white hover:text-accent-1 border border-accent-1 text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mt-6 inline-block"
        >
          Download Resume
        </a>
      </div>
      <Image title={"lisafeets"} src={"/assets/posts/authors/annie.svg"} height={295} width={293}
      />
    </section>
  )
}
