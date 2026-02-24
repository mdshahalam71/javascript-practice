const allCountry="https://www.apicountries.com/countries"

 const res=await fetch(allCountry);
 const data=await res.json()
  console.log(data.name)