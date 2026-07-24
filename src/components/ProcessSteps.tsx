export default function ProcessSteps({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, i) => (
        <li key={step} className="flex gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand font-bold text-white">
            {i + 1}
          </span>
          <p className="text-sm leading-relaxed text-ink/75">{step}</p>
        </li>
      ))}
    </ol>
  );
}
