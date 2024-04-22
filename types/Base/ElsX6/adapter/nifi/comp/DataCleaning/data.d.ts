export declare const testMethodList: {
    label: string;
    value: string;
}[];
/**
 * 1、将空值替换为指定值：指定值输入框可用，原值输入框禁用
 * 2、过滤整行空值、移除所有空格、移除首尾空格、移除标点符号、移除数字、移除字母、设为小写、设为大写、首字母大写：
      指定值输入框禁用，原值输入框禁用
 * 3、值替换、字符串替换、正则替换：指定值输入框可用，原值输入框可用
 */
export declare const disableSpecifyList: string[];
export declare const disableOriginalList: string[];
export declare const data: {
    id: number;
    cn: string;
    en: string;
    testMethod: string;
    specifyValue: string;
    originalValue: string;
}[];
