import { PictureInfo } from "../../core/models";
import './cart-item.component.scss';
interface Props {
  picture: PictureInfo;
  onRemove: (id: string) => void;
}

export const CartItem: React.FC<Props> = ({ picture, onRemove }) => {
  return (
    <div className="cart-item">
      <img className="cart-item__image" src={picture.picUrl} alt={picture.title} />
      <span className="cart-item__title">{picture.title}</span>
      <button className="cart-item__button" onClick={() => onRemove(picture.id)}>Remove</button>
    </div>
  );
};
