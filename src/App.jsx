// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import Card from "./Components/Card"
// import Classcomp from "./Components/Classcomp"
// import MyComponent from "./Components/Classcomponent2"
// import Footer from "./Components/Footer"
// import Navbar from "./Components/Navbar"
// import Fruit from "./Components/State"
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router"
import Conditionalrendering from "./Components/Conditionalrendering"
import Controlledcomponent from "./Components/Controlledcomponent"
import Derivedstate from "./Components/Derivedstate"
import Forwardref from "./Components/Forwardref"
import Functionalprops from "./Components/functionalprops"
import Handlingevents from "./Components/Handlingevents"
import Lifecyclemethod from './Components/Lifecyclemethod'
import Mapwitharray from "./Components/Mapwitharray"
import HookExamplePage from "./Components/MultipleHooks"
import HooksExample from "./Components/MultipleHooks1"
import Parent from "./Components/Parent"
import User from "./Components/Props"
import Propsmapping from "./Components/Propsmapping"
import NameEmailList from "./Components/SearchData"
import Uncontrolledcomponent from "./Components/Uncontrolledcomponent"
import UpdateArrayinState from "./Components/UpdateArrayinState"
import Updatingobjectsinstate from "./Components/Updatingobjectsinstate"
import UseActionState from "./Components/UseActionState"
import Usecallback from "./Components/Usecallback"
import Useeffect2 from './Components/Useeffect2'
import UseEffectHook from './Components/Useeffecthook'
import Useformstatus from "./Components/Useformstatus"
import UseId from "./Components/UseId"
import Usememo from "./Components/Usememo"
import UseReducer from "./Components/UseReducer"
import UseRef from './Components/UseRef'
import NameLoginForm from './Components/Userform'
import Usetransition from "./Components/Usetransition"
import Home from "./RouterComponents/Home"
import About from "./RouterComponents/About"
import Login from "./RouterComponents/Login"
import LinkPage from "./RouterComponents/LinkPage"
import Navbar from "./RouterComponents/Navbar"
import PageNotFound from "./RouterComponents/PageNotFound"
import College from "./RouterComponents/College"
import Student from "./RouterComponents/Student"
import Department from "./RouterComponents/Department"
import Details from "./RouterComponents/Details"
import NavbarWithLogin from "./Components/ProlegionNavbar"
import UserDetails from "./RouterComponents/UserDetails"
import ProlegionNavbar from "./ProlegionComponents/ProlegionNavbar"
import Main from "./ContextApiComponents.jsx/Main"
import ApiData from "./Components/ApiData"
import ApiData1 from "./Components/ApiData1"
import AddApiData1 from "./Components/AddApiData1"
import EditApiData from "./Components/EditApiData"
import LazyLoadingComponent from "./Components/LazyLoadingComponent"
import { AuthProvider } from "./ContextApiMiniProject/AuthContext"
import ContextNavbar from "./ContextApiMiniProject/ContextNavbar"
import ContextHome from "./ContextApiMiniProject/ContextHome"
import ContextLogin from "./ContextApiMiniProject/ContextLogin"
import ProtectedRoute from "./ContextApiMiniProject/ProtectedRoute"
import Dashboard from "./ContextApiMiniProject/Dashboard"
import Profile from "./ContextApiMiniProject/Profile"
import TodoApp from "./ToDoAppComponents/ToDoApp.jsx"
import BookContainer from "./reduxContainer/BookContainer.jsx"
import ProductList from "./ReduxAddToCart/Components/ProductList.jsx"
import Cart from "./ReduxAddToCart/Components/Cart.jsx"
import Counter from "./ReduxToolkit/Counter.jsx"
import TodoInput from "./ReduxToolkitToDo/Components/TodoInput.jsx"
import TodoList from "./ReduxToolkitToDo/features/todos/TodoList.jsx"
import ProductList1 from "./ReduxToolkitAddToCart/AddtocartComponents/ProductList1.jsx"
import Cart1 from "./ReduxToolkitAddToCart/AddtocartComponents/Cart1.jsx"






