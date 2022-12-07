import { useGetTema } from "recoilState/hooks/useTema"
import styles from "./home.module.scss"
import classNames from "classnames"
import React, { useEffect } from "react"
import axiosInstance from "../../utils/axios/axios-instance"
import IBrand from "utils/models/brand"
import IFormat from "utils/models/format"
import IVehicle from "utils/models/vehicle"

export default function Home() {
	const tema = useGetTema()
	const api = axiosInstance

	const [selectedFormat, setSelectedFormat] = React.useState<IFormat | null>(null)

	const [format, setFormat] = React.useState<IFormat[]>([])
	const [brands, setBrands] = React.useState<IBrand[]>([])
	const [brandsFiltered, setBrandsFiltered] = React.useState<IBrand[]>([])
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

	useEffect(() => {
		getBrands()
		getFormat()
		getVehicles()
	}, [])

	useEffect(() => {
		if (selectedFormat) {
			const filtered = brands.filter(brand => brand.vehicles.some(vehicle => vehicle.format_id === selectedFormat.id))
			setBrandsFiltered(filtered)
		}
	}, [selectedFormat])

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
										<li
											key={format.id}
											className={classNames({
												[styles.item]: true,
												[styles.itemDark]: tema === "dark"
											})}
											onClick={() => setSelectedFormat(format)}
										>
											<img
												style={{
													left: 0,
													height: "5vh",
													position: "relative",
													marginRight: "1rem"
												}}
												src={format.image}
												alt={format.name}
											/>

											<h2>
												{format.name}
											</h2>
										</li>
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
									brandsFiltered
										.map((brand) => (
											<li
												key={brand.id}
												className={classNames({
													[styles.item]: true,
													[styles.itemDark]: tema === "dark"
												})}
											>
												{brand.name}
											</li>
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