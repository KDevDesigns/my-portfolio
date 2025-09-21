import { Clock, MonitorSmartphone } from "lucide-react";
import React from "react";

export default function ProjectOverview() {
  return (
    <div className="flex flex-col text-lg mx-24 my-12 gap-16">
      <h1 className="text-3xl font-semibold font-sans text-teal-700">
        Project Overview
      </h1>
      <div className="flex flex-col gap-2">
        <div className="my-24">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <MonitorSmartphone />
          The Product
        </h1>
        <p>
          Cicada Hills is a staycation and events venue tucked in the hills of
          the Philippines. It’s a place for families, travelers, and locals to
          celebrate milestones or escape for a weekend. But booking it used to
          be a headache. This project reimagines their website with a clear,
          reliable booking system that anyone can trust.
        </p>
        </div>
        <div className="my-12">
        
        </div>
      </div>
    </div>
  );
}
