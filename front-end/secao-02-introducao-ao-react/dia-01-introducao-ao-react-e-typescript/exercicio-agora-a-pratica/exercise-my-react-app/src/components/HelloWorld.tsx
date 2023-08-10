import Title from './Title.tsx';
import ModuleDetails from './ModuleDetails.tsx';
import { GetTheAge } from '../utils/age.ts';

function HelloWolrd() {
    const name = 'Maires Souza';
    const bith = 1991;
    const age = GetTheAge(bith);

    return (
        <>
            <div>
                <h2 style={{color: 'yellowgreen'}}>{name}</h2>
                <p style={{color: 'yellowgreen', fontWeight: 'bolder'}}>{age} anos</p>
                <Title />
                <ModuleDetails />
            </div>
        </>
    )
}

export default HelloWolrd;