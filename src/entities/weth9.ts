import { SupportedChainId } from '../constants';
import { Token } from './token';

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH9: { [chainId: number]: Token } = {
  [SupportedChainId.PLASMA]: new Token(SupportedChainId.PLASMA, '0x4200000000000000000000000000000000000006', 18, 'WSYS', 'Wrapped XPL'),
  [SupportedChainId.PLASMA_TANENBAUM]: new Token(SupportedChainId.PLASMA_TANENBAUM, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped XPL'),
}
