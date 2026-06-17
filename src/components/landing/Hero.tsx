import { pillars } from '../../lib/content'

export default function Hero() {
  return (
    <div className="anim-fadeup">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        The Strata ecosystem
      </p>

      <h1 className="mt-4 font-brand text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        A system of action where AI and experts run the work.
      </h1>

      <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
        Strata is the ecosystem for contract dealers and manufacturers: AI runs the routine, your
        experts handle the exceptions, and every product shares one flow — from quote to PO to
        invoice, entered once and never re-typed.
      </p>

      <dl className="mt-8 grid max-w-xl gap-x-6 gap-y-5 sm:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title}>
            <dt className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-border">
                <pillar.icon className="h-4 w-4 text-foreground" aria-hidden="true" />
              </span>
              {pillar.title}
            </dt>
            <dd className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{pillar.body}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
