import { IElsTable } from "../inter";
import { IElsElem } from "../../ElsElem";
type Config = Pick<IElsTable.Props, "index" | "select" | "column">;
export declare class TableColumn {
    index: Config['index'];
    select: Config['select'];
    sourceColumn: Config['column'];
    constructor(config: Config);
    column: Map<string, IElsTable.ColumnItem>;
    headerData: any;
    bodyData: any;
    watchColumn(): void;
    setColumn(): void;
    parseColumnItem(d: IElsTable.ColumnItem): void;
    getHeader(): void;
    getHeaderElem(d: IElsTable.ColumnItem): IElsElem.Elem;
    setHeaderColumn(): void;
    setBodyColumn(): void;
}
export {};
