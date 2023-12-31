import Image from 'next/image'
import GetCountries from '../GetCountries'

export default async function Home() {
  const data = await GetCountries() 
  const americas = data.filter(country => country.region.includes("Americas"))
const countries = americas.map(country =>(
  <article className='border-4 rounded-lg py-6 flex flex-col items-center justify-center border-sky-800 hover:shadow-2xl'>
    <Image src={country.coatOfArms.svg} alt={country.name.common} width={250} height={250}/>
    <h2>{country.name.common}</h2>
  </article>
))
  return (

    <div>
      <h1 className='flex flex-col items-center h-[50px] justify-center m-4 bg-sky-800 text-white'>North America Countries
      </h1>
        <div className='grid grid-cols-4 gap-3 uppercase mt-5'>{countries}
        </div>

    <footer className='flex flex-col items-center h-[50px] justify-center m-4 bg-sky-800 text-white'>
      <p>{`we have ${countries.length} countries in Africa`}</p>
       </footer>
    </div>
  )
}
