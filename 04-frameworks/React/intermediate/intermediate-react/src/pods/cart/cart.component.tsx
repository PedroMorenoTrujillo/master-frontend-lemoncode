import { CartItem } from ".";
import { PictureInfo } from "../../core/models";

interface Props {
  pictureList: PictureInfo[];
  onRemove: (id: string) => void;
}

export const CartComponent: React.FC<Props> = ({ pictureList, onRemove }) => {
  return (
    <>
      {pictureList?.length > 0 ? (
        pictureList.map((picture: PictureInfo) => (
          <CartItem key={picture.id} picture={picture} onRemove={onRemove} />
        ))
      ) : (
        <p>Cart is empty</p>
      )}
    </>
  );
};
