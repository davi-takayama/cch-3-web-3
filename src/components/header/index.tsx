import { useGetTema, useSetTema } from "recoilState/hooks/useTema"
import mudarTema from "utils/functions/mudarTema"
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
	const Tema = useGetTema()
	//armazenando a função que define o tema com um hook personalizado.
	const setTemaMode = useSetTema()

	return (
		<header className={styles.cabecalho}>
			<nav className={classNames({
				[styles.cabecalho__navbar]: true,
				[styles.cabecalho__navbar_black]: Tema === "dark" ? true : false
			})}>
				<div className={styles.itens}>
					<img src={favicon} alt="favicom TK" className={styles.favicon} />
					<img src={logo} alt="Logo da Transport-Knowledge" className={styles.logo} />
					<Link to={"/"} className={classNames({
						[styles.links]: true,
						[styles.links_black]: Tema === "dark" ? true : false
					})}>Início</Link>
					<Link to={"/add"} className={classNames({
						[styles.links]: true,
						[styles.links_black]: Tema === "dark" ? true : false
					})}>Adicionar</Link>
					<Link to={"/about"} className={classNames({
						[styles.links]: true,
						[styles.links_black]: Tema === "dark" ? true : false
					})}>Sobre</Link>
				</div>
				{/* quando clicado chama a função de alterar o tema, passando a que define, e o conteúdo atual do tema */}
				<div className={styles.tema} onClick={() => mudarTema(setTemaMode, Tema)}>
					<img src={moon} alt="Botão de tema escuro" className={classNames({
						[styles.imagem_tema]: true,
						[styles.disable]: Tema === "dark" ? true : false
					})} />
					<img src={sun} alt="Botão de tema claro" className={classNames({
						[styles.imagem_tema]: true,
						[styles.disable]: Tema === "light" ? true : false
					})} />
				</div>
			</nav>
		</header>
	)
}