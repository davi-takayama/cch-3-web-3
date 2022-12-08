import { useGetTema } from "recoilState/hooks/useTema"
import React, { useEffect, useState } from "react"
import IVehicle from "utils/models/vehicle"
import styles from "./vehicles.module.scss"
import IFormat from "utils/models/format"
import IBrand from "utils/models/brand"
import classNames from "classnames"

export interface Props {
	selectedBrand: IBrand | null,
	selectedFormat: IFormat | null
}

export default function ListaModelos(props: Props) {
	const { selectedBrand, selectedFormat } = props
	const tema = useGetTema()

	const [filteredVehicles, setFilteredVehicles] = useState<IVehicle[]>([])

	useEffect(() => {
		if (selectedBrand) {
			const filtered = selectedBrand.vehicles.filter(vehicle => vehicle.format_id === props.selectedFormat?.id)
			setFilteredVehicles(filtered)
		} else {
			setFilteredVehicles([])
		}
	}, [selectedBrand, selectedFormat])

	return (
		<section className={styles.secao}>
			<h2 className={classNames({
				[styles.subTitulo]: true,
				[styles.subTituloDark]: tema === "dark"
			})}>
				Modelos:
			</h2>
			<div className={styles.listagem_veiculos}>
				{
					filteredVehicles.map((vehicle) => (
						<div
							key={vehicle.id}
							className={classNames({
								[styles.listagem_veiculos__item]: true,
								[styles.listagem_veiculosDark]: tema === "dark"
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
											Transmissão
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
	)
}