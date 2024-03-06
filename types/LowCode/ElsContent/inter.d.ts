import type { Component, DefineComponent } from "vue";
export declare namespace IElsContent {
    interface Props extends BaseProps, ContainerProps {
    }
    interface CProps extends Record<string, any> {
        name?: "list" | "link" | "block" | "base" | "img" | "icon" | "text";
        class?: string;
        bg?: string | BaseProps;
        bgClass?: string;
        cld?: Props;
    }
    type BaseData<T = string> = (T | [d: T, c?: string])[] | T;
    interface ImgProps extends CProps {
        img?: BaseData;
        imgClass?: string;
    }
    interface IconProps extends CProps {
        icon?: BaseData<Component | DefineComponent | string>;
        iconClass?: string;
    }
    interface TextProps extends CProps {
        text?: BaseData;
        textClass?: string;
    }
    interface BaseProps extends ImgProps, IconProps, TextProps {
        baseClass?: string;
        data?: ({
            boxClass?: string;
        } & ImgProps & IconProps & TextProps)[];
    }
    interface ListProps extends CProps {
        list?: Props[];
        listClass?: string;
        boxClass?: string;
        itemClass?: string;
    }
    interface LinkProps extends CProps {
        link?: string;
        linkClass?: string;
    }
    interface BlockProps extends CProps {
        blockClass?: string;
    }
    interface ContainerProps extends BlockProps, LinkProps, ListProps {
    }
}
