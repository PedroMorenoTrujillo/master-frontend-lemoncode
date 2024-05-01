import { PictureInfo } from "../../core/models";

interface Props{
    picture: PictureInfo
    onChange: (id: string) => void
}

export const PuppieItem: React.FC<Props> = ({ picture, onChange }) => {
    return (
        <div>
            <img src={picture.picUrl} alt={picture.title} />
            <span>{picture.title}</span>
            <input type="checkbox" checked={picture.selected} onChange={() => onChange(picture.id)} />
        </div>
    );
}