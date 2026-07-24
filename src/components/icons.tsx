import type { Service } from "@/lib/site";

type IconProps = { className?: string };

const base = "currentColor";

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={base} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function LineIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.486 2 2 5.925 2 10.742c0 2.638 1.401 4.99 3.6 6.54L5 21l4.008-2.122A11.7 11.7 0 0 0 12 19.484C17.514 19.484 22 15.56 22 10.742 22 5.925 17.514 2 12 2zm-4.02 11.56a.585.585 0 0 1-.585-.585V8.74a.585.585 0 1 1 1.17 0v3.647h1.753c.323 0 .584.262.584.585s-.261.584-.584.584H7.98zm3.24 0a.585.585 0 0 1-.585-.585V8.74a.585.585 0 1 1 1.17 0v4.235c0 .323-.262.585-.585.585zm4.492 0a.585.585 0 0 1-.48-.253l-2.286-3.12v2.788a.585.585 0 1 1-1.17 0V8.74a.585.585 0 0 1 1.065-.334l2.286 3.12V8.74a.585.585 0 1 1 1.17 0v4.235c0 .323-.262.585-.585.585zm2.848 0h-2.24a.585.585 0 0 1-.585-.585V8.74a.585.585 0 0 1 .585-.585h2.24c.323 0 .585.262.585.585s-.262.585-.585.585h-1.655v1.022h1.655c.323 0 .585.262.585.585s-.262.585-.585.585h-1.655v1.038h1.655c.323 0 .585.262.585.585s-.262.585-.585.585z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={base} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={base} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={base} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function DryIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={base} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3v8" />
      <path d="M12 3 4 21" />
      <path d="m12 3 8 18" />
      <path d="M12 11v10" />
      <circle cx="12" cy="3" r="1.5" />
    </svg>
  );
}

function WetIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={base} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12z" />
    </svg>
  );
}

function MicropileIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={base} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2v20" />
      <path d="M8 6h8" />
      <path d="M8 10h8" />
      <path d="M8 14h8" />
      <path d="M8 18h8" />
    </svg>
  );
}

function TruckIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={base} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2v14" />
      <path d="M8 5h8" />
      <path d="M9 8h6" />
      <path d="M10 11h4" />
      <path d="m11 14 1 4 1-4" />
    </svg>
  );
}

const serviceIcons: Record<Service["icon"], (p: IconProps) => React.JSX.Element> = {
  dry: DryIcon,
  wet: WetIcon,
  micropile: MicropileIcon,
  truck: TruckIcon,
};

export function ServiceIcon({ name, className }: { name: Service["icon"]; className?: string }) {
  const Cmp = serviceIcons[name];
  return <Cmp className={className} />;
}
