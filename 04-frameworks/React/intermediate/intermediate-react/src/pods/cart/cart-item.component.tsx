import { PictureInfo } from "../../core/models";

interface Props {
  picture: PictureInfo;
  onRemove: (id: string) => void;
}

export const CartItem: React.FC<Props> = ({ picture, onRemove }) => {
  return (
    <div>
      <img src={picture.picUrl} alt={picture.title} />
      <span>{picture.title}</span>
      <button onClick={() => onRemove(picture.id)}>Remove</button>
    </div>
  );
};
