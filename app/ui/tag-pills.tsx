export default function TagPills({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap">
      {tags.map((tag, i) => (
        <span
          key={`${i}-${tag}`}
          className="inline-block bg-gray-200 rounded-xl px-3 py-1 text-sm font-semibold text-gray-700 m-1"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}