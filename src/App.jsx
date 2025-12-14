import Emojipedia from "./Emojipedia"
import { createEmojipedia } from "./CreateEmojipedia"




function App() {

  return (
    <>
      <div>
      <h1>
        <span className="title">emojipedia</span>
      </h1>

      <dl className="dictionary">
        {Emojipedia.map(createEmojipedia)}
        

      </dl>
    </div>
    </>
  )
}

export default App
