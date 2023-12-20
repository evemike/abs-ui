import type CodeMirror from "codemirror";
export declare namespace ICodeEditor {
    interface Props {
        modelValue?: string;
        mode?: string | CodeMirror.ModeSpec<CodeMirror.ModeSpecOptions>;
        readOnly?: boolean;
        options?: Record<string, any>;
        theme?: string;
    }
}
export declare const DEFAULT_OPTIONS: Record<string, any>;
