import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../../theme'
import logoLight from '../../assets/logo-light-brand.png'
import logoDark from '../../assets/logo-dark-brand.png'

export default function TopNav() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#" className="flex items-center" aria-label="Strata — home">
          {/* Asset swap by theme (not a color token), mirroring the app logins */}
          <img src={isDark ? logoDark : logoLight} alt="Strata" className="h-7 w-auto" />
        </a>

        <nav className="flex items-center">
          <button
            type="button"
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-accent"
          >
            {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
        </nav>
      </div>
    </header>
  )
}
