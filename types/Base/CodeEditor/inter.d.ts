export declare namespace ICodeEditor {
    interface Props {
        modelValue?: string;
        mode?: string;
        readOnly?: boolean;
        options?: Record<string, any>;
        theme?: Record<string, any>;
        format?: (val: string) => string;
        teleport?: string;
        dialog?: Record<string, any>;
        dialogTitle?: string;
        lang?: any[];
        showOperate?: boolean;
        maxHeight?: string;
        size?: string;
        class?: string;
    }
}
export declare const DEFAULT_OPTIONS: Record<string, any>;
export declare const DEFAULT_THEME: {
    "&": {
        backgroundColor: string;
        color: string;
    };
    ".cm-container": {
        border: string;
    };
    ".cm-container .cm-focused": {
        outline: string;
    };
    ".cm-content": {
        caretColor: string;
    };
    "&.cm-focused .cm-cursor": {
        borderLeftColor: string;
        outline: string;
    };
    "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: string;
    };
    ".cm-gutters": {
        backgroundColor: string;
        color: string;
        borderRightColor: string;
    };
};
