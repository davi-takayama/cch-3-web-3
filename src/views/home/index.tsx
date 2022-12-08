import { useGetTema } from "recoilState/hooks/useTema"
import styles from "./home.module.scss"
import classNames from "classnames"
import React, { useEffect } from "react"
import axiosInstance from "../../utils/axios/axios-instance"
import IBrand from "utils/models/brand"
import IFormat from "utils/models/format"
import IVehicle from "utils/models/vehicle"
import ListaFormatos from "./lists/formats"

export default function Home() {
	const tema = useGetTema()
	const api = axiosInstance

	const [selectedFormat, setSelectedFormat] = React.useState<IFormat | null>(null)
	const [brands, setBrands] = React.useState<IBrand[]>([])
	const [brandsFiltered, setBrandsFiltered] = React.useState<IBrand[]>([])
	const [selectedBrand, setSelectedBrand] = React.useState<IBrand | null>(null)
	const [vehicles, setVehicles] = React.useState<IVehicle[]>([])

	async function getBrands() {
		const response = await api.get("/brands")
		if (response.status === 200) setBrands(response.data)
		else console.log("Erro ao buscar as marcas")
	}
	async function getVehicles() {
		const response = await api.get("/vehicles")
		if (response.status === 200) setVehicles(response.data)
		else console.log("Erro ao buscar os veículos")
	}

	useEffect(() => {
		getBrands()
		getVehicles()
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

			<ul>
				<li>
					<ListaFormatos
						setSelectedFormat={setSelectedFormat}
						api={api}
						styles={styles}
					/>
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
				</li>

				<li>
					<section className={styles.secao}>
						<h2 className={classNames({
							[styles.subTitulo]: true,
							[styles.subTituloDark]: tema === "dark"
						})}>
							Selecione um modelo:
						</h2>
						<div className={styles.listagem_veiculos}>
							{
								selectedBrand?.vehicles.map((vehicle) => (
									<div
										key={vehicle.id}
										className={classNames({
											[styles.listagem_veiculos__item]: true,
											[styles.itemDark]: tema === "dark"
										})}
									>
										<img
											style={{
												left: 0,
												height: "20vh",
												position: "relative",
												margin: "0 1rem"
											}}
											src={vehicle.image}
											alt={vehicle.name}
										/>
										<h2>
											{vehicle.name}
										</h2>
										<br />
										<h3>
											{vehicle.price}
										</h3>

										<table className={styles.tabela}>
											<thead className={styles.tabela__cabecalho}>
												<tr>
													<th>
														Ano
													</th>
													<th>
														Combustível
													</th>
													<th>
														Câmbio
													</th>
													<th>
														Potência
													</th>
													<th>
														Torque
													</th>

												</tr>
											</thead>
											<tbody className={styles.tabela__linha}>
												<tr>
													<td>
														{vehicle.year ?? "----"}
													</td>
													<td>
														{vehicle.fuel ?? "----"}
													</td>
													<td>
														{vehicle.transmission ?? "----"}
													</td>
													<td>
														{vehicle.power ?? "----"}
													</td>
													<td>
														{vehicle.torque ?? "----"}
													</td>
												</tr>
											</tbody>
										</table>

									</div>
								))
							}
						</div>
					</section>
				</li>
			</ul>
		</main>
	)
}