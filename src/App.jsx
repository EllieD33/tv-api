import './App.css'
import CharacterDisplay from './components/CharacterDisplay'
import EpisodeDisplay from './components/EpisodeDisplay'
import Header from './components/Header'
import SeriesInfo from './components/SeriesInfo'

function App() {

  return (
    <>
      <Header />
      <SeriesInfo />
      <EpisodeDisplay />
      <CharacterDisplay />
    </>
  )
}

export default App
