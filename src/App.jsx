import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import QuizDisplay from "./feature/QuizDisplay/QuizDisplay";
import RootLayout from "./layout/RootLayout";



import {  Home, About, Profile, Contact, QuizzHome,Test } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/quizzes" element={<QuizzHome/>} />
      <Route path="/myaccount" element={<Profile/>} />
      <Route path="/test" element={<Test/> } />
      <Route path="*" element={<Home/>} />
      
    </Route>
    <Route>
       <Route path="/quiz" element={<QuizDisplay/>} />
    </Route>
   </>
  )
);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
