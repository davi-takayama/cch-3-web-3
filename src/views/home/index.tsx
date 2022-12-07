import { useGetTema } from "recoilState/hooks/useTema"
import styles from "./home.module.scss"
import classNames from "classnames"
import React from "react"

export default function Home() {
	const tema = useGetTema()
	return (
		<main className={classNames({
			[styles.container]: true,
			[styles.containerLight]: tema === "light"
		})}>
			<h1 className={styles.titulo}>Lista de Veículos:</h1>
			
			<ul>
				<li>
					<section className={styles.secao}>
						<h2 className={classNames({
							[styles.subTitulo]: true,
							[styles.subTituloDark]: tema === "dark"
						})}>
							Selecione um tipo de veículo:
						</h2>
						<div className={styles.listagem}>
							<ul>
								<li className={classNames({
									[styles.item]: true,
									[styles.itemDark]: tema === "dark"
								})}>Tipo1</li>
								<li className={classNames({
									[styles.item]: true,
									[styles.itemDark]: tema === "dark"
								})}>Tipo2</li>
								<li className={classNames({
									[styles.item]: true,
									[styles.itemDark]: tema === "dark"
								})}>Tipo3</li>
							</ul>
						</div>
					</section>
				</li>

				<li>
					<section className={styles.secao}>
						<h2 className={classNames({
							[styles.subTitulo]: true,
							[styles.subTituloDark]: tema === "dark"
						})}>
							Selecione uma marca:
						</h2>
						<div className={styles.listagem}>
							<ul>
								<li className={classNames({
									[styles.item]: true,
									[styles.itemDark]: tema === "dark"
								})}>Marca1</li>
								<li className={classNames({
									[styles.item]: true,
									[styles.itemDark]: tema === "dark"
								})}>Marca2</li>
								<li className={classNames({
									[styles.item]: true,
									[styles.itemDark]: tema === "dark"
								})}>Marca3</li>
							</ul>
						</div>
					</section>
				</li>

				<li>
					<section className={styles.secao}>
						<h2 className={classNames({
							[styles.subTitulo]: true,
							[styles.subTituloDark]: tema === "dark"
						})}>
							Selecione um modelo:
						</h2>
						<div className={styles.listagem}>
							<ul>
								<li className={classNames({
									[styles.item]: true,
									[styles.itemDark]: tema === "dark"
								})}>Modelo1</li>
								<li className={classNames({
									[styles.item]: true,
									[styles.itemDark]: tema === "dark"
								})}>Modelo2</li>
								<li className={classNames({
									[styles.item]: true,
									[styles.itemDark]: tema === "dark"
								})}>Modelo3</li>
							</ul>
						</div>
					</section>
				</li>
			</ul>
		</main>
	)
}