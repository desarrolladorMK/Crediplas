import Home from "../pages/Home"
import Turismo from "../pages/Turismo"
import Implante from "../pages/Implante"
import Financiacion from "../pages/Financiacion"
import Clinica from "../pages/Clinicas"
import Medicina from "../pages/Medicina"

export let routes = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/turismo',
      element: <Turismo />,
    },
    {
      path: '/implante',
      element: <Implante />,
    },
    {
      path: '/financiacion',
      element: <Financiacion />,
    },
    {
      path: '/clinica',
      element: < Clinica />,
    },
    {
      path: '/medicina',
      element: < Medicina />,
    },


  
    
    ]