const React = require('react')

class Index extends React.Component{
    render(){
        const {allPokemon} = this.props
        // console.log('HERE', this.props.allPokemon);
        return(
            <div>
                <h1 style= {styles.header}>Pokedex</h1>

                <a href='/pokemon/new'>Create New Pokemon</a>

                <ul>{allPokemon.map((pokemon, i) =>(
                    <li><a href={`/pokemon/${i}`}>{pokemon.name[0].toUpperCase()+pokemon.name.substring(1)}</a>
                    </li>
                ))}</ul>
            </div>
        )
    }
}

const styles = {
    header: {
        color: '#27ae60'
    }
}

module.exports = Index