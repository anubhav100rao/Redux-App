import './App.css';
import Profile from './Components/Profile';
import Login from './Components/Login';
import ChangeColor from './Components/ChangeColor';
import { useSelector } from 'react-redux'


function App() {
    const theme = useSelector(state => state.theme.value)
    return (
        <div className="App"
            style={{
                color: theme,
            }}
        >
            <Profile />
            <Login />
            <ChangeColor />
        </div>
    );
}

export default App;
