import axiosInstance from "utils/axios/axios-instance"
import IFormat from "utils/models/format"
import React, { useEffect } from "react"
import IBrand from "utils/models/brand"

export default function AddVehicle() {
	const api = axiosInstance
	const [formats, setFormats] = React.useState<IFormat[]>([])
	const [brands, setBrands] = React.useState<IBrand[]>([])

	const [name, setName] = React.useState("")
	const [image, setImage] = React.useState("")
	const [price, setPrice] = React.useState("")
	const [year, setYear] = React.useState(0)
	const [fuel, setFuel] = React.useState("")
	const [transmission, setTransmission] = React.useState("")
	const [power, setPower] = React.useState("")
	const [torque, setTorque] = React.useState("")
	const [format_id, setFormat_id] = React.useState("0")
	const [brand_id, setBrand_id] = React.useState<string>()

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
	}, [format_id, brand_id])

	function submitForm() {
		api.post("/vehicles", {
			id: generateUniqueId(),
			format_id: format_id,
			name: name,
			image: image,
			price: price,
			year: year,
			fuel: fuel,
			transmission: transmission,
			power: power,
			torque: torque
		}).then((response) => {
			console.log(response)
		})

		api.put(`/brands/${brand_id}`, {
			vehicles: [...brands.find((brand) => brand.id === brand_id)?.vehicles ?? [], {
				id: generateUniqueId(),
				format_id: format_id,
				name: name,
				image: image,
				price: price,
				year: year,
				fuel: fuel,
				transmission: transmission,
				power: power,
				torque: torque
			}]
		}).then((response) => {
			console.log(response)
		})
	}

	function generateUniqueId() {
		const s4 = () => {
			return Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1)
		}
		return s4() + s4() + "-" + s4() + "-" + s4() + "-"
	}

	return (
		<main>
			<form>
				<label htmlFor="name">Nome</label>
				<input
					required
					type="text"
					name="name"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<br />

				<label htmlFor="image">Link da imagem</label>
				<input
					required
					type="text"
					name="image"
					id="image"
					value={image}
					onChange={(e) => setImage(e.target.value)}
				/>

				<br />

				<label htmlFor="price">Preço</label>
				<input
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
					required
					type="number"
					name="year"
					id="year"
					value={year}
					onChange={(e) => setYear(Number(e.target.value))}
				/>

				<br />

				<label htmlFor="fuel">Combustível</label>
				<input
					required
					type="text"
					name="fuel"
					id="fuel"
					value={fuel}
					onChange={(e) => setFuel(e.target.value)}
				/>

				<br />

				<label htmlFor="transmission">Transmissão</label>
				<input
					required
					type="text"
					name="transmission"
					id="transmission"
					value={transmission}
					onChange={(e) => setTransmission(e.target.value)}
				/>

				<br />

				<label htmlFor="power">Potência</label>
				<input
					required type="text" name="power" id="power"
					value={power}
					onChange={(e) => setPower(e.target.value)}
				/>

				<br />

				<label htmlFor="torque">Torque</label>
				<input
					required type="text" name="torque" id="torque"
					value={torque}
					onChange={(e) => setTorque(e.target.value)}
				/>

				<br />

				<label htmlFor="format">Formato</label>
				<select name="format" id="format"
					value={format_id}
					onChange={(e) => setFormat_id(e.target.value)}
				>
					{formats?.map((format) => (
						<option key={format.id} value={format.id}>{format.name}</option>
					))}
				</select>

				<label htmlFor="brand">Marca</label>
				<select name="brand" id="brand"
					value={brand_id}
					onChange={(e) => setBrand_id(e.target.value)}
				>
					{brands?.map((brand) => (
						<option key={brand.id} value={brand.id}>{brand.name}</option>
					))}
				</select>

				<br />

			</form>
			<button onClick={submitForm}>Adicionar</button>

		</main>
	)
}