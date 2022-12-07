import IVehicle from "./vehicle"

export default interface IBrand {
    id: number
    name: string
    description: string
    logo: string
    website: string
    vehicles: IVehicle[]
}