import { useRecoilValue } from "recoil"
import { tema } from "recoilState/atom"

// retorna o conteúdo do átomo de tema.
export default function useTema() {
	return useRecoilValue(tema)
}