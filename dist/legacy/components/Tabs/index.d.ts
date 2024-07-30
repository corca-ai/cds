interface TabItem {
    label: string;
    value: string;
}
export interface TabsProps {
    onChange: (v: string) => void;
    selectedTab: string;
    items: TabItem[];
    tabWidth?: number;
    tabFullWidth?: boolean;
}
export declare function Tabs({ items, onChange, selectedTab, tabWidth, tabFullWidth }: TabsProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
