import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import NotFound from "./views/notFound"
import Home from "./views/home"
import React from "react"

export default function AppRoutes() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound/>}/>
			</Routes>
			<Footer />
		</Router>
	)
}