function App() {

  return (
 <>
{/* ReduxToolkitTodo */}
<div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo Manager</h1>
      <TodoInput />
      <TodoList/>
    </div>

    {/* ReduxToolkitAddToCart */}

    {/* <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🛍️ Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProductList1 />
        <Cart1/>
      </div>
    </div> */}


 {/* <Counter/> */}

 {/* for Redux carttoADD projet:- */}

 {/* <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">🛒 My E-Commerce</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProductList />
        <Cart/>
      </div>
    </div> */}


  {/* <BookContainer /> */}
 {/* <TodoApp /> */}

{/* context-api mini project */}

{/* <AuthProvider>
    
        <div className="min-h-screen bg-gray-100">
          <ContextNavbar />
          <Routes>
            <Route path="/" element={<ContextHome />} />
            <Route path="/login" element={<ContextLogin />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile/>
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
  
    </AuthProvider> */}

   

    {/* <Main /> */}
    {/* <ApiData /> */}
    {/* <ApiData1 /> */}
    {/* <LazyLoadingComponent /> */}

    {/* <ul className="flex justify-around py-6">
      <li>
        <NavLink to="/">List</NavLink>
      </li>
      <li>
        <NavLink to="/add">Add user</NavLink>
      </li>
    </ul>
   
    <Routes>
      <Route path="/" element={<ApiData1 />} />
      <Route path="/add" element={<AddApiData1 />} />
      <Route path="/edit/:id" element={<EditApiData />} />
    </Routes>
     */}
    
      {/* <Navbar />
    <Footer />
    // <div className="flex">
    // <Card title="card 1" description="card 2 desc" /> 
    // <Card title="card 2" description="card 2 desc" />
    // <Card title="card 2" description="card 2 desc" />
    // <Card title="card 2" description="card 2 desc" />
    // </div>
    <Classcomp /> */}
      {/* <MyComponent /> */}
      {/* <Fruit/> */}
      {/* <User /> */}
      {/* <Handlingevents /> */}
      {/* <Propsmapping /> */}
      {/* <Conditionalrendering /> */}
      {/* <Mapwitharray /> */}
      {/* <Controlledcomponent /> */}
      {/* <Lifecyclemethod /> */}
      {/* <UseEffectHook /> */}
      {/* <Useeffect2/> */}
      {/* <NameLoginForm /> */}
      {/* <UseRef /> */}
      {/* <Uncontrolledcomponent /> */}
      {/* <Functionalprops /> */}
      {/* <Forwardref /> */}
      {/* <Useformstatus /> */}
      {/* <Usetransition /> */}
      {/* <Derivedstate /> */}
      {/* <Usememo /> */}
      {/* <Usecallback /> */}
      {/* <Parent /> */}
      {/* <Updatingobjectsinstate /> */}
      {/* <UseActionState /> */}
      {/* <UpdateArrayinState/> */}
      {/* <UseId /> */}
      {/* <UseReducer /> */}
      {/* <NameEmailList /> */}
      {/* <HookExamplePage /> */}
      {/* <HooksExample /> */}

      {/* react-routers */}

      {/* <LinkPage /> */}
      {/* <Navbar /> */}
      {/* <NavbarWithLogin /> */}

      {/* <ProlegionNavbar /> */}

      {/* <Routes> */}
        {/* Layout to remove navbar from particular nav item..in this case college will remove from nav section when i click on that. */}

        {/* <Route element={<Navbar />}> */}

         
        {/* <Route path="/" element={<Home />} /> */}
        {/* static optional segment */}
        {/* the UserList page will open on both /users and  users/list route */}
        {/* <Route path="/users/list?" element={<UserList />} /> */}

        {/* for optional dynamic segment */}
        {/* the userDetails page will open with sometime only id and sometime id and name both */}

        {/* <Route path="/users/:id/:name?" element={<UserDetails/>} />   */}
        {/*add prefix before route*/}
             
        {/* <Route path="in">
            <Route path="/in/user">
            <Route path="/in/user/about" element={<About />} />
            <Route path="/in/user/Login" element={<Login />} />
            </Route>
             </Route> */}


        {/* </Route> */}

         {/* route for NavbarwithLogin */}
        {/* <Route path="/" element={<Page title="Home" />} />
        <Route path="/solutions" element={<h1>solutions</h1>} />
        <Route path="/marketplace" element={<h1>marketplace</h1>} />
        <Route path="/intellica" element={<h1>intellica</h1>} />
        <Route path="/pricing" element={<h1>pricing</h1>} />
        <Route path="/blog" element={<h1>blog</h1>} />
        <Route path="/about" element={<h1>about</h1>} />
        <Route path="/support" element={<h1>support</h1>} /> */}


        {/* <Route path="/college" element={<College />}> */}
        {/* here index route is used for displaying default page when we go to parent route like college in this case. */}
          {/* <Route index element={<Student />} /> 
          <Route path="department" element={<Department />} />
          <Route path="details" element={<Details />} /> */}
        {/* </Route> */}

        {/* route for page not found
         */}
        {/* <Route path="/*" element={<PageNotFound/>} /> */}

        {/* if url not matched with define route then redirect to the login page only. */}
        {/* <Route path="/*" element={<Navigate to="/Login" />} /> */}
      {/* </Routes> */}

    </>
  )

}

export default App

