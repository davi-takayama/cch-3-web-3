import { useGetTema } from "recoilState/hooks/useTema"
import styles from "./brands.module.scss"
import IBrand from "utils/models/brand"
import classNames from "classnames"
import React from "react"

interface Props {
	setSelectedBrand: React.Dispatch<React.SetStateAction<IBrand | null>>,
	selectedBrand: IBrand | null,
	brands: IBrand[]
}

export default function ListaMarcas(props: Props) {
	const { setSelectedBrand, selectedBrand, brands } = props
	const tema = useGetTema()

	return (
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
						brands.map((brand) => (
							<li
								key={brand.id}
								className={classNames({
									[styles.item]: true,
									[styles.itemDark]: tema === "dark",
									[styles.itemSelected]: brand.id === selectedBrand?.id
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
									{brand.name}
								</div>

								<h3>
									<a href={brand.website}>
										site
									</a>
								</h3>
							</li>
						))
					}
				</ul>
			</div>
		</section>
	)
}