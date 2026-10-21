import { notFound, permanentRedirect } from "next/navigation";
import { painConditionBySlug, painConditions } from "../pain-condition-data";

type Props = { params: Promise<{ condition: string }> };

export function generateStaticParams() {
  return painConditions.map((condition) => ({ condition: condition.slug }));
}

export default async function LegacyPainConditionPage({ params }: Props) {
  const { condition: slug } = await params;
  if (!painConditionBySlug[slug]) notFound();
  permanentRedirect(`/care/pain-management#${slug}`);
}
