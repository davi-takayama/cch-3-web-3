import { useRecoilValue, useSetRecoilState } from "recoil"
import { tema } from "recoilState/atom"

/**
 *
 * @returns {string} - Retorna o tema atual
 * @example
 * const tema = useGetTema()
 */
export function useGetTema(): string {
	return useRecoilValue(tema)
}

/**
 * 
 * @returns {RecoilState<string>} - Retorna o tema atual
 * @example
 * const setTema = useSetTema()
 * setTema("dark")
 */
export function useSetTema() {
	const useSetTema = useSetRecoilState<string>(tema)
	return useSetTema
}