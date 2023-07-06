import { atom } from 'jotai';

export const clickedPositionAtom = atom<{latitude: number, longitude: number}>({latitude: 0, longitude: 0});

export const isAddMarkerModalOpenAtom = atom<boolean>(false);
export const isEditMarkerModalOpenAtom = atom<boolean>(false);
export const isMarkerMngMenuOpenAtom = atom<boolean>(false);
export const markerMngMenuTypeAtom = atom<string>('');