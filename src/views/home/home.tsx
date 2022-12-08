import axiosInstance from "../../utils/axios/axios-instance"
import { useGetTema } from "recoilState/hooks/useTema"
import ListaFormatos from "./lists/formats/formats"
import IFormat from "utils/models/format"
import React, { useEffect } from "react"
import IBrand from "utils/models/brand"
import styles from "./home.module.scss"
import classNames from "classnames"

export default function Home() {
	const tema = useGetTema()
	const api = axiosInstance

	const [selectedFormat, setSelectedFormat] = React.useState<IFormat | null>(null)
	const [brands, setBrands] = React.useState<IBrand[]>([])
	const [brandsFiltered, setBrandsFiltered] = React.useState<IBrand[]>([])
	const [selectedBrand, setSelectedBrand] = React.useState<IBrand | null>(null)

	async function getBrands() {
		const response = await api.get("/brands")
		if (response.status === 200) setBrands(response.data)
		else console.log("Erro ao buscar as marcas")
	}

	useEffect(() => {
		getBrands()
	}, [])

	useEffect(() => {
		if (selectedFormat) {
			const filtered = brands.filter(brand => brand.vehicles.some(vehicle => vehicle.format_id === selectedFormat.id))
			setBrandsFiltered(filtered)
		}
		setSelectedBrand(null)
	}, [selectedFormat])

	return (
		<main className={classNames({
			[styles.container]: true,
			[styles.containerLight]: tema === "light"
		})}>
			<h1 className={styles.titulo}>Lista de Veículos:</h1>
			
			<ListaFormatos
				setSelectedFormat={setSelectedFormat}
				api={api}
				styles={styles}
			/>

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
							brandsFiltered.map((brand) => (
								<li
									key={brand.id}
									className={classNames({
										[styles.item]: true,
										[styles.itemDark]: tema === "dark"
									})}
									onClick={() => setSelectedBrand(brand)}
								>
									<img
										style={{
											left: 0,
											height: "10vh",
											position: "relative",
											marginRight: "1rem"
										}}
										src={brand.logo}
										alt={brand.name}
									/>

									<div
										style={{
											margin: "0.3rem 1rem",
										}}
									>
										{brand.description}
									</div>

									<h3>
										<a href={brand.website}>
											{brand.name}
										</a>
									</h3>
								</li>
							))
						}
					</ul>
				</div>
			</section>

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
							selectedBrand?.vehicles.map((vehicle) => (
								<li key={vehicle.id} className={classNames({
									[styles.item]: true,
									[styles.itemDark]: tema === "dark"
								})}>{vehicle.name}</li>
							))
						}
					</ul>
				</div>
			</section>
		</main>
	)
}