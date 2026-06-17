import TopNav from './components/landing/TopNav'
import Hero from './components/landing/Hero'
import Products from './components/landing/Products'
import Footer from './components/landing/Footer'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <TopNav />
      <main className="flex flex-1 items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10 lg:py-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <Hero />
            <Products />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
