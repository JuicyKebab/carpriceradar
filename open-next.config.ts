import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Default config is enough for the MVP (no R2 cache / queue yet).
// Add an incremental cache here later if ISR revalidation needs persistence.
export default defineCloudflareConfig({});
