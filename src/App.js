import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import OnboardingContainer from './components/onboarding/onboardingContainer';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/onboarding"
                    component={OnboardingContainer}
                    exact
                />
                <Route path="/" component={Home} exact />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
