import { Dispatch, SetStateAction, createContext } from 'react';

export type AuthStateProps = [boolean, Dispatch<SetStateAction<boolean>>];
export type PageLoadingState = [boolean, Dispatch<SetStateAction<boolean>>];

interface GlobalContextProps {
  authState: AuthStateProps;
  pageLoadingState: PageLoadingState;
}

export const GlobalContext = createContext<GlobalContextProps>({
  authState: undefined,
  pageLoadingState: undefined,
} as unknown as GlobalContextProps);
