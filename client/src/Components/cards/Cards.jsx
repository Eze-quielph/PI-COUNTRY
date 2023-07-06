import Card from "../Card/Card";
import style from './Cards.module.css'

//Array de pruebas
const paises = [
  {
    id: "225545dc-2873-4e77-a2df-bdc141942cce",
    name: "Kenya",
    flag: "https://flagcdn.com/ke.svg",
    continente: "Africa",
    capital: "Nairobi",
    subregion: "Eastern Africa",
    area: "580367",
    poblacion: "53771300",
    createdAt: "2023-07-06T22:21:01.127Z",
    updatedAt: "2023-07-06T22:21:01.127Z",
  },
  {
    id: "f3cd7449-d894-4539-8e14-58068d24410c",
    name: "San Marino",
    flag: "https://flagcdn.com/sm.svg",
    continente: "Europe",
    capital: "City of San Marino",
    subregion: "Southern Europe",
    area: "61",
    poblacion: "33938",
    createdAt: "2023-07-06T22:21:01.377Z",
    updatedAt: "2023-07-06T22:21:01.377Z",
  },
  {
    id: "bf79b04e-e7d3-4bbc-9981-f79f852795d4",
    name: "French Polynesia",
    flag: "https://flagcdn.com/pf.svg",
    continente: "Oceania",
    capital: "Papeetē",
    subregion: "Polynesia",
    area: "4167",
    poblacion: "280904",
    createdAt: "2023-07-06T22:21:01.400Z",
    updatedAt: "2023-07-06T22:21:01.400Z",
  },
  {
    id: "66ad97bf-52a8-4796-9bea-4394b6b2a294",
    name: "Sierra Leone",
    flag: "https://flagcdn.com/sl.svg",
    continente: "Africa",
    capital: "Freetown",
    subregion: "Western Africa",
    area: "71740",
    poblacion: "7976985",
    createdAt: "2023-07-06T22:21:01.420Z",
    updatedAt: "2023-07-06T22:21:01.420Z",
  },
  {
    id: "69d9bff7-38d4-44a2-92d3-7ec106a7ca91",
    name: "Madagascar",
    flag: "https://flagcdn.com/mg.svg",
    continente: "Africa",
    capital: "Antananarivo",
    subregion: "Eastern Africa",
    area: "587041",
    poblacion: "27691019",
    createdAt: "2023-07-06T22:21:01.439Z",
    updatedAt: "2023-07-06T22:21:01.439Z",
  },
  {
    id: "ae9c8b2a-e204-4f3e-9706-4a9feed89fb9",
    name: "Nigeria",
    flag: "https://flagcdn.com/ng.svg",
    continente: "Africa",
    capital: "Abuja",
    subregion: "Western Africa",
    area: "923768",
    poblacion: "206139587",
    createdAt: "2023-07-06T22:21:01.462Z",
    updatedAt: "2023-07-06T22:21:01.462Z",
  },
  {
    id: "8e6aad2e-ba38-403d-bf8e-055cffb5e241",
    name: "Jordan",
    flag: "https://flagcdn.com/jo.svg",
    continente: "Asia",
    capital: "Amman",
    subregion: "Western Asia",
    area: "89342",
    poblacion: "10203140",
    createdAt: "2023-07-06T22:21:01.477Z",
    updatedAt: "2023-07-06T22:21:01.477Z",
  },
  {
    id: "f6e3d45a-56e3-49f2-82a5-d5d0c9a897a3",
    name: "Libya",
    flag: "https://flagcdn.com/ly.svg",
    continente: "Africa",
    capital: "Tripoli",
    subregion: "Northern Africa",
    area: "1759540",
    poblacion: "6871287",
    createdAt: "2023-07-06T22:21:01.496Z",
    updatedAt: "2023-07-06T22:21:01.496Z",
  },
  {
    id: "d29236db-a5f7-4c20-8fec-98634c361510",
    name: "Guyana",
    flag: "https://flagcdn.com/gy.svg",
    continente: "Americas",
    capital: "Georgetown",
    subregion: "South America",
    area: "214969",
    poblacion: "786559",
    createdAt: "2023-07-06T22:21:01.520Z",
    updatedAt: "2023-07-06T22:21:01.520Z",
  },
  {
    id: "9a67842d-a673-4eb2-8870-244fc86d3bd2",
    name: "Mexico",
    flag: "https://flagcdn.com/mx.svg",
    continente: "Americas",
    capital: "Mexico City",
    subregion: "North America",
    area: "1964375",
    poblacion: "128932753",
    createdAt: "2023-07-06T22:21:01.554Z",
    updatedAt: "2023-07-06T22:21:01.554Z",
  },
];

const Cards = () => {
  return (
    <div className={style.container}>
      {paises.map((country) => {
        return (
          <Card
            key={country.id}
            country={country.name}
            flag={country.flag}
            continente={country.continente}
            capital={country.capital}
            subregion={country.subregion}
            area={country.area}
            poblacion={country.poblacion}
          />
        );
      })}
    </div>
  );
};

export default Cards;
