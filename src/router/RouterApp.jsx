import Home from "../pages/Home"
import Turismo from "../pages/Turismo"
import Implante from "../pages/Implante"
import Financiacion from "../pages/Financiacion"
import Clinica from "../pages/Clinicas"
import Medicina from "../pages/Medicina"
import CirujanoP from "../pages/ContextCirujanos/CirujanoP"
import Perez from "../pages/ContextCirujanos/hijos/Perez"

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
    {
      path: '/cirujano-context',
      element: <CirujanoP />,
    }, 
    {
      path: '/perez',
      element: <Perez />,
      }
    


  
    
    ]