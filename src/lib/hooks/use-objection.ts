import { useAtom } from "jotai/index";
import { objectionStatusAtom } from "@/lib/atoms";

export default function useObjection() {
  const [objectionStatus, setObjectionStatus] = useAtom(objectionStatusAtom);
}
