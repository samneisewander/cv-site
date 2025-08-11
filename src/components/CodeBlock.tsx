import React, { useRef, useState, useEffect, RefObject } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Toast } from "@base-ui-components/react";

const CodeBlock = ({
    lang,
    codeChildren,
}: {
    lang: string;
    codeChildren: string;
}) => {
    const codeRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (codeRef.current) {
            Prism.highlightElement(codeRef.current);
        }
    }, [codeChildren]);

    return (
        <div className="bg-surface-container-high rounded-md overflow-clip">
            <CodeBar lang={lang} codeRef={codeRef as RefObject<HTMLElement>} />
            <div className="overflow-y-auto">
                <pre className="!m-0">
                    <code ref={codeRef} className={`language-${lang} text-on-surface`}>
                        {codeChildren}
                    </code>
                </pre>
            </div>
        </div>
    );
};

const CodeBar = React.memo(
    ({
        lang,
        codeRef,
    }: {
        lang: string;
        codeRef: React.RefObject<HTMLElement>;
    }) => {
        const [isCopied, setIsCopied] = useState<boolean>(false);
        const toastManager = Toast.useToastManager()
        return (
            <div className="flex items-center relative text-on-surface bg-surface-container-high md:bg-surface px-4 py-2 text-xs font-sans">
                <span className="">{lang}</span>
                <button
                    className="flex ml-auto gap-2 cursor-pointer"
                    aria-label="copy codeblock"
                    onClick={async () => {
                        const codeString = codeRef.current?.textContent;
                        if (codeString)
                            await navigator.clipboard.writeText(codeString)
                        toastManager.add({
                            title: `Code snippet copied!`,
                            description: `Use CTRL + V to paste this elsewhere.`,
                        });
                        setIsCopied(true);
                        setTimeout(() => setIsCopied(false), 3000);
                    }}
                >
                    {isCopied ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faCopy} />}
                </button>
            </div>
        );
    }
);

CodeBar.displayName = "CodeBar";

export default CodeBlock;