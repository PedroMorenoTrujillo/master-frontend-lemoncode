import { KittenItem } from ".";
import { PictureInfo } from "../../core/models";

interface Props {
  kittiesList: PictureInfo[];
  onChange: (id: string) => void;
}

export const KittenComponent: React.FC<Props> = ({ kittiesList, onChange }) => {
  return (
    <>
      {kittiesList.map((kitten: PictureInfo) => (
        <KittenItem key={kitten.id} picture={kitten} onChange={onChange} />
      ))}
    </>
  );
};
