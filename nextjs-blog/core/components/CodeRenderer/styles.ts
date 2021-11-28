import styled from "styled-components";

export const CodeSnippetCopyButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  border: none;
  background-color: #151a21ee;
  color: #ededee;
  font-weight: bold;
  opacity: 0.25;
  margin: 0;
  transition: opacity 150ms;
  padding: 0.5rem 1rem;
  border-bottom-left-radius: 0.5rem;
  :hover {
    background-color: #151a2140;
    opacity: 1;
  }
`;

export const TextCodeBlockNoticeForDev = styled.p`
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial,
    Apple Color Emoji, Segoe UI Emoji, sans-serif;
  white-space: normal;
  color: #5073f6;
  opacity: 0.7;
  font-size: 0.9rem;
  a {
    text-decoration: underline;
  }
`;

export const Wrapper = styled.div`
  code:not(.code-highlighted) {
    background: ${props => props.theme.smallBackground};
    padding: 0.25rem;
    border-radius: 0.25rem;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  }
`;
