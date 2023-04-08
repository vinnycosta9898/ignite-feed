import { ImgHTMLAttributes } from 'react'
import styles from './styles.module.css';

// ImgHTMLAttributes traz todas as propriedades nativas de img

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}

export function Avatar({hasBorder=true, src, alt, title} : AvatarProps){
    return(
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
            alt={alt}
            title={title}
        />
    )
}