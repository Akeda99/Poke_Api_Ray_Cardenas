import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerGlobal } from '../store/slices/trainer.slices'
import './styles/home.css'

const Home = () => {

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(setTrainerGlobal(e.target.name.value.trim()))
        e.target.name.value='' // Para que se borre en la barra de busqueda el dato
        navigate('/pokedex')
    }
  return (
    <div>
      <section className='section_home'>
        <div className="img_div">
        <img src="/Home/pokedex.png" alt="" />
        </div>
        <div className="text_div">
        <h1>Hola entrenador!</h1>
        <p>Para poder comenzar, dame tu nombre</p>
        </div>
        <div className="form_div">
        <form onSubmit={handleSubmit}>
            <input id='name'type="text" placeholder='Tu nombre..'/>
            <button>Comenzar</button>
        </form>
        </div>
        <div className="headers">
        <header className='header1'>
        <div className='header__black1'>
        <div className="header__circle1">

        </div>
        </div>
    </header>
        </div>

    </section>
    </div>
  )
}

export default Home