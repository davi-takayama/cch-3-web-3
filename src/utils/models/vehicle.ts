import IFormat from "./format"

export default interface IVehicle {
	id: number
	name: string
	image: string
	price: string
	year: number
	fuel: string
	transmission: string
	power: string
	torque: string
	format: IFormat
}