import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
    return (
        <div>
            <Pet name="Callie" animal="Dog" breed="Walldog" />
            <Pet name="Mona" animal="Dog" breed="Princess" />
            <Pet name="Charlie" animal="Cat" breed="Old" />
        </div>
    )
};

render(<App />, document.getElementById('root'));
