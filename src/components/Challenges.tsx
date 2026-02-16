import { motion } from "framer-motion";
import { Lightbulb, AlertCircle, CheckCircle2 } from "lucide-react";

interface Challenge {
  company: string;
  problem: string;
  solution: string;
  impact: string;
}

interface ChallengesProps {
  translations: {
    label: string;
    title: string;
    titleHighlight: string;
    problem: string;
    solution: string;
    impact: string;
    challenges: Challenge[];
  };
}

const Challenges = ({ translations }: ChallengesProps) => {
  return (
    <section id="challenges" className="py-24 px-6 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <Lightbulb className="w-5 h-5 text-caramel" />
            <p className="text-caramel font-sans text-sm tracking-[0.25em] uppercase font-medium">
              {translations.label}
            </p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
            {translations.title} <span className="italic text-primary">{translations.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {translations.challenges.map((challenge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-card border border-border shadow-warm overflow-hidden"
            >
              {/* Company Header */}
              <div className="px-6 py-4 bg-secondary/50 border-b border-border">
                <span className="font-serif font-semibold text-lg text-foreground">
                  {challenge.company}
                </span>
              </div>

              {/* Problem-Solution Grid */}
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                {/* Problem */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 rounded-lg bg-destructive/10">
                      <AlertCircle className="w-4 h-4 text-destructive" />
                    </div>
                    <span className="font-sans text-sm font-medium text-destructive uppercase tracking-wide">
                      {translations.problem}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                    {challenge.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 rounded-lg bg-primary/10">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-sans text-sm font-medium text-primary uppercase tracking-wide">
                      {translations.solution}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                    {challenge.solution}
                  </p>
                </div>
              </div>

              {/* Impact Footer */}
              <div className="px-6 py-4 bg-primary/5 border-t border-border">
                <div className="flex items-start gap-2">
                  <span className="font-sans text-xs font-semibold text-caramel uppercase tracking-wide shrink-0">
                    {translations.impact}:
                  </span>
                  <span className="font-sans text-sm text-foreground">
                    {challenge.impact}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
