import type { AppProps } from "next/app"
import type { Session } from "next-auth"

export interface CustomAppProps extends AppProps {
    pageProps: {
        session: Session | null;
        [key: string]: any
    }
}