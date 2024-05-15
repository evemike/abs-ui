import { AdapterNifi } from "./nifi/main";
import { AdapterKettle } from "./kettle/main";
export declare const GraphAdapter: {
    Nifi: typeof AdapterNifi;
    Kettle: typeof AdapterKettle;
};
