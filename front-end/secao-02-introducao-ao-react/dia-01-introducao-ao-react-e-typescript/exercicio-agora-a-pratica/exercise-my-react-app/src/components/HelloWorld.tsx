import Title from './Title.tsx';
import ModuleDetails from './ModuleDetails.tsx';
import GetTheAge from '../utils/age.ts';

function HelloWolrd() {
    return (
        <>
            <div>
                <Title />
                <ModuleDetails />
                <h2>{`A idade é ${GetTheAge(1991)} anos`}</h2>
            </div>
        </>
    )
}

export default HelloWolrd;