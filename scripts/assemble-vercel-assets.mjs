import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const assets = [
  {
    target: "public/images/service-herbal-medicine.webp",
    parts: 2,
    sha256: "f4f95c967c35fa1c17a46c38f993056d7454e77003321dbb82aa82bfac6b263f",
  },
  {
    target: "public/images/theme-mountain-blue.webp",
    parts: 2,
    sha256: "e8dbf13eba141db21682a8fbbc3253eb0989bdf45dd52fd2c67d1b69e6bc87e3",
  },
  {
    target: "public/images/videos/hero-pain-poster.webp",
    parts: 2,
    sha256: "810442f3d36392984f2bf6e9ae5d01d13ff9e50d283a056dd0e0896f8efb6846",
  },
  {
    target: "public/images/videos/hero-stress-digestion-poster.webp",
    parts: 3,
    sha256: "824bee4863e9b2f14bee528349887000a40dc0d334ea3440add945ea6e88b57f",
  },
  {
    target: "public/images/videos/hero-womens-health-uploaded-v4.mp4",
    parts: 19,
    sha256: "86963b144c5dfce696e0b543f08a40da96a8c2e89705a78f7f709a3393b579f6",
  },
];

for (const asset of assets) {
  const chunkRoot = join(".vercel-assets", asset.target);
  let chunks;

  try {
    chunks = await Promise.all(
      Array.from({ length: asset.parts }, (_, index) =>
        readFile(join(chunkRoot, `part-${String(index).padStart(3, "0")}`)),
      ),
    );
  } catch (error) {
    try {
      await readFile(asset.target);
      continue;
    } catch {
      throw error;
    }
  }

  const content = Buffer.concat(chunks);
  const actualHash = createHash("sha256").update(content).digest("hex");

  if (actualHash !== asset.sha256) {
    throw new Error(`Asset verification failed for ${asset.target}`);
  }

  await mkdir(dirname(asset.target), { recursive: true });
  await writeFile(asset.target, content);
}
