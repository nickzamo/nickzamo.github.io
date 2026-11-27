import { GlowCard } from "@/components/ui/GlowCard";

const lines: Array<Array<[text: string, tone: "k" | "p" | "s" | "n"]>> = [
  [
    ["const ", "k"],
    ["nick ", "p"],
    ["= {", "n"],
  ],
  [
    ["  role: ", "p"],
    ['"Web Development Lead"', "s"],
    [",", "n"],
  ],
  [
    ["  experience: ", "p"],
    ['"15+ years"', "s"],
    [",", "n"],
  ],
  [
    ["  focus: ", "p"],
    ['["web", "mobile", "desktop"]', "s"],
    [",", "n"],
  ],
  [
    ["  passion: ", "p"],
    ['["build", "teach", "learn"]', "s"],
    [",", "n"],
  ],
  [
    ["  mindset: ", "p"],
    ['"always curious"', "s"],
  ],
  [["};", "n"]],
];

const tones = {
  k: "text-violet",
  p: "text-cyan",
  s: "text-fg",
  n: "text-fg-muted",
} as const;

export function CodeEditor({ label }: { label: string }) {
  return (
    <GlowCard className="min-w-0 p-0" role="img" aria-label={label}>
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="text-fg-muted ml-3 font-mono text-xs">about.ts</span>
      </div>
      <pre
        aria-hidden
        className="overflow-x-auto p-4 font-mono text-xs leading-7 break-words whitespace-pre-wrap sm:p-5 sm:text-sm"
      >
        {lines.map((line, i) => (
          <code key={i} className="block">
            <span className="text-fg-muted/50 mr-3 inline-block w-4 text-right select-none sm:mr-4">
              {i + 1}
            </span>
            {line.map(([text, tone], j) => (
              <span key={j} className={tones[tone]}>
                {text}
              </span>
            ))}
          </code>
        ))}
      </pre>
    </GlowCard>
  );
}
