import type { ComponentType, SVGProps } from 'react'
import {
  SparklesIcon,
  Squares2X2Icon,
  InboxStackIcon,
  DocumentMagnifyingGlassIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline'

type Icon = ComponentType<SVGProps<SVGSVGElement>>

export interface Pillar {
  title: string
  body: string
  icon: Icon
}

export interface Product {
  name: string
  tagline: string
  points: string[]
  href: string
  icon: Icon
}

export const pillars: Pillar[] = [
  {
    title: 'AI + experts',
    body: 'AI runs the routine; your experts decide what matters.',
    icon: SparklesIcon,
  },
  {
    title: 'One ecosystem',
    body: 'Every step shares one flow — entered once, never re-typed.',
    icon: Squares2X2Icon,
  },
  {
    title: 'On your tools',
    body: 'Runs on top of the tools your team already uses — no rip-and-replace.',
    icon: InboxStackIcon,
  },
]

// Reference build — links are placeholders until the real redirects are wired.
export const products: Product[] = [
  {
    name: 'Quote Converter',
    tagline: 'From any RFQ PDF or email to a structured quote — automatically.',
    points: [
      'Reads PDFs, emails & price lists',
      'Maps line items to your catalog',
      'Drafts the quote — no copy-paste',
    ],
    href: 'https://dev-strata.orderbahn.com/quote-converter/login?returnTo=%2F',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    name: 'Hub Experience',
    tagline: 'Vendor acknowledgments checked against your POs in seconds.',
    points: [
      'Field-by-field PO vs. acknowledgment',
      'Auto-resolves the routine exceptions',
      'Escalates only what needs a human',
    ],
    href: 'https://dev-strata.orderbahn.com/smart-comparator/login?returnTo=%2F',
    icon: ScaleIcon,
  },
]
