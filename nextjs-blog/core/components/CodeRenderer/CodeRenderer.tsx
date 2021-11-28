import ReactDOM from "react-dom";
import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";
import getPrismLanguageCodeByClassName, {
  getLanguageClassNameConvention
} from "../../lib/getPrismLanguageCodeByClassName";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import CodeTheme from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import { CodeSnippetCopyButton, TextCodeBlockNoticeForDev } from "./styles";
import { Wrapper } from "./styles";
import styled from "styled-components";

interface CodeBlocksRendererProps {
  /**
   * The react reference for the targed of redering.
   */
  componentToRenderRef: React.MutableRefObject<HTMLElement>;
  /**
   * Similar to a deps list from `useEffect`,
   * when some state changes, the rendering
   * process run again.
   */
  reRenderBy?: React.DependencyList;
}

const SyntaxHighlighterWrapper = styled(SyntaxHighlighter)`
  a {
    text-decoration: underline;
    color: blue;
  }

  pre {
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

  h4,
  h3,
  h2,
  h1 {
    margin-top: 1rem;
    scroll-margin-top: 4.5rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  h3 {
    font-size: 1.35rem;
  }

  h6,
  h5,
  h4,
  h3,
  h2,
  h1 {
    width: 100%;
    position: relative;

    a {
      position: absolute;
      cursor: pointer;

      width: 100%;
      height: 100%;
    }
  }

  p,
  hr {
    font-size: 1.1rem;
    margin: 0.5rem 0;
    line-height: 2rem;
  }

  li {
    margin-bottom: 0.3rem;
    margin-left: 1.5rem;
    list-style-type: "- ";
  }

  summary {
    cursor: pointer;
    transition: 200ms;
  }
`;

/**
 * Render code blocks from the child node.
 */
const CodeBlocksRenderer: React.FC<CodeBlocksRendererProps> = ({
  children,
  reRenderBy,
  componentToRenderRef
}) => {
  useEffect(() => {
    const preElements =
      componentToRenderRef.current?.getElementsByTagName("pre");

    for (let i = 0; i < preElements?.length || 0; i++) {
      const element = preElements[i];

      const haveCodeTagInside =
        element?.firstElementChild?.tagName?.toLowerCase() === "code";

      console.log("has?" + haveCodeTagInside);

      const isAlreadyRendered =
        element?.firstElementChild?.classList?.contains("code-highlighted");

      const className = [
        element.className,
        element.parentElement?.className,
        element.firstElementChild?.className
      ].find(className => {
        // Get just class names that
        // follows some convention.
        return !!getLanguageClassNameConvention(className);
      });

      const language = getPrismLanguageCodeByClassName(className) || "text";

      const snippetContent = element.textContent;

      if (haveCodeTagInside && !isAlreadyRendered) {
        ReactDOM.render(
          <>
            <Wrapper style={{ position: "relative" }}>
              <CodeSnippetCopyButton
                onClick={e => {
                  navigator.clipboard.writeText(snippetContent);

                  const buttonElement = e.currentTarget;
                  buttonElement.textContent = "Copied!";
                  setTimeout(() => {
                    buttonElement.textContent = "Copy";
                  }, 800);
                }}
              >
                Copy
              </CodeSnippetCopyButton>
              <SyntaxHighlighterWrapper
                key={uuid()}
                style={CodeTheme}
                language={language}
                codeTagProps={
                  {
                    className: "code-highlighted",
                    codelanguage: language
                  } as React.HTMLProps<HTMLElement>
                }
                // customStyle={{
                //   borderRadius: "0.3rem 0 0.3rem 0.3rem",
                //   // background: "#1c232e",
                //   fontSize: "1em",
                //   background: "#f5f7f5",
                //   margin: 0
                // }}
              >
                {snippetContent}
              </SyntaxHighlighterWrapper>
            </Wrapper>
            {process.env.NODE_ENV === "development" && language === "text" ? (
              <TextCodeBlockNoticeForDev>
                NOTE (only shown for us in development): Hey! This code block is
                highlighted as a plain text. Do you think that this may be a
                mistake? Please check{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/zyndicatehq/zyndicate/blob/rss-feed/docs/features/highlights/code-blocks.md"
                >
                  this
                </a>{" "}
                out!
              </TextCodeBlockNoticeForDev>
            ) : null}
          </>,
          preElements[i]
        );
      }
    }
  }, [componentToRenderRef, reRenderBy]);

  return <>{children}</>;
};

export default CodeBlocksRenderer;
