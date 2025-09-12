import Link from "next/link";

export default function CaseStudyNavigation() {
  const caseStudies = [
    {
      id: "itso",
      title: "Intellectual Property Submission Portal",
      description: "Streamlined platform for submitting and tracking intellectual property.",
      href: "/casestudy/ITSO",
    },
    {
      id: "cicada-hills",
      title: "Cicada Hills Premium Website",
      description: "End-to-end booking platform for weddings and events.",
      href: "/casestudy/CicadaHills",
    },
  ];

  return (
    <section className="py-16 border-t">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Explore More Case Studies
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              href={study.href}
              className="block p-6 border rounded-lg hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {study.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {study.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}