const instance = axios.create({
    baseURL: 'https://restcountries.com/v3.1/all',
    headers: {'X-Custom-Header': 'foobar'}
  });



  const network = {

    get: async(URL)=>{
       return await instance.get()
    }
    

  }