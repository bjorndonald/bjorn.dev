import { TemplatesList } from "@/components/ui/templates";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Projects – Bjorn-Donald Bassey",
  description:
    // eslint-disable-next-line max-len
    "Templates by Bjorn-Donald Bassey. Check some cool templates I built that can help you.",
  exactUrl: "https://jahir.dev/projects",
  keywords: [
    "tech",
    "software",
    "development",
    "project",
    "template",
    "portfolio",
    "app",
    "programming",
    "open-source",
  ],
});

export default function TemplatesPage() {
  return <TemplatesList title={"Templates"} />;
}
