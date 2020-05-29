import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Cards from './components/Card'
// import Cards from './components/Chart'
// import Cards from './components/Card'
import { fetchData } from "./API";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./app.module.css";

// function App() {
//   const [data, setData] = useState();

//   useEffect(() => {
//     // async function getData() {
//     //   const fetchedData = await fetchData();
//     //   setData({ ...data, data: fetchedData });
//     //   console.log(data);
//     // }
//     // getData();
//     fetchData().then((res) => {
//       setData({ ...data, data: res });
//     });
//   }, []);

//   console.log(data);
//   return (
//     <div className={styles.container}>
//       <Cards data={data} />
//       <CountryPicker />
//       <Chart />
//     </div>
//   );
// }

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />{" "}
      </div>
    );
  }
}

export default App;
