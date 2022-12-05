import { SetterOrUpdater } from "recoil"

// recebe o hook de definir o tema e o conteudo do tema para inverte-lo.
export default function mudarTema(set: SetterOrUpdater<boolean>, mode: boolean) {
	set(!mode)
}