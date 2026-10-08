// Registers the package with @_linked/core whichever entry a consumer imports.
import './package.js';
/** Browser-safe capability report. This entry point does not import signing secrets. */
export { liveKitCapabilities } from './capabilities.js';
export type { LiveKitClientSession, SubscriptionIntent } from './client.js';
