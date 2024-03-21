import { atom } from "jotai";
import { ObjectionStatus } from "@/lib/types";

export const objectionStatusAtom = atom<ObjectionStatus>("initiating");
