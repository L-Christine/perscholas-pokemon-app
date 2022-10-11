const React = require('react')

class New extends React.Component{
    render (){
        return (
            <div>
                <h1>Add new pokemon</h1>

                <form action= '/pokemon' method= 'POST'>
                    Name: <input type='text' name='name' /><br/>
                    Image URL: <input type='text' name='img' />.jpg<br/>
                    <input type='submit' name='' value='Create Pokemon'/>
                </form>

                <a href='/pokemon'>Back</a>
            </div>
        )
    }
}

module.exports= New