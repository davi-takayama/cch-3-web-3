import { SetterOrUpdater } from "recoil"

// recebe o hook de definir o tema e o conteudo do tema para inverte-lo.
export default function changeTema(set: SetterOrUpdater<string>, tema: string) {
	// inverte o tema
	tema = tema === "light" ? "dark" : "light"
	set(tema)
}