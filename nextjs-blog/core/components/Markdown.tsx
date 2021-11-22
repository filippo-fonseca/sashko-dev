import * as React from "react";
import dynamic from "next/dynamic";
import { getMDXComponent } from "mdx-bundler/client";

const components = {
    code: dynamic(() => import("./Markdown/Code").then(v => v.MDCode), {
        loading: () => <>Loading code..</>,
    }),
};

interface Props {
    content: string;
}

export const Markdown = ({ content }: Props) => {
    const Component = React.useMemo(() => getMDXComponent(content), [content]);

    return <Component components={components as any} />;
};
