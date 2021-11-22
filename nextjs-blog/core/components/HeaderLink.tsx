import { LinkIcon } from "../icons/Link";

interface Props {
    slug: string;
}

export const HeaderLink = ({ slug }: Props) => {
    return (
        <a aria-label={`Go to ${slug}`} href={`#${slug}`}>
            <LinkIcon />
        </a>
    );
};
