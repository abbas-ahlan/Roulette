type Construct = 
{
    id: string,
    rolls: number[] | string[],
    colors?: string[],
    duration?: number,
    arrow?: newArrow,
    landing?: 'precise' | 'loose',
    rotate?: number,
    diameter?: number,
    shrink?: number,
};

export type newArrow = {
    element?: string | HTMLElement,
    width?: number,
    fill?: string,
    rotate?: number
};

export type Standard = Construct & {
    type?: 'standard',
}

export type Doughnut = Construct & {
    type: 'doughnut',
    doughnut: { diameter: number, fill?: string},
}

export type Custom = Construct & {
    type: 'image',
    image: { src: string, angle?: number },
}
