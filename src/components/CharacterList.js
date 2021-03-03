import CharacterCard from './CharactersCard';

const CharacterList = props => {
  const characterItem = props.characters.map(character => {
    return (
      <li key={character.id}><CharacterCard character={character} /></li>
    )
  })

  return (
    <section>
      <ul className="cards">
        <li>
        {characterItem}
        </li>
      </ul>
    </section>
  )
}

export default CharacterList;