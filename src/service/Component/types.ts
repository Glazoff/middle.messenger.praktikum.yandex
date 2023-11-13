export type Children<C> = Record<string | symbol, C>;

export type Events = Record<string, () => void>;

export type Attributes = Record<string, string>;

export type AbstractProps = Record<string | symbol, unknown>;

export type Props = {
    events?: Events;
    attribute?: Attributes;
} & AbstractProps;

export type Meta = {
    tagName: string
    props: AbstractProps;
};
