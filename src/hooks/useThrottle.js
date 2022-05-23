import throttle from "lodash/throttle";

import { useMakeEffect } from "./useMakeEffect";

export const useThrottle = useMakeEffect(throttle);
