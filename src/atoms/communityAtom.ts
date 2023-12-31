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

export interface CommunitySnippet {
    communityId: string; 
    isModerator?: boolean;
    imageURL?: string;
}

interface CommunityState {
    mySnippets: CommunitySnippet[]; 
}

const defaultCommunityState: CommunityState = {
    mySnippets: [],
}

export const communityState = atom<CommunityState> ({
    key: "communitiesState",
    default: defaultCommunityState
})