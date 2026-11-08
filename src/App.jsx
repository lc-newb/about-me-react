import './App.css'
import AboutMe  from './AboutMe'
import Interests from './Interests'
import FunFact from './FunFact'
import WeatherChecker from './WeatherChecker'
import DrawingPad  from './DrawingPad'
import projects from './projects.json'

function App() {
  return (
    <div>
      <h1>Hello, I'm Luis.</h1>
      <p>This is my webpage that is kind of like a sandbox for my React skills.</p>
      
      <AboutMe />

      <section>
        <h2>My Projects</h2>
        {projects.map((project) => (
          <p key={project.id}>
            {project.title} - {project.category}
          </p>
        ))}
      </section>

      <Interests />

      <FunFact />

      <WeatherChecker />

      <DrawingPad />
    </div>
  )
}

export default App