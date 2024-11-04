import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section className="md:grid grid-cols-2">
      <div className="md:mr-8">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={359}
          width={400}
        />
      </div>
      <div>
        <div>
          <h3 className="mb-3 text-4xl lg:text-6xl leading-tight font-bold">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="text-md mb-4 text-slate-500">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4 text-slate-500">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}
