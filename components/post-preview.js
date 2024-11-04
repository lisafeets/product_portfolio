import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="border-b border-slate-200 last:border-0 pb-8 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <CoverImage
            slug={slug}
            title={title}
            src={coverImage}
            height={278}
            width={278}
          />
        </div>
        <div className="md:col-span-2">
          <h3 className="text-2xl mb-3 leading-snug font-bold">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="text-md mb-4 text-slate-500">
            <DateFormatter dateString={date} />
          </div>
          <p className="text-lg leading-relaxed mb-4 text-slate-500">{excerpt}</p>
        </div>
      </div>
    </div>
  )
}
