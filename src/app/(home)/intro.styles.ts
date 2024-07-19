import { twc } from '@/utils/cx';

export const WavingSpan = twc.span`
inline-block 
text-primary-txt
motion-safe:animate-wave
motion-safe:origin-waving
`;

export const SubHeader = twc.span`
    flex flex-row
    items-center
    gap-2
    text-shadow
    shadow-brand-300
    dark:shadow-transparent
`;

export const Name = twc.span`
    dark:text-accent
`;
