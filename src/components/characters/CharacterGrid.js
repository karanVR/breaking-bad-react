import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ( {items, isLoading} ) => {
    return isLoading ? <Spinner /> : 
    <section className='cards'>
        {items.map(item => (
            // <h1 key={item.char_id}>{item.name}</h1>
            <CharacterItem  key={item.char_id} item={item} />
        ))}
    </section>
}

export default CharacterGrid
