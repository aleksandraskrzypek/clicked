import React,{useState, useEffect} from 'react'
import './MainGame.css'

import banana from './img/banan.png'
import orange from './img/pomarancza.png'
import bluebarry from './img/jagoda.png'
import strawberry from './img/truskawki.png'
import peach from './img/brzoskwinia.png'

function MainGame() {
    const [hajs, setHajs] = useState(1);

    const [banan, setBanan] = useState(1);
    const [banancount, setBanancount] = useState(0);
    const [zebranybanan, setZebranybanan] = useState(0);

    const [pomarancza, setPomarancza] = useState(5);
    const [pomaranczacount, setPomaranczacount] = useState(0);
    const [zebranapomarancza, setZebranapomarancza] = useState(0);

    const [jagoda, setJagoda] = useState(7);
    const [jagodacount, setJagodacount] = useState(0);
    const [zebranajagoda, setZebranajagoda] = useState(0);

    const [brzoskwinia, setBrzoskwinia] = useState(12);
    const [brzoskwiniacount, setBrzoskwiniacount] = useState(0);
    const [zebranabrzoskwinia, setZebranabrzoskwinia] = useState(0);

    const [truskawki, setTruskawki] = useState(17);
    const [truskawkicount, setTruskawkicount] = useState(0);
    const [zebranetruskawki, setZebranetruskawki] = useState(0);



    
    const handleBanan = () => {
        hajs>=banan ? setBanan(Math.round(banan * 1.5)) : setBanan(banan);
        hajs>=banan ? setHajs(hajs-banan): setHajs(hajs);
        hajs>=banan ? setBanancount(banancount+1) : setBanancount(banancount);
    }

    const handlePomarancza = () => {
        hajs>=pomarancza ? setPomarancza(Math.round(pomarancza * 1.5)) : setPomarancza(pomarancza);
        hajs>=pomarancza ? setHajs(hajs-pomarancza): setHajs(hajs);
        hajs>=pomarancza ? setPomaranczacount(pomaranczacount+1) : setPomaranczacount(pomaranczacount);
    }

    const handleJagoda = () => {
        hajs>=jagoda ? setJagoda(Math.round(jagoda * 1.5)) : setJagoda(jagoda);
        hajs>=jagoda ? setHajs(hajs-jagoda): setHajs(hajs);
        hajs>=jagoda ? setJagodacount(jagodacount+1) : setJagodacount(jagodacount);
    }
  
    const handleBrzoskwinia = () => {
        hajs>=brzoskwinia ? setBrzoskwinia(Math.round(brzoskwinia * 1.5)) : setBrzoskwinia(brzoskwinia);
        hajs>=brzoskwinia ? setHajs(hajs-brzoskwinia): setHajs(hajs);
        hajs>=brzoskwinia ? setBrzoskwiniacount(brzoskwiniacount+1) : setBrzoskwiniacount(brzoskwiniacount);
    }

    const handleTruskawki = () => {
        hajs>=truskawki ? setTruskawki(Math.round(truskawki * 1.5)) : setTruskawki(truskawki);
        hajs>=truskawki ? setHajs(hajs-truskawki): setHajs(hajs);
        hajs>=truskawki ? setTruskawkicount(truskawkicount+1) : setTruskawkicount(truskawkicount);
    }
  


   
    useEffect(() => {
        const interval = setInterval(() => {
            setZebranybanan(zebranybanan => zebranybanan + (banancount));
        }, 1000);
        return () => clearInterval(interval);
    },[zebranybanan,banancount] );
    

    useEffect(() => {
        const interval2 = setInterval(() => {
              setZebranapomarancza(zebranapomarancza => zebranapomarancza + (pomaranczacount*3));
          }, 3000);
          return () => clearInterval(interval2);
      },[zebranapomarancza,pomaranczacount] );


      useEffect(() => {
        const interval3 = setInterval(() => {
              setZebranajagoda(zebranajagoda => zebranajagoda + (jagodacount*6));
          }, 5000);
          return () => clearInterval(interval3);
      },[zebranajagoda,jagodacount] );

      useEffect(() => {
        const interval4 = setInterval(() => {
              setZebranabrzoskwinia(zebranabrzoskwinia => zebranabrzoskwinia + (brzoskwiniacount*9));
          }, 7000);
          return () => clearInterval(interval4);
      },[zebranabrzoskwinia,brzoskwiniacount] );
    
      useEffect(() => {
        const interval5 = setInterval(() => {
              setZebranetruskawki(zebranetruskawki => zebranetruskawki + (truskawkicount*12));
          }, 10000);
          return () => clearInterval(interval5);
      },[zebranetruskawki,truskawkicount] );
    


 
    return (
        <div className="main-head">
            <div className="main-body">
                <div className="up">
                    <h1>{hajs} $</h1>
                </div>


                <div className="center">
                    <div className="elements">
                        <div className="element">
                            <img src={banana} alt="" />
                            <div className="buttons">
                                <button className="buy" onClick={() => handleBanan()}><h1>{banan} $</h1></button>
                                <div className="place">
                                    <p>{banancount}/5s</p>
                                </div>
                            </div>
                        </div>

                        {(() => {
                            if (banancount>=10) {
                            return (
                       
                        <div className="element">
                            <img src={orange} alt="" />
                            <div className="buttons">
                                <button className="buy" onClick={() => handlePomarancza()}><h1>{pomarancza} $</h1></button>
                                <div className="place">
                                    <p>{pomaranczacount}/10s</p>
                                </div>
                            </div>
                        </div>
                            )}
                            })()}

                        {(() => {
                            if (pomaranczacount>=10) {
                            return (
                       
                        <div className="element">
                            <img src={bluebarry} alt="" />
                            <div className="buttons">
                                <button className="buy" onClick={() => handleJagoda()}><h1>{jagoda} $</h1></button>
                                <div className="place">
                                    <p>{jagodacount}/10s</p>
                                </div>
                            </div>
                        </div>
                            )}
                            })()}

                        {(() => {
                            if (jagodacount>=10) {
                            return (
                       
                        <div className="element">
                            <img src={peach} alt="" />
                            <div className="buttons">
                                <button className="buy" onClick={() => handleBrzoskwinia()}><h1>{brzoskwinia} $</h1></button>
                                <div className="place">
                                    <p>{brzoskwiniacount}/10s</p>
                                </div>
                            </div>
                        </div>
                            )}
                            })()}

                            {(() => {
                            if (brzoskwiniacount>=10) {
                            return (
                       
                        <div className="element">
                            <img src={strawberry} alt="" />
                            <div className="buttons">
                                <button className="buy" onClick={() => handleTruskawki()}><h1>{truskawki} $</h1></button>
                                <div className="place">
                                    <p>{truskawkicount}/10s</p>
                                </div>
                            </div>
                        </div>
                            )}
                            })()}

                    </div>
                    <div className="table">

                    {(() => {
                        if (banancount>0) {
                            return (
                        <table>
                            <tr>
                                <th>Fruits</th>
                                <th>Plants</th>
                                <th>Sell</th>
                            </tr>
                            {(() => {
                                if (banancount>0) {
                                    return (
                            <tr>
                                <td>Banana</td>
                                <td>{banancount}</td>
                                <td><button className="button-spieniez" onClick={() => {setHajs(hajs+zebranybanan); setZebranybanan(0)}}>{zebranybanan}</button></td>
                            </tr>
                                )}
                            })()}

                            {(() => {
                                if (pomaranczacount>0) {
                                    return (
                            <tr>
                                <td>Orange</td>
                                <td>{pomaranczacount}</td>
                                <td><button className="button-spieniez" onClick={() => {setHajs(hajs+(zebranapomarancza*2)); setZebranapomarancza(0)}}>{zebranapomarancza}</button></td>
                            </tr>
                                )}
                            })()}

                                {(() => {
                                if (jagodacount>0) {
                                    return (
                            <tr>
                                <td>Bluebarry</td>
                                <td>{jagodacount}</td>
                                <td><button className="button-spieniez" onClick={() => {setHajs(hajs+(zebranajagoda*4)); setZebranajagoda(0)}}>{zebranajagoda}</button></td>
                            </tr>
                                )}
                            })()}

                                {(() => {
                                if (brzoskwiniacount>0) {
                                    return (
                            <tr>
                                <td>Peach</td>
                                <td>{brzoskwiniacount}</td>
                                <td><button className="button-spieniez" onClick={() => {setHajs(hajs+(zebranabrzoskwinia*6)); setZebranabrzoskwinia(0)}}>{zebranabrzoskwinia}</button></td>
                            </tr>
                                )}
                            })()}

                                {(() => {
                                if (truskawkicount>0) {
                                    return (
                            <tr>
                                <td>Strawberry</td>
                                <td>{truskawkicount}</td>
                                <td><button className="button-spieniez" onClick={() => {setHajs(hajs+(zebranetruskawki*8)); setZebranetruskawki(0)}}>{zebranetruskawki}</button></td>
                            </tr>
                                )}
                            })()}

                        </table>
                    )}
                    })()}  
                   
                    </div>
               
                </div>
            </div>
        </div>
    )
}

export default MainGame
