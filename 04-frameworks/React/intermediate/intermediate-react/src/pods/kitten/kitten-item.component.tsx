import { PictureInfo } from "../../core/models";
import './kitten-item.component.scss';
interface Props{
    picture: PictureInfo
    onChange: (id: string) => void
}

export const KittenItem: React.FC<Props> = ({ picture, onChange }) => {
    return (
        <div className="item-list">
      <img
        src={picture.picUrl}
        alt={picture.title}
        className="item-list__image"
      />
      <span className="item-list__title">{picture.title}</span>
      <div className="item-list__container">
        <span className="item-list__container__title">Buy</span>
        <input
          className="item-list__container__checkbox"
          type="checkbox"
          checked={picture.selected}
          onChange={() => onChange(picture.id)}
        />
      </div>
    </div>
    );
}