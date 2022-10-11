const React = require('react')

class Show extends React.Component {
    render() {
        const allPokemon = this.props.allPokemon
        return(
            <div>
                <h1 style= {styles.header}>Gotta Catch 'Em All</h1>
                <h2>{allPokemon.name[0].toUpperCase()+allPokemon.name.substring(1)}</h2>
                <img src={allPokemon.img+'.jpg'} />
                <br />
                
                <a href='/pokemon'>Back</a>
            </div>
        )
    }
}

const styles = {
    header: {
        color: '#27ae60'
    }
}

module.exports = Show;