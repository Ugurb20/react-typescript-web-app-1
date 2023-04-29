import {injectable} from "inversify";


@injectable()
export abstract class MockGenerator<T> {
  abstract generateOne(...params : never): T;

  abstract generateMany(...params : never): T[];
}
