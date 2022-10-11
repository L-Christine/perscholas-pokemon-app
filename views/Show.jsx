const React = require('react')

class Show extends React.Component {
    render() {
        const seePokemon = this.props.seePokemon
        return(
            <div>
                <h1 style= {styles.header}>Gotta Catch 'Em All</h1>
                <h2>{seePokemon.name[0].toUpperCase()+seePokemon.name.substring(1)}</h2>
                <img src={seePokemon.img+'.jpg'} />
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