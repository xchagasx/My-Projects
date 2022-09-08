import React, { useEffect, useState } from 'react';
import background from '../src/video/background.mp4';
import './App.css';
import checkIcon from './icons/icons';
import spotify from './icons/spotify';

function App() {
const [time, setTime] = useState(0);
const [timerOn, setTimerOn] = useState(false)

useEffect(() => {
  let interval = null;

  if(timerOn) {
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 10)
    }, 10)
  } else {
    clearInterval(interval)
  }
  return () => clearInterval(interval)
}, [timerOn])

return (
  <div className='App'>
      <video autoPlay loop muted>
        <source src={background} type='video/mp4' />
      </video>
      <h1>StopWatch - Turma 22 A</h1>
      <button className='btn btn-light'>
      <a href='https://open.spotify.com/playlist/1apMRFDHRlErpH6FlJtbBP' target='_blank' rel="noreferrer">{spotify} Spotify da Turma {spotify}</a>
      </button>
      <audio>
        <source src=''></source>
        TestAudio
      </audio>
    <div className='fs-1'>
      <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
      <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)} : </span>
      <span>{('0' + Math.floor((time / 10) % 100)).slice(-2)}</span>
    </div>
    <div>
      {!timerOn && time === 0 && (
      <button className='btn btn-success' onClick={() => setTimerOn(true)}> Start </button>
        )}
      {timerOn && (
      <button className='btn btn-success' onClick={() => setTimerOn(false)}> Stop </button>
      )}
      {!timerOn && time !== 0 && (
      <button className='btn btn-success' onClick={() => setTimerOn(true)}> Resume </button>
      )}
      {!timerOn && time > 0 && (
        <button className='btn btn-success' onClick={() => setTime(true)}> Reset </button>
        )}
    </div>
      <div>
        <footer>

      <h4>Aplicação em Desenvolvimento</h4>
      <h5>Resolução a partir de 1350x600 </h5>

        <h4>Melhorias:</h4>
        <p>{checkIcon}<i class="bi bi-file-earmark-code">Responsividade</i></p>
        <p>{checkIcon}<i class="bi bi-file-earmark-code">Usuário irá definir o tempo;</i></p>
        <p>{checkIcon}<i class="bi bi-file-earmark-code">Ao clicar em Start irá iniciar Música;</i></p>
        <p>{checkIcon}<i class="bi bi-file-earmark-code">Conforme tempo escolhido, faz sincronismo automático com o mesmo tempo da música;</i></p >
        <p>...</p>
      <p> Fonte do Código:<a class="nav-link active" aria-current="page" href="https://www.code-boost.com/">Code Boost</a></p>
        </footer>
      </div>

    </div>
    
  );
}

export default App;
