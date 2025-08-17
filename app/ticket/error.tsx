"use client";
import Placeholder from "@/components/placeholder";
import React from "react";

const Error = ({ error }: { error: Error }) => {
  return <Placeholder label={error.message || "Something Went Wrong"} />;
};

export default Error;
