import React from "react";
import { PulseLoader } from "react-spinners";
import FeedbackLayout from "../layouts/FeedbackLayout";

export default function Loading() {
  return (
    <FeedbackLayout>
      <PulseLoader speedMultiplier={0.5} size={30} color="#0064EB" />
    </FeedbackLayout>
  );
}
