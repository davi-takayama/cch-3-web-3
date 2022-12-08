import IFormat from "utils/models/format"
import { AxiosInstance } from "axios"
import classNames from "classnames"
import React, { useEffect } from "react"
import { useGetTema } from "recoilState/hooks/useTema"

interface Props {
	setSelectedFormat: React.Dispatch<React.SetStateAction<IFormat | null>>,
	api: AxiosInstance,
	styles: {
		readonly [key: string]: string;
	}
}

export default function ListaFormatos(props: Props) {
	const { setSelectedFormat, api, styles } = props
	const tema = useGetTema()
	const [formatList, setFormatList] = React.useState<IFormat[]>([])

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