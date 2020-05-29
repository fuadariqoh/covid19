import Axios from "axios";

const URL = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = URL;

  if (country) {
    changeableUrl = `${URL}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await Axios.get(changeableUrl);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await Axios.get(`${URL}/daily`);

    const modifiedData = data.map((dailydata) => ({
      confirmed: dailydata.confirmed.total,
      deaths: dailydata.deaths.total,
      date: dailydata.reportDate,
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await Axios.get(`${URL}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
