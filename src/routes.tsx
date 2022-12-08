import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useGetTema } from "recoilState/hooks/useTema"
import NotFound from "./views/notFound/not-found"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import AddVehicle from "views/add/add-vehicle"
import styles from "./index.module.scss"
import About from "views/about/about"
import Home from "./views/home/home"
import classNames from "classnames"
import React from "react"

export default function AppRoutes() {
	const tema = useGetTema()
	return (
		<Router>
			<main className={classNames({
				[styles.container]: true,
				[styles.container_black]: tema === "dark" ? true : false
			})}>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="add" element={<AddVehicle />} />
					<Route path="about" element={<About/>} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</main>
		</Router>
	)
}