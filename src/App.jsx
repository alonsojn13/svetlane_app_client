import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './styles/layout/layout.css';


import Dashboard from './private/dashboard/Dashboard';

import Methodology from './public/info/Methodology/Methodology';

import Register from "./public/auth/Register/Register";

import Home from "./public/home/Home"
import MainLayout from './components/MainLayout/MainLayout';
import NoNavbarLayout from './components/MainLayout/NoNavbarLayout';

import SocialChat from "./private/features/socialChat/SocialChat";
import WordsLearned from "./private/features/progress/activeWords/WordsLearned";
import Config from './private/config/Config';
import ScienceBased from './public/info/ScienceBased/ScienceBased';
import RealLifeSituations from './private/features/progress/realLifeSituations/RealLifeSituations';
import GrammarLearned from './private/features/progress/grammarLearned/GrammarLearned';
import CEFRAlignment from './private/features/progress/cefrAlignment/CEFRAlignment';
import Login from './public/auth/Login/Login';
import TrainingCards from './private/features/learningCards/TrainingCards';
import UserProfile from './private/features/userProfile/UserProfile';


function App() {

  

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<NoNavbarLayout />}>
            <Route path="/" element={<Home />} /> {/* public */}

            <Route path="/user-profile" element={<UserProfile />} /> {/* private */}
            <Route path="/social" element={<SocialChat />} /> {/* private */}
            <Route path="/register" element={<Register />} /> {/* public */}
            <Route path="/login" element={<Login />} /> {/* public */}
            <Route path="/training" element={<TrainingCards />} />

          </Route>

          <Route element={<MainLayout />}>

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cefr-aligned" element={<CEFRAlignment />} />
            <Route path="/real-life-situations" element={<RealLifeSituations />} />
            <Route path="/grammar-learned" element={<GrammarLearned />} />
            <Route path="/words-learned" element={<WordsLearned />} />
            <Route path="/config" element={<Config />} />

            <Route path="/methodology" element={<Methodology />} />
            <Route path="/science-based" element={<ScienceBased />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
