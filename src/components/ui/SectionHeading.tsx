export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col justify-between gap-4 border-b-2 border-ink pb-6 sm:flex-row sm:items-end">
      <div>
        <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand">
          <span className="h-2 w-2 bg-brand" />
          {eyebrow}
        </span>
        <h2 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      </div>
      {description && <p className="max-w-sm text-sm text-ink/60">{description}</p>}
    </div>
  );
}
