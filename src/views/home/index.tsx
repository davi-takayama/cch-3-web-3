import { useGetTema } from "recoilState/hooks/useTema"
import styles from "./home.module.scss"
import classNames from "classnames"
import React from "react"
import axiosInstance from "../../utils/axios/axios-instance"
import IBrand from "utils/models/brand"
import IFormat from "utils/models/format"
import IVehicle from "utils/models/vehicle"

export default function Home() {
	const tema = useGetTema()
	const api = axiosInstance

	const [brands, setBrands] = React.useState<IBrand[]>([])
	const [format, setFormat] = React.useState<IFormat[]>([])
	const [vehicles, setVehicles] = React.useState<IVehicle[]>([])

	async function getBrands() {
		const response = await api.get("/brands")
		if (response.status === 200) setBrands(response.data)
		else console.log("Erro ao buscar as marcas")
	}
	async function getFormat() {
		const response = await api.get("/formats")
		if (response.status === 200) setFormat(response.data)
		else console.log("Erro ao buscar os formatos")
	}
	async function getVehicles() {
		const response = await api.get("/vehicles")
		if (response.status === 200) setVehicles(response.data)
		else console.log("Erro ao buscar os veículos")
	}

	React.useEffect(() => {
		getBrands()
		getFormat()
		getVehicles()
	}, [])

	return (
		<main className={classNames({
			[styles.container]: true,
			[styles.containerLight]: tema === "light"
		})}>
			<h1 className={styles.titulo}>Lista de Veículos:</h1>

			<ul>
				<li>
					<section className={styles.secao}>
						<h2 className={classNames({
							[styles.subTitulo]: true,
							[styles.subTituloDark]: tema === "dark"
						})}>
							Selecione um tipo de veículo:
						</h2>
						<div className={styles.listagem}>
							<ul>
								{
									format.map((format) => (
										<li key={format.id} className={classNames({
											[styles.item]: true,
											[styles.itemDark]: tema === "dark"
										})}>{format.name}</li>
									))
								}
							</ul>
						</div>
					</section>
				</li>

				<li>
					<section className={styles.secao}>
						<h2 className={classNames({
							[styles.subTitulo]: true,
							[styles.subTituloDark]: tema === "dark"
						})}>
							Selecione uma marca:
						</h2>
						<div className={styles.listagem}>
							<ul>
								{
									brands.map((brand) => (
										<li key={brand.id} className={classNames({
											[styles.item]: true,
											[styles.itemDark]: tema === "dark"
										})}>{brand.name}</li>
									))
								}
							</ul>
						</div>
					</section>
				</li>

				<li>
					<section className={styles.secao}>
						<h2 className={classNames({
							[styles.subTitulo]: true,
							[styles.subTituloDark]: tema === "dark"
						})}>
							Selecione um modelo:
						</h2>
						<div className={styles.listagem}>
							<ul>
								{
									vehicles.map((vehicle) => (
										<li key={vehicle.id} className={classNames({
											[styles.item]: true,
											[styles.itemDark]: tema === "dark"
										})}>{vehicle.name}</li>
									))
								}
							</ul>
						</div>
					</section>
				</li>
			</ul>
		</main>
	)
}