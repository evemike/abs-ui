export declare namespace IElsResizeBox {
    interface Props {
        name?: string;
        direction?: "horizontal" | "vertical";
        names?: string[];
        size?: string | number;
        min?: number | string;
        max?: number | string;
        bar?: ("top" | "bottom" | "left" | "right")[];
    }
}
