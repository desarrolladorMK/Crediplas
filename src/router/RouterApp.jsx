import Home from "../pages/Home"
import Turismo from "../pages/Turismo"
import Implante from "../pages/Implante"
import Financiacion from "../pages/Financiacion"
import Clinica from "../pages/Clinicas"
import Medicina from "../pages/Medicina"
import CirujanoP from "../pages/ContextCirujanos/CirujanoP"
import CirujanoDatalle from "../pages/ContextCirujanos/hijos/CirujanoDatalle"
import BariatricoDetalle from "../pages/Bariatricos/hijos/Hbariatricos"
import BariatricosP from "../pages/Bariatricos/Bariatricos"
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
      path: '/cirujano/:id',
      element: <CirujanoDatalle />,
    },
    {
      path: '/bariatricos',
      element: <BariatricosP />,
    },
    {
      path: '/bariatricos/:id',
      element: <BariatricoDetalle />,
    },
  ];


  
    
    