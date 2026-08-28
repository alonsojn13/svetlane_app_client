import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './layout.css';


import Dashboard from './pages/Dashboard/Dashboard';

import Register from "@/pages/essential/Register/Register";

import MainLayout from './components/MainLayout/MainLayout';
import NoNavbarLayout from './components/MainLayout/NoNavbarLayout';

import RealLifeSituations from './pages/RealLifeSituations/RealLifeSituations';
import GrammarLearned from './pages/GrammarLearned/GrammarLearned';
import TrainingCards from './features/learningCards/TrainingCards';

import Config from '@/pages/essential/Config/Config';
import Login from '@/pages/essential/Login/Login';
import UserProfile from './pages/UserProfile/UserProfile';
import AvailableLanguages from './pages/AvailableLanguages/AvailableLanguages';
import ActiveWords from '@/pages/ActiveWords/ActiveWords';
import SocialPosts from './features/SocialPosts/SocialPosts';
import SocialContacts from './features/SocialContacts/SocialContacts';
import SocialMailbox from './features/SocialMailbox/SocialMailbox';


function App() {

  

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<NoNavbarLayout />}>
            <Route path="/" element={<Register />} /> {/* public */}

            <Route path="/user-profile" element={<UserProfile />} /> {/* private */}
            <Route path="/register" element={<Register />} /> {/* public */}
            <Route path="/login" element={<Login />} /> {/* public */}
            <Route path="/training" element={<TrainingCards />} />

            <Route path="/contacts" element={<SocialContacts />} />
            <Route path="/posts" element={<SocialPosts />} />
            <Route path="/mailbox" element={<SocialMailbox />} />



          </Route>

          <Route element={<MainLayout />}>

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/real-life-situations" element={<RealLifeSituations />} />
            <Route path="/grammar-learned" element={<GrammarLearned />} />
            <Route path="/active-words" element={<ActiveWords />} />
            <Route path="/config" element={<Config />} />

            <Route path="/available-languages" element={<AvailableLanguages />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
