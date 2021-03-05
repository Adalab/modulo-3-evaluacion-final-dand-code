import CharacterCard from './CharactersCard';

const CharacterList = props => {
  const characterItem = props.characters.map(character => {
    return (
      <li key={character.id} className="card_list"><CharacterCard character={character}  /></li>
    )
  })

  return (
    <section>
      <ul className="display_grid-cards">
        {characterItem}
      </ul>
    </section>
  )
}

export default CharacterList;