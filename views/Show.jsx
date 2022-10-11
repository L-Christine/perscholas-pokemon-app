const React = require('react')

class Show extends React.Component {
    render() {
        const allPokemon = this.props.allPokemon
        const imgPokemon = allPokemon.img+'.jpg'
        return(
            <div>
                <h1 style= {styles.header}>Gotta Catch 'Em All</h1>
                <h2>{allPokemon.name}</h2>
                <img src={imgPokemon}/>
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