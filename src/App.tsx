import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Login from './auth/Login';
import Register from './auth/Register';
import About from './components/About';
import Contact from './components/Contact';
import AgriTechTraining from './services/AgriTechTraining';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import AssessmentAndUnderstanding from './services/AssessmentAndUnderstanding';
import GlobalCropDashboard from './services/GlobalCropDashboard';
import RealTimeExpertAdvisory from './services/RealTimeExpertAdvisory';
import ModernFarmEquipment from './services/ModernFarmEquipment';
import DronesForCrop from './services/DronesForCrop';
import ClimateSmartAgriStrategy from './services/ClimateSmartAgriStrategy';
import CoFarmingModel from './services/CoFarmingModel';
import GlobalAgriSkill from './services/GlobalAgriSkill';
// import SmoothScroll from "smooth-scroll";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//     speed: 1000,
//     speedAsDuration: true,
// });

function App() {
    return (
        <>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/ServicePages/AssessmentAndUnderstanding" element={<AssessmentAndUnderstanding/> } />
                        <Route path="/ServicePages/GlobalCropDashboard" element={<GlobalCropDashboard/>} />
                        <Route path="/ServicePages/RealTimeExpertAdvisory" element={<RealTimeExpertAdvisory/>} />
                        <Route path="/ServicePages/ModernFarmEquipment" element={<ModernFarmEquipment/>} />
                        <Route path="/ServicePages/AgriTechTraining" element={<AgriTechTraining />} />
                        <Route path="/ServicePages/DronesForCrop" element={<DronesForCrop/>} />
                        <Route path="/ServicePages/ClimateSmartAgriStrategy" element={<ClimateSmartAgriStrategy/>} />
                        <Route path="/ServicePages/CoFarmingModel" element={<CoFarmingModel/>} />
                        <Route path="/ServicePages/GlobalAgriSkill" element={<GlobalAgriSkill/>} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

function Home() {

    return (
        <>
            <Navigation />
            <Header />
            <About />
            <Services />
            <Team />
            <Testimonials />
            <Contact />
        </>
    )
};

export default App;