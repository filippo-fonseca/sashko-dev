import * as React from "react";
import dynamic from "next/dynamic";
import { getMDXComponent } from "mdx-bundler/client";
import styles from "../../styles/blog.module.scss";
import {
    ScaleExamples,
    LineHeights,
} from "../../public/blog/typography-js/ScaleExamples";

const components = {
    code: dynamic(() => import("./Markdown/Code").then(v => v.MDCode), {
        loading: () => <>Loading code..</>,
    }),
    ScaleExamples,
    LineHeights,
};

interface Props {
    content: string;
}

export const Markdown = ({ content }: Props) => {
    const Component = React.useMemo(() => getMDXComponent(content), [content]);

    return (
        <div className={styles.reactMarkdown}>
            <Component components={components as any} />
        </div>
    );
};
