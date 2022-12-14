import axiosInstance from "utils/axios/axios-instance"
import { useGetTema } from "recoilState/hooks/useTema"
import React, { useEffect, useState } from "react"
import styles from "./add-vehicle.module.scss"
import IVehicle from "utils/models/vehicle"
import IFormat from "utils/models/format"
import IBrand from "utils/models/brand"
import classNames from "classnames"

export default function AddVehicle() {
	const api = axiosInstance
	const [formats, setFormats] = useState<IFormat[]>([])
	const [brands, setBrands] = useState<IBrand[]>([])

	const [vehicleName, setVehicleName] = useState("")
	const [image, setImage] = useState("")
	const [price, setPrice] = useState("")
	const [year, setYear] = useState(0)
	const [fuel, setFuel] = useState("")
	const [transmission, setTransmission] = useState("")
	const [power, setPower] = useState("")
	const [torque, setTorque] = useState("")
	const [format_id, setFormat_id] = useState("0")
	const [brand_id, setBrand_id] = useState<string>()

	const [description, setDescription] = useState("")
	const [logo, setLogo] = useState("")
	const [website, setWebsite] = useState("")
	const [brandName, setBrandName] = useState("")

	const tema = useGetTema()

	async function getInfo() {
		await api.get("/formats").then((response) => {
			setFormats(response.data)
		})

		await api.get("/brands").then((response) => {
			setBrands(response.data)
		})
	}

	useEffect(() => {
		getInfo()
	}, [])

	useEffect(() => {
		setBrand_id(brands[0]?.id)
		setFormat_id(formats[0]?.id)
	}, [formats, brands])

	async function submitFormVehicle() {
		const vehicle: IVehicle = { id: generateUniqueId(), format_id: format_id, name: vehicleName, image: image, price: price, year: year, fuel: fuel, transmission: transmission, power: power, torque: torque }

		await api.post("/vehicles", vehicle).then((response) => {
			console.log(response.data)
		})

		await api.get(`/brands/${brand_id}`).then((response) => {
			const brand = response.data
			brand.vehicles.push(vehicle)

			api.put(`/brands/${brand_id}`, brand).then((response) => {
				console.log(response.data)
			})
		})

		setVehicleName("")
		setImage("")
		setPrice("")
		setYear(0)
		setFuel("")
		setTransmission("")
		setPower("")
		setTorque("")
	}

	function submitFormBrand() {
		const newBrand: IBrand = { id: generateUniqueId(), name: brandName, logo: logo, website: website, vehicles: [], description: description }

		api.post("/brands", newBrand).then((response) => {
			console.log(response.data)
		})

		setBrandName("")
		setLogo("")
		setWebsite("")
		setDescription("")
		getInfo()
	}

	function generateUniqueId() {
		const s4 = () => {
			return Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1)
		}
		return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4()
	}

	return (
		<main className={styles.container}>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					submitFormVehicle()
				}}
				className={classNames({
					[styles.formulario]: true,
					[styles.formularioDark]: tema === "dark"
				})}>
				<h2 className={styles.subTitulo}>Adicionar ve??culo</h2>

				<label htmlFor="name">Nome</label>
				<input
					className={styles.campo}
					required
					type="text"
					name="name"
					id="name"
					value={vehicleName}
					onChange={(e) => setVehicleName(e.target.value)}
				/>

				<br />

				<label htmlFor="image">Link da imagem</label>
				<input
					className={styles.campo}
					required
					type="text"
					name="image"
					id="image"
					value={image}
					onChange={(e) => setImage(e.target.value)}
				/>

				<br />

				<label htmlFor="price">Pre??o</label>
				<input
					className={styles.campo}
					required
					type="text"
					name="price"
					id="price"
					value={price}
					onChange={(e) => setPrice(e.target.value)}
				/>

				<br />

				<label htmlFor="year">Ano</label>
				<input
					className={styles.campo}
					required
					type="number"
					name="year"
					id="year"
					value={year}
					onChange={(e) => setYear(Number(e.target.value))}
				/>

				<br />

				<label htmlFor="fuel">Combust??vel</label>
				<input
					className={styles.campo}
					required
					type="text"
					name="fuel"
					id="fuel"
					value={fuel}
					onChange={(e) => setFuel(e.target.value)}
				/>

				<br />

				<label htmlFor="transmission">Transmiss??o</label>
				<input
					className={styles.campo}
					required
					type="text"
					name="transmission"
					id="transmission"
					value={transmission}
					onChange={(e) => setTransmission(e.target.value)}
				/>

				<br />

				<label htmlFor="power">Pot??ncia</label>
				<input
					className={styles.campo}
					required type="text" name="power" id="power"
					value={power}
					onChange={(e) => setPower(e.target.value)}
				/>

				<br />

				<label htmlFor="torque">Torque</label>
				<input
					className={styles.campo}
					required type="text" name="torque" id="torque"
					value={torque}
					onChange={(e) => setTorque(e.target.value)}
				/>

				<br />

				<label htmlFor="format">Formato</label>
				<select className={styles.campo} name="format" id="format"
					value={format_id}
					onChange={(e) => setFormat_id(e.target.value)}
				>
					{formats?.map((format) => (
						<option key={format.id} value={format.id}>{format.name}</option>
					))}
				</select>

				<br />

				<label htmlFor="brand">Marca</label>
				<select className={styles.campo} name="brand" id="brand"
					value={brand_id}
					onChange={(e) => setBrand_id(e.target.value)}
				>
					{brands?.map((brand) => (
						<option key={brand.id} value={brand.id}>{brand.name}</option>
					))}
				</select>

				<br />
				<button className={classNames({
					[styles.botao]: true,
					[styles.botaoDark]: tema === "dark"
				})} type="submit">Adicionar</button>
			</form>

			<form
				onSubmit={(e) => {
					e.preventDefault()
					submitFormBrand()
				}}
				className={classNames({
					[styles.formulario]: true,
					[styles.formularioDark]: tema === "dark"
				})}>
				<h2 className={styles.subTitulo}>Adicionar marca</h2>

				<label htmlFor="name">Nome</label>
				<input
					className={styles.campo}
					required
					type="text"
					name="name"
					id="name"
					value={brandName}
					onChange={(e) => setBrandName(e.target.value)}
				/>

				<br />

				<label htmlFor="image">Link da imagem</label>
				<input
					className={styles.campo}
					required
					type="text"
					name="image"
					id="image"
					value={logo}
					onChange={(e) => setLogo(e.target.value)}
				/>

				<br />

				<label htmlFor="website">Website</label>
				<input
					className={styles.campo}
					required
					type="text"
					name="website"
					id="website"
					value={website}
					onChange={(e) => setWebsite(e.target.value)}
				/>

				<br />

				<label htmlFor="description">Descri????o</label>
				<input
					className={styles.campo}
					required
					type="text"
					name="description"
					id="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>

				<br />
				<button className={classNames({
					[styles.botao]: true,
					[styles.botaoDark]: tema === "dark"
				})} type="submit">Adicionar</button>
			</form>
		</main>
	)
}