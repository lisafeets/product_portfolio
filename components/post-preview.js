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
      <div className="grid grid-cols-3 gap-8 md:mb-16">
        <div className="mb-5">
          <CoverImage
            slug={slug}
            title={title}
            src={coverImage}
            height={278}
            width={278}
          />
        </div>
        <div className="col-span-2">
          <h3 className="text-2xl mb-3 leading-snug font-bold">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="text-md mb-4 text-slate-500">
            <DateFormatter dateString={date} />
          </div>
          <p className="text-lg leading-relaxed mb-4 text-slate-500">{excerpt}</p>
          {/* <Avatar name={author.name} picture={author.picture} /> */}
        </div>
      </div>
  )
}
