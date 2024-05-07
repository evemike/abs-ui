export declare namespace IFilter {
    interface Props {
        formdata: any;
        graphShadowCell: any;
        propInput: string;
        propOutput: string;
    }
    interface Condition {
        operator: string;
        isTop?: boolean;
        subCondition?: Item[];
    }
    interface Item {
        operator?: string;
        field?: string;
        compare?: string;
        value?: any;
        subCondition?: Item[];
    }
    interface FilterProps {
        condition: Condition | Item;
        isView: boolean;
        inputValue: any[];
    }
}
