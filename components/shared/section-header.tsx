// components/shared/section-header.tsx
type SectionHeaderProps = {
  id?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  id,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div id={id} className={`flex flex-col gap-2 ${alignment}`}>
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-sm text-gray-600 md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
