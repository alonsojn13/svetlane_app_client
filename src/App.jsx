import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './layout.css';


import Dashboard from '@/Pages/Dashboard/Dashboard';

import Register from "@/Features/Auth/register/Register";

import MainLayout from '@/Components/MainLayout/MainLayout';
import NoNavbarLayout from '@/Components/MainLayout/NoNavbarLayout';

import Situations from '@/Features/Progress/Situations/Situations';
import Grammar from '@/Features/Progress/Grammar/Grammar';
import TrainingCards from '@/Features/Training/TrainingCards/TrainingCards';

import Login from '@/Features/Auth/login/Login';
import UserProfile from '@/Pages/UserProfile/UserProfile';
import AvailableLanguages from '@/Pages/AvailableLanguages/AvailableLanguages';
import Words from '@/Features/Progress/Words/Words';
import Posts from '@/Features/Posts/Posts';
import Contacts from '@/Features/Contacts/Contacts';
import Mailbox from '@/Features/Mailbox/Mailbox';
import Chat from './Features/Chat/Chat';
import NotFound from './Pages/NotFound/NotFound';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<NoNavbarLayout />}>
            <Route path="/" element={<Register />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/training" element={<TrainingCards />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/mailbox" element={<Mailbox />} />
            <Route path="/chat/:id/:chatId" element={<Chat />} />
          </Route>

          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/real-life-situations" element={<Situations />} />
            <Route path="/grammar-learned" element={<Grammar />} />
            <Route path="/active-words" element={<Words />} />
            <Route path="/available-languages" element={<AvailableLanguages />} />
            <Route path="*" element={<NotFound />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
