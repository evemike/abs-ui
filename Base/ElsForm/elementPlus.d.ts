import { IElsElem } from "../ElsElem";
import { IElsForm } from "./inter";
export declare const tag: IElsElem.FunctionTag;
export declare const render: IElsElem.RenderFunction;
export declare const setup: IElsElem.SetupFunction;
declare const useElForm: IElsForm.UIPluging;
export default useElForm;
export declare const isFormElem: (e: IElsElem.Elem, en: string, pn?: string) => boolean;
export declare const buildTip: (tip: IElsForm.ColumnItem['tip']) => undefined;
