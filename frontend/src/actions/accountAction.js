import axios from 'axios'

export const register = (values) => async () => {
  try {
    console.log(values);

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
 
    const { data } = await axios.post(
      'localhost:5000/api/account/register',
      { values },
      config
    )
  } catch (error) {
   
    console.log(error)

  }
}


