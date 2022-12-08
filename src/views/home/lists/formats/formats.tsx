import axiosInstance from "utils/axios/axios-instance"
import { useGetTema } from "recoilState/hooks/useTema"
import styles from "./formats.module.scss"
import IFormat from "utils/models/format"
import React, { useEffect } from "react"
import classNames from "classnames"

interface Props {
	setSelectedFormat: React.Dispatch<React.SetStateAction<IFormat | null>>
}

export default function ListaFormatos(props: Props) {
	const api = axiosInstance
	const [formatList, setFormatList] = React.useState<IFormat[]>([])
	const { setSelectedFormat } = props
	const tema = useGetTema()

	async function getFormat() {
		const response = await api.get("/formats")
		if (response.status === 200) setFormatList(response.data)
		else console.log("Erro ao buscar os formatos")
	}

	useEffect(() => {
		getFormat()
	}, [])

	return (
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
						formatList.map((format) => (
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
	)
}