type Crumb = { name: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="breadcrumb" className="mx-auto max-w-6xl px-4 pt-24 font-mono text-xs uppercase tracking-wide text-ink/50 lg:pt-28">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-brand">/</span>}
            {i === items.length - 1 ? (
              <span className="font-bold text-ink/70">{item.name}</span>
            ) : (
              <a href={item.href} className="hover:text-brand">
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
