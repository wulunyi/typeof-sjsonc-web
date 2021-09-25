import type Monitor, {WebConfig} from 'aegis-web-sdk';

declare global {
    class Aegis extends Monitor {
        constructor(config: WebConfig): Aegis;
    }
}