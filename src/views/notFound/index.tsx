import { useGetTema } from "recoilState/hooks/useTema"
import notFoundDark from "assets/notFoundDark.png"
import styles from "./not-found.module.scss"
import notFound from "assets/notFound.png"
import classNames from "classnames"
import React from "react"

export default function NotFound() {
	const mode = useGetTema()
	return (
		<main className={styles.container}>
			<img src={notFound} alt="Imagem de erro 404" className={classNames({
				[styles.image]: true,
				[styles.disabled]: mode === "dark"
			})} />
			<img src={notFoundDark} alt="Imagem de erro 404" className={classNames({
				[styles.image]: true,
				[styles.disabled]: mode === "light"
			})} />
		</main>
	)
}