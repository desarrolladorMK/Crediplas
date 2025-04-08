import Home from "../pages/Home"
import Turismo from "../pages/Turismo"
import Implante from "../pages/Implante"
import Financiacion from "../pages/Financiacion"
import MedicinaDetalle from "../pages/Medicina/Hijo/MedicinaDetalle"
import Medicina from "../pages/Medicina/Medicina"
import CirujanoP from "../pages/ContextCirujanos/CirujanoP"
import CirujanoDatalle from "../pages/ContextCirujanos/hijos/CirujanoDatalle"
import BariatricoDetalle from "../pages/Bariatricos/hijos/bariatricos"
import BariatricosP from "../pages/Bariatricos/Bariatricos"
import OdontologiaP from "../pages/Odontologia/OdontogiaP"
import OdontologiaDetalle from "../pages/Odontologia/Hijos/OdontologiaDetalle"
import ClinicaP from "../pages/Clinicas/ClinicasP"
import ClinicaDetalle from "../pages/Clinicas/Hijo/ClinicasDetalle"
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
      path: '/medicina/:id',
      element: <MedicinaDetalle />,
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
    {
      path: '/Odontologia',
      element: <OdontologiaP />,
    },
    {
      path: '/Odontologia/:id',
      element: <OdontologiaDetalle />,
    },
    {
      path: '/Clinica',
      element: <ClinicaP />,
    },
    {
      path: '/Clinica/:id',
      element: <ClinicaDetalle />,
    },
  ];


  
    
    