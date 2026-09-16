import type { StrengthLevel, StrengthMeta } from './types';

export const STRENGTH_SEGMENTS = 4;
export const STRENGTH_LABEL = 'Password strength';

export const STRENGTH_META: Record<StrengthLevel, StrengthMeta> = {
  0: { label: '—', color: 'strength.track' },
  1: { label: 'Weak', color: 'strength.weak' },
  2: { label: 'Fair', color: 'strength.fair' },
  3: { label: 'Good', color: 'strength.good' },
  4: { label: 'Strong', color: 'strength.strong' },
};
