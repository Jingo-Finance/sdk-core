import { Token } from './token'
import { SupportedChainId } from '../constants'
/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH9: { [chainId: number]: Token } = {
  [SupportedChainId.ROLLUX]: new Token(SupportedChainId.ROLLUX, '0x4200000000000000000000000000000000000006', 18, 'WSYS', 'Wrapped Syscoin'),
  [SupportedChainId.ROLLUX_TANENBAUM]: new Token(SupportedChainId.ROLLUX_TANENBAUM, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Syscoin'),
}
