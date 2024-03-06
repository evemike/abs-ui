import type { Themes } from 'md-editor-v3';
import { CSSProperties } from 'vue';
export declare namespace IElsMarkdown {
    interface Props {
        modelValue: string;
        options?: Record<string, any>;
    }
    interface ViewProps {
        value: string;
        theme?: Themes;
        previewTheme?: 'default' | 'github' | 'vuepress' | 'mk-cute' | 'smart-blue' | 'cyanosis';
        editorId?: string;
        showCodeRowNumber?: boolean;
        style?: string | CSSProperties;
        codeTheme?: 'atom' | 'a11y' | 'github' | 'gradient' | 'kimbie' | 'paraiso' | 'qtcreator' | 'stackoverflow';
        option?: Record<string, any>;
    }
}
