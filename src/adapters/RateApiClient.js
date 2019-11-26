import axios from 'axios';
 
const invoke = async () => {
  
  try {

    const response = await axios.get('https://api.exchangeratesapi.io/latest');

    const { data: { rates } } = response;

    return rates;

  } catch (error) {
    throw error;
  }
}

export default invoke;