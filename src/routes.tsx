import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useGetTema } from "recoilState/hooks/useTema"
import styles from "./index.module.scss"
import Header from "./components/header"
import Footer from "./components/footer"
import NotFound from "./views/notFound"
import classNames from "classnames"
import Home from "./views/home"
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
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</main>
		</Router>
	)
}