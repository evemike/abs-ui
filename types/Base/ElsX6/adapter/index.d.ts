import { AdapterNifi } from "./nifi/nifi";
import { AdapterKettle } from "./kettle/main";
export declare const GraphAdapter: {
    Nifi: typeof AdapterNifi;
    Kettle: typeof AdapterKettle;
};
