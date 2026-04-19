import { education } from "@/data/content";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-hand text-2xl text-butter mb-3">school days</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-10">Education</h2>

        <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
          <div className="bg-paper border border-ink/10 p-6 rotate-[-1deg]">
            <p className="font-serif text-2xl">{education.school}</p>
            <p className="mt-2 text-mocha/80">{education.degree}</p>
            <p className="mt-4 text-sm text-mocha/70">{education.dates}</p>
            <p className="mt-1 text-sm">
              <span className="font-hand text-xl text-mocha">GPA: </span>
              <span className="font-serif text-lg">{education.gpa}</span>
            </p>
          </div>

          <div>
            <p className="font-hand text-xl mb-2">activities</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {education.activities.map((a) => (
                <span key={a} className="text-sm px-3 py-1 rounded-full bg-sage/30 border border-ink/10">
                  {a}
                </span>
              ))}
            </div>

            <p className="font-hand text-xl mb-2">relevant coursework</p>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <span key={c} className="text-sm px-3 py-1 rounded-full bg-peach/30 border border-ink/10">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
