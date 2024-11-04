export default function PostTitle({ children }) {
  return (
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-6 text-center">
      {children}
    </h1>
  )
}
