import { HeroList } from "../components"


const MarvelPage = () => {

  const publisher = 'Marvel Comics'

  return (
    <>
      <h1>Marvel Comics</h1>
			<hr />

      <HeroList publisher={publisher}/>
    </>
  )
}

export default MarvelPage
