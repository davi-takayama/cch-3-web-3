import { atom } from "recoil"


/**
 * Tema
 * @description Tema do site
 * @type {atom}
 * @default "light"
 * @example
 * const [tema, setTema] = useRecoilState(tema)
 * setTema("dark")
 * setTema("light")
 */
export const tema = atom({
	key: "tema",
	default: "dark",
})