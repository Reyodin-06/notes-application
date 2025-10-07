import {Route,Routes} from "react-router"
import Home from './pages/Home'
import DetailsPage from './pages/DetailsPage'
import CreatePage from './pages/CreatePage'
// import toast from 'react-hot-toast'
const App = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/notes/:id" element={<DetailsPage/>}/>
          <Route path="/create" element={<CreatePage/>}/>
        </Routes>
      </div>
  )
}

export default App
