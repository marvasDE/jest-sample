import Service from './service';

import NodeEnvironment from 'jest-environment-node';
import { EnvironmentContext, JestEnvironmentConfig } from "@jest/environment";

export default class SampleEnvironment extends NodeEnvironment {
    constructor(config: JestEnvironmentConfig, _context: EnvironmentContext) {
        super(config, _context);
        this.global.service = new Service();
    }
}
