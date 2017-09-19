import React from 'react';
import Citation from './Citation';
import citations from '../citations';

class App extends React.Component {

    state = {
        // Citation en dur au lancement au chargement de la page. Effacé par la fonction componentWillMount

        // citation : 'Pierre qui roule n\'ammasse pas mousse',
        // auteur : 'Guillaume Cros'
    };
    // On monte une citation au chargement de la page pour éviter d'en écrire une en "dur" dès le départ
    componentWillMount() {
        this.generate();
    }

    generate = event => {
        // On transforme le citation.js en Array
        const keyArray = Object.keys(citations);
        // console.log(keyArray);
        // Générer une citation au hasard
        const randomKey = keyArray [Math.floor(Math.random() * keyArray.length)];
        // console.log(randomKey);
        //Pour ne pas générer deux fois de suite la même citation
        if (this.state.citation === citations[randomKey].citation) {
            this.generate();
            return;
        }
        this.setState(citations[randomKey]);
    };
    // On passe "details" qui devient un props. que l'on va récupérer dans Citation.js
    render() {
        return (
            <div>
                <Citation details={this.state} />
                <button onClick={e => this.generate(e)} > Une autre citation !!! </button>
            </div>
        )
    }
}

export default App;