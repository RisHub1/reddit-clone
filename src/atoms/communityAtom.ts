import { Timestamp } from 'firebase-admin/firestore';
import { atom } from 'recoil'

export interface Community {
    id: string;
    creatorId: string;
    numberOfMembers: number; 
    privacyType: 'public' | 'restricted' | 'private';
    createdAt?: Timestamp;
    imageURL?: string
}