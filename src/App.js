import React from 'react';

//import Cards from './components/Cards/Cards';
//import Cards from './components/Chart/Chart';
//import Cards from './components/CountryPicker/CountryPicker';

import{Cards, Chart, CountryPicker} from'./components'; //Jednostavnije nacin importanja za razliku od gornjeg nacina, povezan sa index.js u componentsu
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/coronaworld4.png';
//Inicijalni state-ovi
class App extends React.Component {
    state= {
        data: {},
        country: '',    
    }
//componentDidMount ova se metoda koristi za dohvacanje podataka iz exstenog api-a, async koristimo zbog await-a
    async componentDidMount(){
        const data = await fetchData();

        this.setState({data});
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);

        this.setState({data, country:country });
    }


    render(){
        const { data, country } = this.state;

        return(
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID19"/>
                <Cards data= {data} />
                <Chart data= {data} country={country}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
            </div>
              );
            
            }

}

export default App;
