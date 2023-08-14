import { Excursions } from "./components/Excursions"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { ExcursionsProvider } from "./contexts/ExcursionsContext"

function App() {

  return (
    <> 
      <main className="w-full h-screen flex justify-center border p-2">
        <section className="container container-lg flex justify-between flex-col p-4 h-full border border-yellow-600 rounded-lg">
          
          <Header />
          <ExcursionsProvider>
            <Excursions />
          </ExcursionsProvider>
          <Footer />
        </section>

      </main>
    </>
  )
}

export default App
