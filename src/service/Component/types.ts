export type Children<C> = Record<string | symbol, C>;

export type Events = Record<string, (e: Event) => void>;

export type Attributes = Record<string, string>;

export type AbstractProps = Record<string | symbol, unknown>;

export type Lists<C> = Record<string, Array<C | string>>;

export type Props = {
    events?: Events;
    attribute?: Attributes;
} & AbstractProps;

export type Meta = {
    tagName: string
    props: AbstractProps;
};
