import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism-async-light";
import Theme from "react-syntax-highlighter/dist/cjs/styles/prism/solarizedlight";
import styles from "../../../styles/blog.module.scss";
import styled from "styled-components";

interface Props {
    children: React.ReactNode;
    inline: boolean;
    className: string;
}

const SyntaxHighlighterWrapper = styled(SyntaxHighlighter)`
    & pre {
        font-family: "CascadiaMono", "Courier New", monospace !important;
        background: red !important;
        border-radius: 0.3rem;
        overflow-x: auto;
        position: relative;

        code {
            font-family: "CascadiaMono", "Courier New", monospace !important;
            padding: 0;
            background: none;

            span {
                font-family: "CascadiaMono", "Courier New", monospace !important;
            }
        }

        &:hover button {
            opacity: 1;
        }
    }

    code {
        padding: 0.1rem 0.5rem;
        background: red;
        border-radius: 0.3rem;
    }
`;

export const MDCode = (props: Props) => {
    const { inline, className, children } = props;
    const match = /language-(\w+)/.exec(className || "");
    const text = String(children).replace(/\n$/, "");
    const [btnText, setBtnText] = React.useState("Copy");

    function handleCopy() {
        if (typeof window !== "undefined" && window.navigator?.clipboard) {
            navigator.clipboard.writeText(text);

            setBtnText("Copied!");
            setTimeout(() => setBtnText("Copy"), 1000);
        }
    }

    return !inline && match ? (
        <div>
            <button onClick={handleCopy} className={styles.copyBtn}>
                {btnText}
            </button>

            <SyntaxHighlighterWrapper
                style={Theme}
                language={match[1]}
                {...props}
            >
                {text}
            </SyntaxHighlighterWrapper>
        </div>
    ) : (
        <code className={className}>{props.children}</code>
    );
};
