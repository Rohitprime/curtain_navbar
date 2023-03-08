import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import RootLayout from './component/RootLayout'
import Project from './component/Project'
import Contect from './component/Contect'


const App = ()=>{

  const routes = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          index:true,
          path:'/',
          element:<Home/>,
        },
        {
          index:true,
          path:'/Home',
          element:<Home/>,
        },
        {
          path:'About',
          element:<About/>,
        },
        {
          path:'Projects',
          element:<Project/>,
        },
        {
          path:'Contect',
          element:<Contect/>,
        },
  
      ]
    }
  ])

  return(
   <RouterProvider router={routes}/>
  )
}

export default App

