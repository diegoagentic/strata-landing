import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline'
import { products } from '../../lib/content'

export default function Products() {
  return (
    <div className="anim-fadeup anim-delay-2">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        Two products, one ecosystem
      </p>

      <div className="grid gap-4">
        {products.map((product) => (
          <article
            key={product.name}
            className="group rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20"
          >
            {/* Lime accent marker — decorative, fully rounded (no clash with card radius) */}
            <span className="mb-4 block h-1 w-8 rounded-full bg-primary" aria-hidden="true" />

            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border">
                <product.icon className="h-5 w-5 text-foreground" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h2 className="font-brand text-lg font-bold leading-tight text-foreground">
                  {product.name}
                </h2>
                <p className="mt-1 text-[13px] font-medium leading-snug text-foreground/80">
                  {product.tagline}
                </p>
              </div>
            </div>

            <ul className="mt-4 grid gap-1.5">
              {product.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-[13px] text-foreground">
                  <CheckIcon className="h-3.5 w-3.5 shrink-0 text-foreground" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            <a
              href={product.href}
              className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Open {product.name}
              <ArrowRightIcon
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}
