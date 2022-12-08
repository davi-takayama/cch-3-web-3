import { useGetTema } from "recoilState/hooks/useTema"
import axiosInstance from "utils/axios/axios-instance"
import React, { useEffect } from "react"
import styles from "./about.module.scss"
import IBrand from "utils/models/brand"
import classNames from "classnames"

export default function Home() {
	const tema = useGetTema()
	const api = axiosInstance

	const [brands, setBrands] = React.useState<IBrand[]>([])
	async function getBrands() {
		const response = await api.get("/brands")
		if (response.status === 200) setBrands(response.data)
		else console.log("Erro ao buscar as marcas")
	}
	useEffect(() => {
		getBrands()
	}, [])

	return (
		<main className={classNames({
			[styles.container]: true,
			[styles.containerLight]: tema === "light"
		})}>
			<h1 className={styles.titulo}>Lista de Marcas:</h1>

			<div className={styles.listagem_marcas}>
				{
					brands.map((marca) => (
						<div
							key={marca.id}
							className={classNames({
								[styles.listagem_marcas__item]: true,
								[styles.listagem_marcasDark]: tema === "dark"
							})}
						>
							<img
								style={{
									left: 0,
									height: "20vh",
									position: "relative",
									margin: "0 1rem"
								}}
								src={marca.logo}
								alt={marca.name}
							/>
							<h2>
								{marca.description}
							</h2>
							<br />
							<a href={marca.website}>
								{marca.name}
							</a>
						</div>
					))
				}
			</div>
			
		</main>
	)
}