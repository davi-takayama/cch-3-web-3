import { useGetTema, useSetTema } from "recoilState/hooks/useTema"
import changeTema from "utils/functions/changeTema"
import styles from "./header.module.scss"
import { Link } from "react-router-dom"
import favicon from "assets/favicon.png"
import classNames from "classnames"
import logo from "assets/logo.png"
import moon from "assets/Moon.png"
import sun from "assets/Sun.png"
import React from "react"

export default function Header() {
	//armazenando conteúdo do estado "tema" através de seu hook personalizado.
	const tema = useGetTema()
	//armazenando a função que define o tema com um hook personalizado.
	const setTema = useSetTema()

	return (
		<header className={styles.cabecalho}>
			<nav className={classNames({
				[styles.cabecalho__navbar]: true,
				[styles.cabecalho__navbar_black]: tema === "dark" ? true : false
			})}>
				<section className={styles.logotipo}>
					<img src={favicon} alt="favicom TK" className={styles.favicon} />
					<img src={logo} alt="Logo da Transport-Knowledge" className={styles.logo} />
				</section>

				<section className={styles.buttons}>
					<Link to={"/"} className={classNames({
						[styles.links]: true,
						[styles.links_black]: tema === "dark" ? true : false
					})}>Início</Link>
					<Link to={"/add"} className={classNames({
						[styles.links]: true,
						[styles.links_black]: tema === "dark" ? true : false
					})}>Adicionar</Link>
					<Link to={"/about"} className={classNames({
						[styles.links]: true,
						[styles.links_black]: tema === "dark" ? true : false
					})}>Sobre</Link>
				</section>

				<section className={styles.temaButton}>
					{/* quando clicado chama a função de alterar o tema, passando a que define, e o conteúdo atual do tema */}
					<div className={styles.tema} onClick={() => changeTema(setTema, tema)}>
						<img src={moon} alt="Botão de tema escuro" className={classNames({
							[styles.imagem_tema]: true,
							[styles.disable]: tema === "dark" ? true : false
						})} />
						<img src={sun} alt="Botão de tema claro" className={classNames({
							[styles.imagem_tema]: true,
							[styles.disable]: tema === "light" ? true : false
						})} />
					</div>
				</section>
			</nav>
		</header>
	)
}