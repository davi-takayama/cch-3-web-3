import axiosInstance from "utils/axios/axios-instance"
import { useGetTema } from "recoilState/hooks/useTema"
import ListaFormatos from "./lists/formats/formats"
import ListaMarcas from "./lists/brands/brands"
import IFormat from "utils/models/format"
import React, { useEffect } from "react"
import IBrand from "utils/models/brand"
import styles from "./home.module.scss"
import classNames from "classnames"
import ListaModelos from "./lists/vehicles/vehicles"

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
				selectedFormat={selectedFormat}
			/>

			<ListaMarcas
				setSelectedBrand={setSelectedBrand}
				selectedBrand={selectedBrand}
				brands={brandsFiltered}
			/>

			<ListaModelos
				selectedBrand={selectedBrand}
			/>
			
		</main>
	)
}