import { Navigate, Route, Routes } from 'react-router-dom'

import { Navbar } from '../../ui'
import { MarvelPage, DCPage, HeroePage, SearchPage } from '../../heroes'

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/marvel' element={ <MarvelPage /> } />
          <Route path='/dc' element={ <DCPage /> } />
          <Route path='/heroe/:id' element={ <HeroePage /> } />
          <Route path='/search' element={ <SearchPage /> } />

          <Route path='/' element={ <Navigate to="/marvel" /> } />
        </Routes>
      </div>
    </>
  )
}