const React = require('react')

class Index extends React.Component{
    render(){
        return(
            <div>
                <h1 style= {styles.header}>Pokedex</h1>
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