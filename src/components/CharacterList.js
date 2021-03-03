import CharacterCard from './CharactersCard';

const CharacterList = props => {
  return (
    <section>
      <ul className="cards">
        <CharacterCard />
      </ul>
    </section>
  )
}

export default CharacterList;