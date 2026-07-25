export default function ProcessSteps({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="grid gap-px overflow-hidden border-2 border-ink bg-ink sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, i) => (
        <li key={step} className="flex flex-col gap-3 bg-white p-6">
          <span className="font-mono text-sm font-bold text-brand">{`STEP ${String(i + 1).padStart(2, "0")}`}</span>
          <p className="text-sm leading-relaxed text-ink/75">{step}</p>
        </li>
      ))}
    </ol>
  );
}
