import { SetupWorkerApi } from "msw";
import { SetupServerApi } from "msw/lib/types/node";

let mockServer: Record<"start", () => void> = {
  start: () => {},
};

if (typeof window === "undefined") {
  const { server } = require("./server") as { server: SetupServerApi };
  mockServer.start = server.listen;
} else {
  const { worker } = require("./browser") as { worker: SetupWorkerApi };
  mockServer.start = worker.start;
}

export { mockServer };
