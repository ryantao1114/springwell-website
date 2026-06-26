type ConditionCardProps = {
  condition: {
    name: string;
    description: string;
  };
};

export function ConditionCard({ condition }: ConditionCardProps) {
  return (
    <article className="rounded-md border border-forestDeep/10 bg-white p-5">
      <h3 className="text-lg font-semibold text-forestDeep">{condition.name}</h3>
      <p className="mt-3 text-sm leading-7 text-charcoal/70">{condition.description}</p>
    </article>
  );
}
