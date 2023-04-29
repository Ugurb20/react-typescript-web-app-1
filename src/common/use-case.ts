import { injectable } from 'inversify';

@injectable()
export abstract class UseCase<Parameters_, Result> {
  abstract call(parameters: Parameters_): Result;
}

@injectable()
export abstract class UseCaseWithNoParameters<Result> {
  abstract call(): Promise<Result>;
}
