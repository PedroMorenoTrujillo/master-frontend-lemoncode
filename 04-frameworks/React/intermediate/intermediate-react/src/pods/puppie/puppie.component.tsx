import { PuppieItem } from ".";
import { PictureInfo } from "../../core/models";

interface Props {
  puppiesList: PictureInfo[];
  onChange: (id: string) => void;
}

export const PuppieComponent: React.FC<Props> = ({ puppiesList, onChange }) => {
  return (
    <>
      {puppiesList.map((puppy: PictureInfo) => (
        <PuppieItem key={puppy.id} picture={puppy} onChange={onChange} />
      ))}
    </>
  );
};
