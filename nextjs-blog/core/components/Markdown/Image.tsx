import { imageSizes } from "./ImageSizes";
import Image from "next/image";

interface Props {
    src: string;
    alt: string;
}

const MdImage = (props: Props) => {
    const size = imageSizes[props.alt];

    return (
        <div id="image" style={{ maxWidth: "75%" }}>
            <Image
                decoding="async"
                draggable={false}
                loading="lazy"
                width={size.width}
                height={size.height}
                src={props.src}
                alt={props.alt}
                {...props}
            />
        </div>
    );
};

export default MdImage;
