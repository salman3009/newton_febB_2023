import React, { useState,useEffect } from 'react';

import {PokemonThumbnail} from './PokemonThumbnail'

import "./App.css"
export function App() {
   const [getList, setList] = useState([]);
  const [getData, setData] = useState("https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1");
  const [getFlag,setFlag] = useState(false);
  const [getId,setId] = useState(-1);

  async function initial() {
    try {
      let response = await fetch(getData);
      let data = await response.json();
      let list = data[0].results;
      setData(data[0].next);
      for await (let obj of list) {
        let responsePokemon = await fetch(obj.url);
        let dataPokemon = await responsePokemon.json();
        console.log(dataPokemon);
        setList((currentData) => [...currentData, dataPokemon[0]])
      }

    } catch (err) {

    }
  }

  useEffect(() => {
    initial();
  }, [])



   const onModalEvent = (id)=>{
       setFlag(!getFlag);
       setId(id);
   }
  return (
    <div className="container">
      {getList.map((obj, index) => {
        return (
        <div key={index} className={`thumb-container ${obj.type}`}>
            <div class="number"><small>#{obj.id}</small></div><img
                src={obj.image}
                alt="bulbasaur"/>
            <div class="detail-wrapper">
                <h3>{obj.name}</h3><small>Type: {obj.type}</small>
                <button class="pokeinfo" onClick={()=>onModalEvent(index)}>Know more...</button>
            </div>
        </div>
    )
      })}
      <button onClick={initial}>More Pokemon</button>



      {getFlag && <div id="myModal" class="modal">

        <div class={`modal-content ${getList[getId].type}`}>
          <span class="close" onClick={()=>onModalEvent(-1)}>&times;</span>
          <div class="box">
            <div class="expanded-left">
              <img class="expanded-image"
                src={getList[getId].image}
                alt="jigglypuff" />
              <h3 class="expanded-name">{getList[getId].name}</h3>
            </div>
            <div class="expanded-right">
              <table class="expanded-table normal ">
                <tbody>
                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td>Weight:</td>
                            <td>{getList[getId].weight}</td>
                          </tr>
                          <tr>
                            <td>Height:</td>
                           <td>{getList[getId].height}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td>Stat1:</td>
                            <td>{getList[getId].stats[0].stat.name}</td>
                          </tr>
                          <tr>
                            <td>Stat2:</td>
                             <td>{getList[getId].stats[1].stat.name}</td>
                          </tr>
                          <tr>
                            <td>Stat3:</td>
                             <td>{getList[getId].stats[2].stat.name}</td>
                          </tr>
                          <tr>
                            <td>Stat4:</td>
                             <td>{getList[getId].stats[3].stat.name}</td>
                          </tr>
                          <tr>
                            <td>Stat5:</td>
                             <td>{getList[getId].stats[4].stat.name}</td>
                          </tr>
                          <tr>
                            <td>Stat6:</td>
                             <td>{getList[getId].stats[5].stat.name}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td>Bs1:</td>
                              <td>{getList[getId].stats[0].base_stat}</td>
                          </tr>
                          <tr>
                            <td>Bs2:</td>
                            <td>{getList[getId].stats[1].base_stat}</td>
                          </tr>
                          <tr>
                            <td>Bs3:</td>
                             <td>{getList[getId].stats[2].base_stat}</td>
                          </tr>
                          <tr>
                            <td>Bs4:</td>
                             <td>{getList[getId].stats[3].base_stat}</td>
                          </tr>
                          <tr>
                            <td>Bs5:</td>
                            <td>{getList[getId].stats[4].base_stat}</td>
                          </tr>
                          <tr>
                            <td>Bs6:</td>
                             <td>{getList[getId].stats[5].base_stat}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
      }

    </div>
  );
    
  }
  