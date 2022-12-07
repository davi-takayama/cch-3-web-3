import { ReactComponent as FgtLogo } from "assets/fgtclippedLogo.svg"
import { useGetTema } from "recoilState/hooks/useTema"
import InstagramLogo from "assets/instagram.png"
import LinkedinLogo from "assets/Linkedin.png"
import GitHubLogo from "assets/GitHub.png"
import styles from "./footer.module.scss"
import classNames from "classnames"
import React from "react"

export default function Footer() {
	//armazenando conteúdo do estado "tema" solicitado com seu hook personalizado.
	const tema = useGetTema()

	return (
		<footer className={classNames({
			[styles.rodape]: true,
			//ativando ou desativando a classe do modo escuro de acordo com o estado.
			[styles.dark_mode]: tema === "dark" ? true : false
		})}>
			<FgtLogo aria-label="Logo da FGT, responsável pelos assets da página" className={styles.fgtLogo} />

			<p className={styles.texto_rodape}>
				O conteúdo visual e o código presente nessa página é de autoria de Daniel Fonseca e Davi Takayama, com exceção da fonte, logos das redes sociais empresas e carros. A página e seu código pode ser utilizado para fins de estudo, não possui direitos autorais, apenas peço que não use as imagens da página em projetos comerciais.
			</p>

			<div className={styles.redes_sociais}>
				<a href="https://www.instagram.com/daniels_f.silva/" target="_blank" rel="noopener noreferrer" className={styles.link}>
					<img src={InstagramLogo} alt="logo do Instagram" className={styles.imagens} />
					<label className={styles.titulo_social}>
						daniels_f.silva
					</label>
				</a>
				<a href="https://www.linkedin.com/in/daniel-fonseca-da-silva-3b2a23233/" target="_blank" rel="noopener noreferrer" className={styles.link}>
					<img src={LinkedinLogo} alt="Logo do Linkedin" className={styles.imagens} />
					<label className={styles.titulo_social}>
						Daniel Fonseca da Silva
					</label>
				</a>
				<a href="https://github.com/Daniel-Fonseca-S" target="_blank" rel="noopener noreferrer" className={styles.link}>
					<img src={GitHubLogo} alt="Logo do GitHub" className={styles.imagens} />
					<label className={styles.titulo_social}>
						Daniel-Fonseca-S
					</label>
				</a>
			</div>

			<div className={styles.redes_sociais}>
				<a href="https://www.instagram.com/jjwjdjdbjs/" target="_blank" rel="noopener noreferrer" className={styles.link}>
					<img src={InstagramLogo} alt="logo do Instagram" className={styles.imagens} />
					<label className={styles.titulo_social}>
						jjwjdjdbjs
					</label>
				</a>
				<a href="https://www.linkedin.com/in/davi-takayama-2bb81a233/" target="_blank" rel="noopener noreferrer" className={styles.link}>
					<img src={LinkedinLogo} alt="Logo do Linkedin" className={styles.imagens} />
					<label className={styles.titulo_social}>
						Davi Takayama
					</label>
				</a>
				<a href="https://github.com/davi-takayama" target="_blank" rel="noopener noreferrer" className={styles.link}>
					<img src={GitHubLogo} alt="Logo do GitHub" className={styles.imagens} />
					<label className={styles.titulo_social}>
					davi-takayama
					</label>
				</a>
			</div>
		</footer>
	)
}