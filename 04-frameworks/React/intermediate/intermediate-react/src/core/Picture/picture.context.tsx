import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { PictureInfo } from "../models";
import { pictureInfoMock } from "../mocks";

interface Context {
  pictureList: PictureInfo[];
  selectedIds: string[];
  setSelectedIds: (ids: string[]) => void;
  setPictureList: (pictureList: PictureInfo[]) => void;
}

export const PictureContext = createContext<Context>({} as Context);

export const PictureProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [pictureList, setPictureList] =
    useState<PictureInfo[]>(pictureInfoMock);
  const [selectedIds, setSelectedIds] = useState<string[]>(['5', '8']);

  useEffect(() => {
    const updatedPictureList = pictureList.map(picture => ({
      ...picture,
      selected: selectedIds.includes(picture.id) ? true : false
    }));
    setPictureList(updatedPictureList);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIds]); 

  return (
    <PictureContext.Provider
      value={{
        pictureList,
        setPictureList,
        selectedIds,
        setSelectedIds,
      }}
    >
      {children}
    </PictureContext.Provider>
  );
};
