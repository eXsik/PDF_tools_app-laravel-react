import { Config } from "../../../vendor/tightenco/ziggy/src/js";

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
    errors: {
        [key: string]: string
    };
    error_msg: string | null;
    success_msg: string | null;
};
