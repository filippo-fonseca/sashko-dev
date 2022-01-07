import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

interface GetInitialProps {
    styles: JSX.Element;
    html?: string;
    head?: JSX.Element[];
}

// @ts-ignore
class SashkoBlog extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<GetInitialProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="canonical" href="https://sashko.dev" />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: ` window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
  heap.load("148403210");`,
                        }}
                    ></script>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,500&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
                        rel="stylesheet"
                    ></link>
                    <meta
                        name="description"
                        content="Engineering manager at Stripe. Previously, open source eng manager at
                        Apollo GraphQL and Meteor."
                    />
                    <meta name="theme-color" content="#404eb3" />
                    <meta property="og:color" content="#404eb3" />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="sashko.dev" />
                    <meta property="og:url" content="https://sashko.dev" />
                    <meta property="og:title" content="Sashko Stubailo" />
                    <meta name="twitter:title" content="Sashko Stubailo" />
                    <meta
                        property="twitter:url"
                        content="https://sashko.dev/"
                    ></meta>
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:creator" content="@stubailo" />
                    <meta
                        name="twitter:description"
                        content="Engineering manager at Stripe. Previously, open source eng manager at
                        Apollo GraphQL and Meteor."
                    />
                    <meta
                        property="twitter:image"
                        content="https://i.ibb.co/sWbzRJw/icon-48x48-1.png"
                    />
                    <meta
                        property="og:image"
                        content="https://i.ibb.co/sWbzRJw/icon-48x48-1.png"
                    />
                    <meta
                        property="og:description"
                        content="Engineering manager at Stripe. Previously, open source eng manager at
                        Apollo GraphQL and Meteor."
                    />

                    <meta name="msapplication-TileColor" content="#404eb3" />
                    <meta name="theme-color" content="#404eb3" />

                    {/* favicon */}
                    <link
                        rel="icon"
                        type="image/ico"
                        href="/favicon.ico"
                    ></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default SashkoBlog;
