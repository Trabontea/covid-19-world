import React, {useEffect, useState} from 'react';
import {DateLocale} from "../utils/utils";
import InfoGeneral from "../info/info-general";
import Axios from "axios";
import Countries from "../countries/countries";
import Footer from "../footer/footer";

const GlobalSituation = () => {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState({});
  
  const url = 'https://api.covid19api.com/summary';
  
  //"/country/:country" putem folosi slug
  
  useEffect(()=> {
    let source = Axios.CancelToken.source();
    
    const loadData = async () => {
      try {
        const response = await Axios.get(url, {
          cancelToken: source.token
        });
        setData(response.data);
      }
      catch(error) {
        setErrors(true)
        throw error
      }
    };
    
    loadData();
    return() => {
      source.cancel();
    };
  }, [url]);
  
  console.log('data', data);
  const Array = Object.values(data);
  const date = Array[2];
  const global = Array[0];
  const countries = Array[1];
  
  return (
    <React.Fragment>
      {hasError ? hasError :
        <div className="App">
          <div className="container">
            { date  ?
              <div>
                <div className="website-title" >
                  <h1>Situatie Internationala COVID-19</h1>
                  <p>
                    <span>Data Publicarii: </span>
                    <span>{DateLocale(date)}</span>
                  </p>
                </div>
              </div> : ''
            }
            {global ?
              <InfoGeneral general={global}  />
              : ''
            }
            {countries ?
             <Countries  countries={countries} general={global}/>
            : '' }
          </div>
          {global ?  <Footer /> : ''}
        </div>
      }
    </React.Fragment>
  );
};

export default GlobalSituation;