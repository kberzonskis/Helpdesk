import { BrowserRouter, Route, Routes } from 'react-router';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {PublicTemplate} from '../src/template/PublicTemplate'
import {AdminTemplate} from './template/AdminTemplates'

import { HomePage } from './pages/public/Home';
import { Page404 } from './pages/public/page404';

import { RegisterPage } from './pages/public/register';
import { LoginPage } from './pages/public/login';
import {LogoutPage} from './pages/public/Logout'


import { UserContextWrapper } from './context/user/UserContextWrapper';
import {StoriesContextWrapper} from './context/stories//StoriesContextWrapper';

import { AdminDasboardPage } from './pages/admin/Dashboard';

import {StoriesPage} from './pages/public/PublicStoriesPage'
import { NewStoryPage } from './pages/admin/NewStoryPage';
import { AdminEditStoryPage } from './pages/admin/EditStory';
import {PublicStoryViewPage} from "./pages/public/PublicStoryViewPage"
import { AdminAllStoriesPage } from './pages/admin/AdminAllStoriesPage';
import { AdminStoryViewPage } from './pages/admin/AdminStoryViewPage';
import{AdminAllStoriesPublishedPage} from './pages/admin/StoriesPublished'
import{AdminAllStoriesDraftPage} from './pages/admin/StoriesDraft'


export function App() {

return (
<UserContextWrapper>
<StoriesContextWrapper>

    <BrowserRouter>
      <Routes>


<Route element={<PublicTemplate />}>
<Route path='/' element={<HomePage />} />
<Route path='/register' element={<RegisterPage />} />
<Route path='/login' element={<LoginPage />} />
<Route path='/logout' element={<LogoutPage />} />
<Route path='/stories' element={<StoriesPage />} />
<Route path='/stories/:story' element={<PublicStoryViewPage/>} />

</Route>

<Route element={<AdminTemplate />}>
  <Route path='/admin' element={<AdminDasboardPage />} />
  <Route path='/admin/stories' element={<AdminAllStoriesPage/>} />
  <Route path='/admin/stories/new' element={<NewStoryPage />} />
  <Route path='/admin/stories/:story' element={<AdminStoryViewPage />} />
  <Route path='/admin/stories/:story/edit' element={< AdminEditStoryPage />} />
    <Route path='/admin/stories/published' element={<AdminAllStoriesPublishedPage/>} />
      <Route path='/admin/stories/draft' element={<AdminAllStoriesDraftPage/>} />
</Route>



<Route element={<PublicTemplate />}>
<Route path='*' index element={<Page404 />} />
</Route>

</Routes>
</BrowserRouter>
</StoriesContextWrapper>

</UserContextWrapper>
)
}