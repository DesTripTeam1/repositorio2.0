const token = `${process.env.REACT_APP_MY_KEY}`;

export const datoHeader = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};
export const endPointIA = "https://api.openai.com/v1/completions";

export const endPointdata = process.env.REACT_APP_MY_URL_DB1;
export const endPointdata2 = process.env.REACT_APP_MY_URL_DB2;

export const options = ["Montaña", "Playa", "Ciudad", "Campo"];
export const options2 = ["Cultura", "Gastronomia", "Familiar", "Ocio Nocturno"];




  


  