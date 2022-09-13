import "@jest-decorated/core/globals";
import { sampleForTests } from './../src/index';
import Service from '../service';

// @ts-ignore
const service = global.service;

@Describe()
class SampleTest {
    @It("service can run tests and generate coverage")
    async checkServiceRunsSample() {
        // const service = new Service();
        service.runSample();
    }

    @It("test file can run tests and generate coverage")
    async checkTestsRunsSample() {
        sampleForTests();
    }
}
