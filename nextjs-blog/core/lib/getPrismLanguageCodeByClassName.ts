/**
 * Languages supported by Prism
 * syntax highlighter.
 *
 * @see Reference:
 *      [AVAILABLE_LANGUAGES_PRISM.MD on GitHub](https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/3ead4ba5963ac797093fb872375bf713c1372f9a/AVAILABLE_LANGUAGES_PRISM.MD)
 */
const supportedLangauges: string[] = [
    "abap",
    "abnf",
    "actionscript",
    "ada",
    "agda",
    "al",
    "antlr4",
    "apacheconf",
    "apl",
    "applescript",
    "aql",
    "arduino",
    "arff",
    "asciidoc",
    "asm6502",
    "aspnet",
    "autohotkey",
    "autoit",
    "bash",
    "basic",
    "batch",
    "bbcode",
    "birb",
    "bison",
    "bnf",
    "brainfuck",
    "brightscript",
    "bro",
    "bsl",
    "c",
    "cil",
    "clike",
    "clojure",
    "cmake",
    "coffeescript",
    "concurnas",
    "cpp",
    "crystal",
    "csharp",
    "csp",
    "cssExtras",
    "css",
    "cypher",
    "d",
    "dart",
    "dax",
    "dhall",
    "diff",
    "django",
    "dnsZoneFile",
    "docker",
    "ebnf",
    "editorconfig",
    "eiffel",
    "ejs",
    "elixir",
    "elm",
    "erb",
    "erlang",
    "etlua",
    "excelFormula",
    "factor",
    "firestoreSecurityRules",
    "flow",
    "fortran",
    "fsharp",
    "ftl",
    "gcode",
    "gdscript",
    "gedcom",
    "gherkin",
    "git",
    "glsl",
    "gml",
    "go",
    "graphql",
    "groovy",
    "haml",
    "handlebars",
    "haskell",
    "haxe",
    "hcl",
    "hlsl",
    "hpkp",
    "hsts",
    "http",
    "ichigojam",
    "icon",
    "iecst",
    "ignore",
    "inform7",
    "ini",
    "io",
    "j",
    "java",
    "javadoc",
    "javadoclike",
    "javascript",
    "javastacktrace",
    "jolie",
    "jq",
    "jsExtras",
    "jsTemplates",
    "jsdoc",
    "json",
    "json5",
    "jsonp",
    "jsstacktrace",
    "jsx",
    "julia",
    "keyman",
    "kotlin",
    "latex",
    "latte",
    "less",
    "lilypond",
    "liquid",
    "lisp",
    "livescript",
    "llvm",
    "lolcode",
    "lua",
    "makefile",
    "markdown",
    "markupTemplating",
    "markup",
    "matlab",
    "mel",
    "mizar",
    "mongodb",
    "monkey",
    "moonscript",
    "n1ql",
    "n4js",
    "nand2tetrisHdl",
    "naniscript",
    "nasm",
    "neon",
    "nginx",
    "nim",
    "nix",
    "nsis",
    "objectivec",
    "ocaml",
    "opencl",
    "oz",
    "parigp",
    "parser",
    "pascal",
    "pascaligo",
    "pcaxis",
    "peoplecode",
    "perl",
    "phpExtras",
    "php",
    "phpdoc",
    "plsql",
    "powerquery",
    "powershell",
    "processing",
    "prolog",
    "properties",
    "protobuf",
    "pug",
    "puppet",
    "pure",
    "purebasic",
    "purescript",
    "python",
    "q",
    "qml",
    "qore",
    "r",
    "racket",
    "reason",
    "regex",
    "renpy",
    "rest",
    "rip",
    "roboconf",
    "robotframework",
    "ruby",
    "rust",
    "sas",
    "sass",
    "scala",
    "scheme",
    "scss",
    "shellSession",
    "smali",
    "smalltalk",
    "smarty",
    "sml",
    "solidity",
    "solutionFile",
    "soy",
    "sparql",
    "splunkSpl",
    "sqf",
    "sql",
    "stan",
    "stylus",
    "swift",
    "t4Cs",
    "t4Templating",
    "t4Vb",
    "tap",
    "tcl",
    "textile",
    "toml",
    "tsx",
    "tt2",
    "turtle",
    "twig",
    "typescript",
    "typoscript",
    "unrealscript",
    "vala",
    "vbnet",
    "velocity",
    "verilog",
    "vhdl",
    "vim",
    "visualBasic",
    "warpscript",
    "wasm",
    "wiki",
    "xeora",
    "xmlDoc",
    "xojo",
    "xquery",
    "yaml",
    "yang",
    "zig",
];

export type LanguageClassNameConvention = {
    /**
     * The pattern to validate the convention.
     */
    validPattern: RegExp;
    /**
     * The pattern to replace and
     * leave only the language.
     */
    replacePattern: RegExp;
};

/**
 * List of known convention to
 * extract the language of the
 * code snippet.
 */
const languageClassNameConventions: {
    [conventionName: string]: LanguageClassNameConvention;
} = {
    /**
     * The most common convention.
     * @example "language-typescript", "language-c"
     * @see [Use Case: Next Docs](https://nextjs.org/docs/api-reference/next/image)
     */
    languageThenDash: {
        validPattern: /^language-(\w+)/,
        replacePattern: /^language-/,
    },
    /**
     * @example "highlight typescript", "highlight c"
     * @see [Use Case: DEV Community](https://dev.to/llldar/sorting-1-billion-numbers-3h)
     */
    highlightThenSpace: {
        validPattern: /^highlight (\w+)/,
        replacePattern: /^highlight /,
    },
};

/**
 * List of known variation that are
 * invalid to prism, but we know what
 * it mean.
 *
 * @listens Please include here more
 * variations if you've found one :)
 */
const knownLanguageVariations: { [variation: string]: string } = {
    js: "javascript",
    ts: "typescript",
    md: "markdown",
    sh: "bash",
    shell: "bash",
};

/**
 * Validate the class name of a code block
 * to get the language class name convention
 * that makes possible to extract the language
 * code.
 *
 * If the the class name does not matches any
 * known convention, return `undefined`.
 * @param className The class name of the code block.
 */
export const getLanguageClassNameConvention = (
    className: string
): LanguageClassNameConvention | undefined => {
    let classNameConvention: LanguageClassNameConvention = undefined;

    // Test for each convention if provided
    // className matches.
    for (const conventionName in languageClassNameConventions) {
        const convention = languageClassNameConventions[conventionName];

        if (convention.validPattern.test(className)) {
            classNameConvention = convention;
            break;
        }
    }

    return classNameConvention;
};

/**
 * Extract the language code for prism
 * syntax highlighter.
 * @param languageClassName e.g.: "language-java", "language-something"
 * @param fallback What should return if the language is invalid (default is "text")
 */
const getPrismLanguageCodeByClassName = (
    languageClassName: string,
    fallback: string | undefined = "text"
): string | undefined => {
    // Check if the class name is valid
    const classNameConvention =
        getLanguageClassNameConvention(languageClassName);

    // If the class name does not follows
    // none of the conventions, use fallback.
    if (!classNameConvention) {
        return fallback;
    }

    // Extract the language
    const language = languageClassName.replace(
        classNameConvention.replacePattern,
        ""
    );

    // Check if it is supported
    if (supportedLangauges.includes(language)) {
        return language;
        // Check if it is a know variation
    } else if (Object.keys(knownLanguageVariations).includes(language)) {
        return knownLanguageVariations[language];
        // Use fallback
    } else {
        return fallback;
    }
};

export default getPrismLanguageCodeByClassName;
