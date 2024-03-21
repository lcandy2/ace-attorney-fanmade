"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { objectionStatusAtom } from "@/lib/atoms";
import useObjection from "@/lib/hooks/use-objection";

export default function Objection() {
  const [objectionStatus, setObjectionStatus] = useAtom(objectionStatusAtom);
  const [showImage, setShowImage] = useState(false);

  useObjection();

  useEffect(() => {
    if (objectionStatus === "showing") {
      setShowImage(true);
    } else {
      setShowImage(false);
    }
  }, [objectionStatus]);

  return (
    <>
      {showImage && (
        <Image
          src="/assests/images/bubble/objection/japanese.png"
          alt="Objection! (in Japanese)"
          width={300}
          height={300}
        />
      )}
    </>
  );
}
